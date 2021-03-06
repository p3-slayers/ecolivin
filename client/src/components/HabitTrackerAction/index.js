
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import HabitTracker from "../../pages/Dashboard/HabitTracker";
import {Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function HabitTrackerAction(input) {
    const text = input.text;
  const actionText = input.actionText;
  const actionId = input.actionId;
  const element = <FontAwesomeIcon icon={faTrash} />
  
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
        <Col md={4} className="px-4">        
        
           {text} 
            
        <Button className="mx-2 text-decoration-none btn-light p-2" variant="link" size="sm" onClick={remove}>
             {element}
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
