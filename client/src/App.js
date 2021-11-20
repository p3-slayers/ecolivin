import React, { useState, useEffect } from 'react';
import auth from './utils/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/SuccessfulDonation';
import Donate from './pages/Donate';
import DashboardRoutes from './pages/Dashboard/DashboardRoutes';
import PrivateRoute from './pages/PrivateRoutes';

// imports for restoring state on pageload
import { useGlobalUserContext } from './utils/GlobalState';
// eslint-disable-next-line no-unused-vars
import { QUERY_SINGLE_USER, QUERY_SINGLE_ACTION } from './utils/queries';
import { SET_USER_DATA } from './utils/actions';


// THIS CONTROLS THE CONFIGURATION FOR ALL PAGE TRANSITION ANIMATIONS
import pageTransitions from './utils/pageTransitions';


function App({ apolloClient }) {
  console.log(apolloClient);
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useGlobalUserContext();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    let loggedInUserId = get_id();
    console.log(loggedInUserId);
    const queryUserData = async (id) => {
      console.log(`queryUserData fired`);
      try {
        if (loggedInUserId) {
          console.log(`FIRING GRAPHQL QUERY`)
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
        } else {
          console.log(`no logged in user found, graphQL query skipped`)
        }
      } catch (err) {
        console.log(err);
      }
    };
    let userData = queryUserData(loggedInUserId)
      .then(() => {
        setIsLoading(false);
      })
    console.log(userData);
  }, [isLoading, apolloClient, dispatch, state]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => (<Home transition={pageTransitions} />)} />
        <Route exact path="/login" component={(props) => (<Login transition={pageTransitions} />)} />
        <Route exact path="/signup" component={(props) => (<Signup transition={pageTransitions} />)} />
        <Route exact path="/donate" component={(props) => (<Donate transition={pageTransitions} />)} />
        <Route exact path="/team" component={(props) => (<Team transition={pageTransitions} />)} />
        <Route exact path="/about" component={(props) => (<About transition={pageTransitions} />)} />
        <Route exact path="/success" component={(props) => (<Success transition={pageTransitions} />)} />
        <PrivateRoute component={DashboardRoutes} />
      </Switch>
    </Router>
  );
}

export default App;
