import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, CardSubtitle, CardImgOverlay, Button, Col
} from 'reactstrap';
import './feature.css';
import Header from './header.js';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTU4MDMwODU4MH0.7_C-X9lrjxmg8hmoqn-OypAvt9wQFTruk9n6hn_LvYI'
      }
    })
  }
})

class MyList extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      my_list : null,
    }

    this.componentDidMount= this.componentDidMount.bind(this)
  }


componentDidMount(){
  client
    .query({
    query: gql`
    query displayList {
       displayList {
          list {
          title
          poster_path
          vote_average
          }
        }
      },
      `
    })
    .then(data => {
      console.log("DATA SHOULD BE HERE" + data)
    })
    .catch(error => console.error(error));
  }

render(){
  const userlist= this.state.my_list;
  let display_list = null;
  if(userlist !== null){
    console.log(userlist)
    display_list= userlist.map((item, i) =>
    <Col md="auto" key={i}>
          <Card style={{backgroundColor:'black'}}>
              <CardImg src= {`https://image.tmdb.org/t/p/w300/${item.poster_path}`}   height={300} width={380} alt="" />
              <div className="card-img-overlay">
                <div className= "title">
                <CardTitle>
                <Button color="danger" size="sm">PLAY</Button>{' '}
                <Button color="secondary"  size="sm" key={i} onClick={()=> this.SaveToList(item)}> + MY LIST</Button>
                 <br/>
                {item.title} <br/> <div className= "vote">{item.vote_average}</div>
                </CardTitle></div>
              </div>
          </Card>
    </Col>
    )
  return (
    <div clasName ="feature" >
    <Header/>

    <div className="flex-container">
    {
      this.state.my_list!== null &&
        display_list
    }
    </div>
    </div>
  )
}
}
}

export default MyList;
