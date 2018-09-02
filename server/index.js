import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import express from "graphql-playground-middleware-express";

const config  = require('./config/config.json');
const mongoose = require('mongoose');
const cors = require('cors');

const options = {
    port: config.port,
    endpoint: config.endpoint,
    subscriptions: config.subscriptions,
    playground: config.playground,
}

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers
});

server.use(cors());
mongoose.connect(config.uri);
mongoose.connection.once('open',()=>{
    console.log('connected to database');
});

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)