const express = require('express');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./gql-schema.js')

const app = express();
var cors = require('cors');

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  }),
);

app.listen(4000);
