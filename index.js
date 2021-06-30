"use strict";

const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const port = process.env.port || 3000;

//schema
const schema = buildSchema(`
    type Query{
        hello: String
        saludo: String
    }
`);

//Configurar los resolvers
const resolvers = {
  hello: () => {
    return "Hola mundo";
  },
  saludo: () => {
    return "Hola a todos";
  },
};

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});

//ejecutar query
// graphql(schema, "{saludo}", resolvers).then((data) => {
//   console.log(data);
// });
