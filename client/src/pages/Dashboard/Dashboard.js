import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import auth from '../../utils/auth';
import Sidebar from '../../components/Sidebar/index';
import { useGlobalUserContext } from '../../utils/GlobalState';
import BarChart from '../../components/ChartJs';
import { Button } from "react-bootstrap";

const Dashboard = () => {
  // console.log(auth.loggedIn())
  // console.log(auth.getProfile().data.firstName)
  const [state, dispatch] = useGlobalUserContext();
  console.log("mystate", state);
  // useEffect(console.log(state), []);



  //on the container that wraps around these pages add margin 30px auto
  return (

    <>
    <div className="d-flex mt-5">

      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="px-5 flex-grow-1" style={{marginLeft:'30px'}}>
        <h2>Hello, {state.firstName}</h2>
        {/* <h3>Profile page/ dashboard content</h3>    
        <h1>Hello, {state.email}</h1> */}
        <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/beginquestionnaire"
              > 
          <Button style={{ width: "50%"}}>
              Retake Questionnaire
            </Button>
            </Link>
         <BarChart/>
      </div>
    </div>
      </>
  );
};

export default Dashboard;
