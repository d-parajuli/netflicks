import React from 'react';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import './login.css';
import { withRouter } from "react-router-dom";


class Login extends React.Component {
  constructor(props){
    super(props);
  }

routeToSignUp = () => {
      this.props.history.push("/signup");
  };

onEmailLogin = (event) =>{
    this.setState({loginEmail: event.target.value})
    console.log(event.target.value);
  }

onEmailLogin = (event) =>{
      this.setState({loginEmail: event.target.value})
      console.log(event.target.value);
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
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
    <Button variant="danger" size="lg" block>Sign In</Button>
    <Button variant="danger" size="lg" block onClick={this.routeToSignUp}>Sign Up</Button>
    <br/>
    </div>
    </Card>
    </div>
  )
}
}


export default withRouter(Login);
