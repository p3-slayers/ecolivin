
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import HabitTracker from "../../pages/Dashboard/HabitTracker";
import {Row, Col, Form, Button} from 'react-bootstrap';

function HabitTrackerAction(input) {
  const text = input.text;
  const actionText = input.actionText;
  const actionId = input.actionId;

  
  const handleFormChange = (id) => (e) => {
    localStorage.setItem(id, e.target.checked);
  };
  
  function isChecked(id){
      if (localStorage.getItem(id) === "true"){
          return true;
      }
      return false;
  }

  function remove(){
      localStorage.removeItem(actionId);
      window.location.reload();
  }

  return (

    <Row className="mb-3">
        <Col md={4}>        
        
            {text} 
        
        <Button variant="light" size="sm" onClick={remove}>
            🗑️
        </Button>

        </Col>

        
        {
            ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => 
            
            <Col>
                <Form.Check type="checkbox" id={`${day}-${actionId}-checkbox`}>
                    <Form.Check.Input type="checkbox" defaultChecked={isChecked(`${day}-${actionId}-checkbox`)} onChange={handleFormChange(`${day}-${actionId}-checkbox`)}/>
                </Form.Check>
            </Col>
            
            )
        
        }
        
    </Row>     
    
  );
}

export default HabitTrackerAction;
