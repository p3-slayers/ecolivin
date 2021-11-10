import React, { useEffect } from 'react';
import auth from './utils/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { UserContextProvider } from './utils/GlobalState';
import Donate from './pages/Donate';
import DashboardRoutes from './pages/Dashboard/DashboardRoutes';
import PrivateRoute from './pages/PrivateRoutes';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// hook for on load
// if loggedIn(), if token exists, and session not expired =>
// query localStorage for userData,
// set userData to global state
// load history[history.length - 1]
// else
// load default landing page

// If user logs out,
// remove token
// clear localStorage userData entry.

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const checkJWT = () => {
    let token = localStorage.getItem('id_token');
  };

  useEffect(checkJWT, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <UserContextProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/about" component={About} />
            <PrivateRoute component={DashboardRoutes} />
          </Switch>
        </UserContextProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
