import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import auth from '../../utils/auth';
import Sidebar from '../../components/Sidebar/index';
import { useGlobalUserContext } from '../../utils/GlobalState';
import BarChart from '../../components/ChartJs';

const Dashboard = () => {
  // console.log(auth.loggedIn())
  // console.log(auth.getProfile().data.firstName)
  const [state, dispatch] = useGlobalUserContext();
  console.log(state);
  // useEffect(console.log(state), []);
  return (
    <>
    <div className="d-flex">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="p-2 flex-grow-1">
        <h1>Hello, {state.firstName}</h1>
        <h3>content</h3>
      </div>
    </div>
      <BarChart/>
      </>
  );
};

export default Dashboard;
