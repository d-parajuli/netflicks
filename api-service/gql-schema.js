const cote = require('cote');
const jwtDecode = require('jwt-decode');
const contentClient = new cote.Requester({ name: 'Content Client (API)', namespace: 'content' });
const databaseClient = new cote.Requester({ name: 'Database Client (API)', namespace: 'database' });

const jwt = require ('jsonwebtoken');

const {
  ContentType,
  RegisterUserType,
  UserType,
  LoginType,
  WriteType,
  FavType,
  DisplayType
} = require('./content-data.js');

const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphqlBoolean
} = require('graphql');

//verify JWT TOKEN function

// const token = context.jwt;
// const accessToken = token.trim().split(' ')[1];

async function auth(token, cb) {
  const accessToken = token.trim().split(' ')[1];
  await jwt.verify(accessToken, "secret-keu", (err, checkedUser) => {
    if(err){
        console.log(err)
        cb(false, "Invalid Credentials, please sign in")
    }
// checkedUser is the email- because this was coded
		console.log("User received from the middleware " + checkedUser.email);
    cb(true, checkedUser.email)
  })
}

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
    loginUser:
    {
      type:GraphQLString,
      args:{
        user: {type: LoginType}
      },
      resolve(parentValue, args, context)
      {
        console.log('Args:' + JSON.stringify(args.user))
        return databaseClient.send({type: 'userlogin', query:{...args}})
        .then(res =>
        {
          console.log("User Login " + JSON.stringify(res));
          if(res.data.status)
          {
            return JSON.stringify(res.data.token)
          }
          else {
            return 'denied'
          }

        })
      }
    },
    displayList:{
      type: GraphQLString,
    resolve(parentValue, args, context){
      return auth(context.jwt, (authenticated, message) => {
        if (authenticated){
          console.log('authenticated:' + authenticated + " -> " + message);
          return databaseClient.send({type: 'displayList', query:{...args, message}})
          .then(res => {
            console.log("THIS IS BEING SENT BACK" + JSON.stringify(res))
            return res
          })
        }
        else{
          return message
        }
        });
    }
  }
  }
});

// Mutation Query
const MutationQuery= new GraphQLObjectType({
  name:'mutation',
  fields:
  {
    registerUser:{
      type:UserType,
      args:{
        user:{type:RegisterUserType}
      },
      async resolve(parentValue, args){
        console.log('args:' + JSON.stringify(args))
        return await databaseClient.send({type: 'register', query:{...args}})
        .then(res => {
          console.log("the user is registered: " + JSON.stringify(res));
          return JSON.parse(res.data)
        });
      }
    },
    writeFavorite:{
      type:GraphQLString,
      args:{
        fav:{type:WriteType}
      },
      resolve(parentValue, args, context){
        console.log('context:' + JSON.stringify(context.jwt))
        return auth(context.jwt, (authenticated, message) => {
          if (authenticated){
            console.log('authenticated:' + authenticated + " -> " + message);
            return databaseClient.send({type: 'writeFavorite', query:{...args, message}})
            .then(res => {
              return res
            })
          }
          else{
            return message
          }
          });
    }
  },
}
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery
});
