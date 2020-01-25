import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,  Col, Container,Button
} from 'reactstrap';
import'./contentList.css'



class TopRatedMovies extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      hover: false,
    }
  }


render(){

const top = this.props.top;
let top_list = null;
if(top !== null){
  console.log(top)
  top_list= top.map((item, i) =>
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
    this.top_list!== null &&
      top_list
  }
  </div>
)
}
}

export default TopRatedMovies;
