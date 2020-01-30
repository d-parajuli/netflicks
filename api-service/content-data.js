const {
  GraphQLObjectType,
  GraphQLInputObjectType,
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

const RegisterUserType = new GraphQLInputObjectType({
  name:'RegisterUserType',
  fields:() => ({
    name:{type: GraphQLString},
    email:{type: GraphQLString},
    password: {type: GraphQLString}
  })
});

const UserType = new GraphQLObjectType({
  name:'UserType',
  fields:() => ({
    name:{type: GraphQLString},
    email:{type: GraphQLString},
    password: {type: GraphQLString}
  })
});

const LoginType = new GraphQLInputObjectType({
  name:'LoginType',
  fields:() => ({
    email:{type: GraphQLString},
    password: {type: GraphQLString}
  })
});

const FavType = new GraphQLObjectType({
  name:'FavType',
  fields:() => ({
    title:{type: GraphQLString},
    poster_path: {type: GraphQLString},
    vote_average: {type: GraphQLString}
  })
});

const WriteType = new GraphQLInputObjectType({
  name:'WriteType',
  fields:() => ({
    title:{type: GraphQLString},
    poster_path: {type: GraphQLString},
    vote_average: {type: GraphQLString}
  })
});


const DisplayType =new GraphQLObjectType({
  name:'DisplayType',
  fields:() => ({
    list: {type: new GraphQLList(ListType)},
  })
});


const ListType = new GraphQLObjectType({
  name:'ListType',
  fields:() => ({
    title:{type: GraphQLString},
    poster_path: {type: GraphQLString},
    vote_average: {type: GraphQLString}
  })
});




module.exports = {
  ContentType,
  RegisterUserType,
  UserType,
  LoginType,
  WriteType,
  FavType,
  DisplayType
};
