import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import { useQuery } from '@apollo/client';
import {Row, Col} from 'react-bootstrap';
import HabitTrackerAction from '../../components/HabitTrackerAction/index'
import { QUERY_SINGLE_ACTION } from '../../utils/queries';
import { Button } from "react-bootstrap";


function getAddedActions(){

  let added = {}

  const actionIds = [
    "f1", "f2", "f3", "f4", "f5", "f6",
    "t1", "t2", "t3", "t4", "t5", "t6",
    "l1", "l2", "l3", "l4", "l5", "l6",
    "w1", "w2", "w3", "w4", "w5", "w6",
    "h1", "h2", "h3", "h4", "h5", "h6"
  ];
  actionIds.map(id => {
    if(localStorage.getItem(id)){
      const { loading, error, data } = useQuery(QUERY_SINGLE_ACTION, {
        variables: { id:id },
      });
      console.log("actondb", loading, error, data);
      added[id] = JSON.parse(localStorage.getItem(id));
    }
  });

  return added;
}

const HabitTracker = () => {
  const addedActions = getAddedActions();
  console.log("myAddedActions", addedActions);
  function reset(){
    Object.entries(addedActions).map( ([key, value]) => 
  
      ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => 
        localStorage.setItem(`${day}-${value["actionId"]}-checkbox`, false)
      )
    );
    window.location.reload();
  }

  return (
    <div className="d-flex mt-5">
      <Sidebar />
      <div className="px-5 flex-grow-1">
        <h2 className="mb-5">Habit Tracker</h2>

        <Row className="mb-3 bg-light p-3">
            <Col md={4}>  
            <Button style={{ width: "60%"}} onClick={reset}>
                Reset Week
            </Button>
            </Col>
            <Col><p>Mon</p></Col>
            <Col><p>Tue</p></Col>
            <Col><p>Wed</p></Col>
            <Col><p>Thu</p></Col>
            <Col><p>Fri</p></Col>
            <Col><p>Sat</p></Col>
            <Col><p>Sun</p></Col>
        </Row>
        <hr/>
        {

          Object.entries(addedActions).map( ([key, value]) => 
            <HabitTrackerAction text={value["actionTitle"]} actionText={value["actionText"]} actionId={value["actionId"]}/>
           ) 
        }

      </div>
    </div>
  );
};

export default HabitTracker;
