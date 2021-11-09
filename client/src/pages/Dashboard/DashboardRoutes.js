import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoutes';
import Dashboard from './Dashboard';
import Feed from './Feed';
import Challenges from './Challenges';
import Events from './Events';
import Account from './Account';
import HabitTracker from './HabitTracker';
import DailyActions from './DailyActions';
import Resources from './Resources';

const DashboardRoutes = () => {
    return (
      <div className="container">
        <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/feed" component={Feed} />
        <PrivateRoute exact path="/challenges" component={Challenges} />
        <PrivateRoute exact path="/events" component={Events} />
        <PrivateRoute exact path="/Account" component={Account} />
        <PrivateRoute exact path="/Challenges" component={Challenges} />
        <PrivateRoute exact path="/DailyActions" component={DailyActions} />
        <PrivateRoute exact path="/HabitTracker" component={HabitTracker} />
        <PrivateRoute exact path="/Resources" component={Resources} />
        </Switch>
      </div>
    );
  };
  
  export default DashboardRoutes;