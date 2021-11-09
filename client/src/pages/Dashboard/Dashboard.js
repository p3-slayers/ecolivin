import React, { useEffect, useState , useContext} from 'react';
import { Link } from 'react-router-dom';
// import auth from '../../utils/auth';
import Sidebar from '../../components/Sidebar/index'


const Dashboard = () => {

  // console.log(auth.loggedIn())
  // console.log(auth.getProfile().data.firstName)

  return (
    <div>
     <Sidebar/>
    </div>
  );
};

export default Dashboard;
