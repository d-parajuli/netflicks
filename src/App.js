import React from 'react';
import ContentList from './contentList.js';
import Feature from './feature.js';
import Header from './header.js';
import Login from './login.js';
import SignUp from './signUp.js';
import Browse from './browse.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import MyList from './mylist.js';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Local: ''
    }
  }

  render(){
    return (
       <Router>
        <div className="App">
          <Route path="/login" component={Login} />
          <Route path ='/signup' component={SignUp} />
          <Route path ='/browse' component={Browse} />
        </div>
      </Router>
    )
  }
}


export default App;
