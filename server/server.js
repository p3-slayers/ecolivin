const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const cors = require('cors');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const routes = require('./api')

const PORT = process.env.PORT || 3001;

const app = express();

// Socket.io Stuff
const httpServer = require('http').createServer(app);
const options = {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
};
const io = require('socket.io')(httpServer, options);
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// apollo (graphql) stuff
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

apolloServer.applyMiddleware({ app });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);


// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  console.log(`REQUEST RECEIVED`);
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
  // changed this so the app with call listen on the httpServer instead of directly on the app because the DB connection is rolled into App, and app is rolled into httpServer which also has socket.io. app still handles routing and initializing apollo, and socket.io will handle websocket traffic for chat- all 3 functions are contained within httpServer.
  httpServer.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
  });
});
