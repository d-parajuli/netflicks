import React from 'react';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import './login.css';



class SignUp extends React.Component {
  constructor(props){
    super(props);
  }


onNameRegister = (event) =>{
      this.setState({Name: event.target.value})
      console.log(event.target.value);
    }
onEmailRegister = (event) =>{
          this.setState({Name: event.target.value})
          console.log(event.target.value);
        }
onPasswordRegister = (event) =>{
              this.setState({Name: event.target.value})
              console.log(event.target.value);
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
    <Button variant="danger" size="lg" block>Sign Up</Button>
    <br/>
    </div>
    </Card>
    </div>
  )
}
}


export default SignUp;
