import React, { useEffect } from 'react';
import auth from './utils/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  // InMemoryCache,
  // ApolloProvider,
  // createHttpLink,
  useQuery,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Donate from './pages/Donate';
import DashboardRoutes from './pages/Dashboard/DashboardRoutes';
import PrivateRoute from './pages/PrivateRoutes';

// imports for restoring state on pageload
import { useGlobalUserContext } from './utils/GlobalState';
import { QUERY_SINGLE_USER, QUERY_SINGLE_ACTION } from './utils/queries';
import { SET_USER_DATA } from './utils/actions';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

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

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App({ apolloClient }) {
  console.log(apolloClient);
  const [state, dispatch] = useGlobalUserContext();

  const get_id = () => {
    console.log(`get_id Fired!`);
    try {
      let loggedIn = auth.loggedIn();

      if (loggedIn) {
        console.log(`Logged in!`);
        let profile = auth.getProfile();
        console.log(profile);
        let _id = profile.data._id;
        console.log(_id);
        return _id;
      } else {
        console.log(`NOT logged in!`);
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // const { loading, data } = useQuery(QUERY_SINGLE_USER, {
  //   variables: { id: loggedInUser },
  // });

  // console.log(data);

  useEffect(() => {
    let loggedInUserId = get_id();
    console.log(loggedInUserId);
    const queryUserData = async (id) => {
      console.log(`queryUserData fired`);
      try {
        const user = await apolloClient.query({
          query: QUERY_SINGLE_USER,
          variables: { id: id },
        });
        const userData = user.data.singleUser;
        console.log(user);
        console.log(userData);
        dispatch({
          type: SET_USER_DATA,
          payload: userData,
        });
      } catch (err) {
        console.log(err);
      }
    };
    let userData = queryUserData(loggedInUserId);
    console.log(userData);
  });

  return (
    <Router>
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
    </Router>
  );
}

export default App;
