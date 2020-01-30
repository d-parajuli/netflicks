import React from 'react';
import { Navbar,Nav,  Form, FormControl, Button } from 'react-bootstrap';
import './header.css'
import { withRouter } from "react-router-dom";


class Header extends React.Component {
  constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this);
  }

  onClick(){
    console.log("MY LIST CLICKED");
    this.props.history.push("/mylist");
  }

render(){
  return (
    <div clasName ="feature" >
    <Navbar bg="black" variant="dark" sticky ="top">
        <div className="netflicks">Netflicks</div>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link onClick={this.onClick}>My List</Nav.Link>

    </Nav>
    </Navbar>
    </div>
  )
}
}


export default withRouter(Header)
