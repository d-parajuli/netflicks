import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, CardSubtitle, CardImgOverlay, Button
} from 'reactstrap';
import './feature.css';

class Feature extends React.Component {
  constructor(props){
    super(props);
  }

render(){
  return (

    <div clasName ="feature" >
      <img src= {`https://image.tmdb.org/t/p/original/5rZ9PiWtFDXM5a0qmKTfXEYg766.jpg`} width="100%" height="700" />
        <div className="btns">
        <Button color="danger" size="lg">PLAY</Button>{' '}
        <Button color="secondary"  size="lg"> + MY LIST</Button>
        </div>
        <div className= "feature-title">Southpark</div>
          <div className="p">
              Follow the misadventures of four irreverent grade-schoolers<br/>
              in the quiet, dysfunctional town of South Park, Colorado.
          </div>
    </div>
  )
}
}


export default Feature;
