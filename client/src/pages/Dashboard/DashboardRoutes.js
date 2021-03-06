import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoutes';
import Dashboard from './Dashboard';
import Feed from './Feed';
import Challenges from './Challenges';
import Account from './Account';
import HabitTracker from './HabitTracker';
import DailyActions from './DailyActions';
import Resources from './Resources';
import Messenger from '../Messenger/Messenger';
import JoinedChallenges from '../Dashboard/JoinedChallenges'

import BeginQuestionnaire from '../Questionnaire/BeginQuestionnaire';
import Questionnaire from '../Questionnaire/Questionnaire';
import Results from '../Questionnaire/Results';
import { Container } from 'react-bootstrap';
import Nav from '../../components/Nav/index'

const DashboardRoutes = () => {
  return (
    <>
      <Nav />
      <Container style={{ margin: '30px auto' }}>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/feed" component={Feed} />
          <PrivateRoute exact path="/challenges" component={Challenges} />
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path="/challenges" component={Challenges} />
          <PrivateRoute exact path="/joinedchallenges" component={JoinedChallenges} />
          <PrivateRoute exact path="/dailyactions" component={DailyActions} />
          <PrivateRoute exact path="/habittracker" component={HabitTracker} />
          <PrivateRoute exact path="/resources" component={Resources} />
          <PrivateRoute exact path="/beginquestionnaire" component={BeginQuestionnaire} />
          <PrivateRoute exact path="/questionnaire" component={Questionnaire} />
          <PrivateRoute exact path="/results" component={Results} />
          <PrivateRoute exact path="/messenger" component={Messenger} />
        </Switch>
      </Container>
    </>
  );
};

export default DashboardRoutes;
