const cote = require('cote');
const contentClient = new cote.Requester({ name: 'Content Client (API)', namespace: 'content' });
const databaseClient = new cote.Requester({ name: 'Database Client (API)', namespace: 'database' });
const ContentType = require('./content-data.js');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphqlBoolean
} = require('graphql');

// Root Query
const RootQuery= new GraphQLObjectType({
  name:'RootQueryType',
  fields:
  {
    getPopularMovies:{
      type:ContentType,
      resolve(parentValue){
        return contentClient.send({type: 'popular'})
        .then(res => {
          console.log("Popular movies " + JSON.stringify(res));
          return res
        });
      }
    },
    getTopRatedMovies:{
      type:ContentType,
      resolve(parentValue)
      {
        return contentClient.send({type: 'top'})
        .then(res =>
        {
          console.log("Top Rated Movies " + JSON.stringify(res));
          return res
        })
      }
    },
    getPopularTV:
    {
        type:ContentType,
        resolve(parentValue)
        {
          return contentClient.send({type: 'popular_tv'})
          .then(res =>
          {
            console.log("Popular TV " + JSON.stringify(res));
            return res
          })
        }
    },
    getTest:
    {
        type:GraphQLString,
        resolve(parentValue)
        {
          console.log('here')
          return databaseClient.send({type: 'top'})
          .then(res =>
          {
            console.log("TestTop" + res);
            return res
          })
        }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
