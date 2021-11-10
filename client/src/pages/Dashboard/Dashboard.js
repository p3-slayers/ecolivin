import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
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


  //on the container that wraps around these pages add margin 30px auto
  return (
    <div className="d-flex" > 
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="p-2 flex-grow-1" style={{marginLeft:'30px'}}>
        <h1>Hello, {state.firstName}</h1>
        <h3>Profile page/ dashboard content</h3>    
        <h1>Hello, {state.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
