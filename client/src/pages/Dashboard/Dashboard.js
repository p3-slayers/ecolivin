import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import auth from '../../utils/auth';
import Sidebar from '../../components/Sidebar/index';

import { useGlobalUserContext } from '../../utils/GlobalState';

const Dashboard = () => {
  // console.log(auth.loggedIn())
  // console.log(auth.getProfile().data.firstName)
  const [state, dispatch] = useGlobalUserContext();
  console.log(state);
  // useEffect(console.log(state), []);
  return (
    <div>
      <h1>Hello, {state.firstName}</h1>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
