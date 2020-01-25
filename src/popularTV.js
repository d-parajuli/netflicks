import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container, Button
} from 'reactstrap';
import './contentList.css';



class PopularTV extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      hover: false,
    }
  }


render(){

const pop_tv= this.props.pop_tv;
let pop_tv_list = null;
if(pop_tv !== null){
  console.log(pop_tv)
  pop_tv_list= pop_tv.map((item, i) =>
  <Col md="auto" key={i}>
        <Card style={{backgroundColor:'black'}}>
            <CardImg src= {`https://image.tmdb.org/t/p/w300/${item.poster_path}`}   height={300} width={380} alt="" />
            <div className="card-img-overlay">
              <div className= "title">
              <CardTitle>
              <Button color="danger" size="sm">PLAY</Button>{' '}
              <Button color="secondary"  size="sm"> + MY LIST</Button>
               <br/>
              {item.name} <br/> <div className= "vote">{item.vote_average}</div>
              </CardTitle></div>

            </div>
        </Card>
  </Col>
  )
}

return (
  <div className="flex-container">
  {
    this.pop_tv_list!== null &&
      pop_tv_list
  }
  </div>
)
}
}

export default PopularTV;
