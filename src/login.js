import React from 'react';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import './login.css';
import { withRouter } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { sha256, sha224 } from 'js-sha256';



const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Email: '',
      Password: '',
      local: ''
    }
    this.onUserLogin=this.onUserLogin.bind(this);
  }

routeToSignUp = () => {
      this.props.history.push("/signup");
  };

onEmailLogin = (event) =>{
    this.setState({Email: event.target.value})
    console.log(event.target.value);
  }

onPasswordLogin = (event) =>{
      this.setState({Password: event.target.value})
      console.log(event.target.value);
    }

onUserLogin(){
 let password = sha256.update(this.state.Password).hex();
  console.log('check:' + password);
          client.query({
          query: gql`
            query loginUser($user: LoginType! )
            {
              loginUser(user: $user)
            }
          `,
          variables:
          {
            user:
            {
              email: this.state.Email,
              password: password,
            }
          }
          })
          .then(data => {
            console.log('TOKEN is ' + data.data.loginUser)
            let accesstoken = data.data.loginUser;
            console.log(accesstoken);
            if(accesstoken !== null){
              localStorage.setItem('token', accesstoken);
              console.log(localStorage.getItem('token'));
              this.props.history.push("/");

            }
          })
          .catch(error => console.error('error' + error));
        }


render(){
  return (

<div className="login-bg">
<Card bsPrefix= "login-card" style={{ width: '18rem' }}>
<div className="card-content">
<h1> Sign In </h1>
<Form>
<Form.Group controlId="formGroupEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" onChange={this.onEmailLogin} />
</Form.Group>
<Form.Group controlId="formGroupPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" onChange={this.onPasswordLogin} />
</Form.Group>
</Form>
<Button variant="danger" size="lg" block onClick={this.onUserLogin}>Sign In</Button>
<Button variant="danger" size="lg" block onClick={this.routeToSignUp}>Sign Up</Button>
<br/>
</div>
</Card>
</div>
)
}

}



export default withRouter(Login);
