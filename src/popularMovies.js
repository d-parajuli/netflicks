import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container, Button
} from 'reactstrap';
import './contentList.css';

class PopularMovies extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      hover: false,
    }
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
              <Button color="secondary"  size="sm"> + MY LIST</Button>
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
