import React from 'react';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import './login.css';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Password: ''
    }
    this.onUserRegister=this.onUserRegister.bind(this);
  }


onNameRegister = (event) =>{
      this.setState({Name: event.target.value})
      console.log(event.target.value);
    }
onEmailRegister = (event) =>{
    this.setState({Email: event.target.value})
    console.log(event.target.value);
        }
onPasswordRegister = (event) =>{
      this.setState({Password: event.target.value}, function(){console.log(this.state.Password)})
      console.log(event.target.value);
            }

onUserRegister(){
      client.mutate({
      mutation: gql`
        mutation registerUser($user: RegisterUserType! )
        {
          registerUser(user: $user)
          {
            name
            email
            password
          }
        }
      `,
      variables:
      {
        user:
        {
          name: this.state.Name,
          email: this.state.Email,
          password: this.state.Password
        }
      }
      })
      .then(data => {
        console.log("User Registered")
        console.log("Registered User :" + data.data.registerUser)

      })
      .catch(error => console.error(error));
    }


render(){
  return (
    <div className="login-bg">
    <Card bsPrefix= "login-card" style={{ width: '18rem' }}>
    <div className="card-content">
    <h1> Sign Up </h1>
    <Form>
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Name" onChange={this.onNameRegister} />
    </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailRegister} />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={this.onPasswordRegister}/>
  </Form.Group>
</Form>
    <Button variant="danger" size="lg" block onClick={this.onUserRegister}>Sign Up</Button>
    <br/>
    </div>
    </Card>
    </div>
  )
}
}


export default SignUp;
