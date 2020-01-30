const express = require('express');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./gql-schema.js')

const app = express();
var cors = require('cors');

app.use(cors())
app.use(
  '/graphql', (req, res) =>
  {
    graphqlHTTP(
    {
      schema: MyGraphQLSchema,
      graphiql: true,
      context:
      {
        jwt: req.headers.authorization
      }
    })(req, res)
  }
);




app.listen(4000);
