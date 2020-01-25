import React from 'react';
import { Button, Form, FormControl, Card } from 'react-bootstrap';
import ContentList from './contentList.js';
import Feature from './feature.js';
import Header from './header.js';



class Browse extends React.Component {
  constructor(props){
    super(props);
  }

render(){
  return (
    <div>
    <Header/>
    <Feature/>
    <ContentList/>
    </div>
  )
}
}


export default Browse;
