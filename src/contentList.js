import React from 'react';
import {Button} from 'reactstrap';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';
import PopularMovies from './popularMovies.js';
import TopRatedMovies from './topRatedMovies.js';
import PopularTV from './popularTV.js'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});



class ContentList extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      popular_movies: null,
      top_rated_movies:null,
      popular_tv:null,
    }

    this.componentDidMount= this.componentDidMount.bind(this)
  }

componentDidMount(){
      client
        .query({
        query: gql`
        query getPopularMovies {
  	       getPopularMovies {
              movies {
             	title
            	overview
              poster_path
              vote_average
              }
            }
          },
          `
        })
        .then(data => {
          console.log(data.data.getPopularMovies.movies)
            this.setState({popular_movies: data.data.getPopularMovies.movies}, function(){
              console.log(this.state.popular_movies);

            })
        })
        .catch(error => console.error(error));

        client
          .query({
          query: gql`
          query getTopRatedMovies {
    	       getTopRatedMovies {
                top {
               	title
              	overview
                poster_path
                vote_average
                }
              }
            },
            `
          })
          .then(data => {
            console.log(data.data.getTopRatedMovies.top)
              this.setState({top_rated_movies: data.data.getTopRatedMovies.top}, function(){
                console.log(this.state.top_rated_movies);

              })
          })
          .catch(error => console.error(error));

          client
            .query({
            query: gql`
            query getPopularTV {
               getPopularTV {
                popular_tv {
                  name
                  overview
                  poster_path
                  vote_average
                  }
                }
              },
              `
            })
            .then(data => {
              console.log(data.data.getPopularTV.popular_tv)
                this.setState({popular_tv: data.data.getPopularTV.popular_tv}, function(){
                  console.log(this.state.popular_tv);

                })
            })
            .catch(error => console.error(error));
}


render(){
  return (
    <div>
    <h2 style={{color: "white"}}>Popular Movies </h2>
    <PopularMovies popular={this.state.popular_movies}/>
    <h2 style={{color: "white"}}> Top Rated Movies </h2>
    <TopRatedMovies top={this.state.top_rated_movies}/>
    <h2 style={{color: "white"}}> Popular TV Shows</h2>
    <PopularTV pop_tv={this.state.popular_tv}/>
    </div>
  )
}
}




export default ContentList;
