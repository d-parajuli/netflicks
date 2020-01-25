const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

// Weather Type
const ContentType = new GraphQLObjectType({
  name:'Content',
  fields:() => ({
    movies: {type: new GraphQLList(MoviesType)},
    top: {type: new GraphQLList(MoviesType)},
    popular_tv: {type: new GraphQLList(TVType)}
  })
});


const MoviesType = new GraphQLObjectType({
  name:'Movies',
  fields:() => ({
    title:{type: GraphQLString},
    overview:{type: GraphQLString},
    poster_path: {type: GraphQLString},
    vote_average:{type: GraphQLString}
  })
});

const TVType = new GraphQLObjectType({
  name:'TV',
  fields:() => ({
    name:{type: GraphQLString},
    overview:{type: GraphQLString},
    poster_path: {type: GraphQLString},
    vote_average:{type: GraphQLString}
  })
});


module.exports = ContentType;
