import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import auth from '../../utils/auth';
import Sidebar from '../../components/Sidebar/index';
import { useGlobalUserContext } from '../../utils/GlobalState';
import BarChart from '../../components/ChartJs';
import { Button, Row, Col } from "react-bootstrap";
import { useQuery } from '@apollo/client';

import { QUERY_ALL_RESULTS } from '../../utils/queries';

function computeAverages(others){
  console.log(others);
  let allPercentages = {
   "food": [],
   "housing": [],
   "transportation": [],
   "waste": [],
   "lifestyle": []
  }

  const cats = ["food", "housing", "transportation", "waste", "lifestyle"];
  cats.map(function(category) {
    others.map(function(other){
      allPercentages[category].push(other[category])
    });
  });

  cats.map(function(category) {
    const total = allPercentages[category].reduce((a, b) => a + b, 0)
    allPercentages[category] = (total) / allPercentages[category].length;
  });

  return allPercentages;
}

const Dashboard = () => {
  // console.log(auth.loggedIn())
  // console.log(auth.getProfile().data.firstName)
  const [state, dispatch] = useGlobalUserContext();
  console.log("mystate", state);
  // useEffect(console.log(state), []);

  const qResults = useQuery(QUERY_ALL_RESULTS);
  const otherResults = qResults.data?.getResults || [];
  const otherPercentages = computeAverages(otherResults);


  const food = localStorage.getItem('food');
  const transportation = localStorage.getItem('transportation');
  const waste = localStorage.getItem('waste');
  const lifestyle = localStorage.getItem('lifestyle');
  const housing = localStorage.getItem('housing');

  
  //on the container that wraps around these pages add margin 30px auto
  return (

    <>
    <div className="d-flex mt-5">

      {/* will inserts information/summary about the User */}
      <Sidebar />


      <div className="px-5 flex-grow-1" style={{marginLeft:'30px'}}>

      <h1 className="display-5">Hello, {state.firstName}!</h1>

      <Row className="mt-5 mb-5 align-items-center">
        <Col>
          <p>Lorem ipsum dolor sit amet. Ut quaerat eaque cum vero ullam et commodi temporibus aut necessitatibus voluptatem id officiis saepe. Qui voluptatibus minima cum ratione expedita est amet esse ut totam quasi et esse expedita sed incidunt.</p>
          </Col>
          <Col className="text-center">

              <Link
                    style={{ textDecoration: "none", color: "white" }}
                    
                    to="/dailyactions"
                  > 
              <Button variant="success"className="mb-4" style={{ width: "50%"}}>
                  Add actions now!
                </Button>
                </Link>

          <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/beginquestionnaire"
              > 
          <Button variant="success" style={{ width: "50%"}}>
              Retake Questionnaire
            </Button>
            </Link>


        </Col>
      </Row>

      <Row className="mt-4 align-items-center">
        <Col style={{height: "500px;"}}>
            <BarChart lifestyle={lifestyle} housing={housing} waste={waste} food={food} transportation={transportation} otherPercentages={otherPercentages}/>

          </Col>
          <Col className="px-5">
          <p>Lorem ipsum dolor sit amet. Ut quaerat eaque cum vero ullam et commodi temporibus aut necessitatibus voluptatem id officiis saepe. Qui voluptatibus minima cum ratione expedita est amet esse ut totam quasi et esse expedita sed incidunt vo.</p>

        </Col>
      </Row>


        {/* <h3>Profile page/ dashboard content</h3>    
        <h1>Hello, {state.email}</h1> */}
        
      </div>
    </div>
      </>
  );
};

export default Dashboard;
