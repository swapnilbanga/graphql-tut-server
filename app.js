const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schemas/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb://swapnil:root123@ds043917.mlab.com:43917/graphql-tut",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(5000, () => {
  console.log("Listening on 5000");
});
