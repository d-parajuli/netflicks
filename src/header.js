import React from 'react';
import { Navbar,Nav,  Form, FormControl, Button } from 'react-bootstrap';
import './header.css'

class Header extends React.Component {
  constructor(props){
    super(props);
  }

render(){
  return (
    <div clasName ="feature" >
    <Navbar bg="black" variant="dark" sticky ="top">
        <div className="netflicks">Netflicks</div>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/login">My List</Nav.Link>

    </Nav>
    </Navbar>
    </div>
  )
}
}


export default Header
