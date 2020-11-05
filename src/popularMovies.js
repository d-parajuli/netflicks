import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container, Button, Alert
} from 'reactstrap';
import './contentList.css';
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

class PopularMovies extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      hover: false,
      visible: false
    }
  }



SaveToList(a){
  console.log("TOKEN IS" + localStorage.getItem('token'))
  console.log(a.title)
  console.log(a.poster_path)
  console.log(a.vote_average)
  client.mutate({
  mutation: gql`
  mutation writeFavorite($fav: WriteType) {
    writeFavorite(fav: $fav)
  }
  `,
  variables:
  {
    fav:
    {
      title: a.title,
      poster_path: a.poster_path,
      vote_average: a.vote_average
    }
  }
  })
  .then(data => {
    console.log("Movie added :" + data)
    alert("Movie successfully added")
  })
  .catch(error => console.error(error));
}



render(){

const popular= this.props.popular;
let popular_list = null;
if(popular !== null){
  console.log(popular)
  popular_list= popular.map((item, i) =>
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
}

return (
  <div className="flex-container">
  {
    this.popular_list!== null &&
      popular_list
  }

  </div>
)
}
}

export default PopularMovies;
