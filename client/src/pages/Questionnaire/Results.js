import React from 'react';
import { Button, Col, Row } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

function Results() {
  const food = localStorage.getItem('food');
  const transportation = localStorage.getItem('transportation');
  const waste = localStorage.getItem('waste');
  const lifestyle = localStorage.getItem('lifestyle');
  const housing = localStorage.getItem('housing');
 

  function goToDashboard(){
    window.location.assign("/dashboard");
  }

  return (
    <div className="text-center">
      {/* add information about the project */}
      <h1 className="text-center my-5 display-4">YOUR RESULTS</h1>
      
      <div className="container">
      <Row>
        <Col>
          <div className="rounded-circle bg-primary pt-5 text-center text-white" style={{width:"150px", height:"150px"}}> 
            <h5 className="p-0">Food</h5>
            <h4 className="m-0">{food}</h4>
          </div>    
        </Col>

        <Col>
          <div className="rounded-circle bg-success pt-5 text-center" style={{width:"150px", height:"150px"}}> 
            <h5 className="p-0">Transportation</h5>
            <h4 className="m-0">{transportation}</h4>
          </div>        
        </Col>

        <Col>
          <div className="rounded-circle bg-success pt-5 text-center" style={{width:"150px", height:"150px"}}> 
            <h5 className="p-0">Waste</h5>
            <h4 className="m-0">{waste}</h4>
          </div>
        </Col>

      </Row>

       
      <Row className="my-5">
        <Col>
          <div className="rounded-circle bg-success pt-5 text-center" style={{width:"150px", height:"150px"}}> 
            <h5 className="p-0">Lifestyle</h5>
            <h4 className="m-0">{lifestyle}</h4>
          </div>
        </Col>
        
        <Col>
          <div className="rounded-circle bg-success pt-5 text-center" style={{width:"150px", height:"150px"}}> 
            <h5 className="p-0">Housing</h5>
            <h4 className="m-0">{housing}</h4>
          </div>        
        </Col>
      </Row>

      </div>

      <Link to="/dashboard"><Button variant="primary" className="text-center" onClick={goToDashboard} size="lg">GO to DASHBOARD</Button></Link>
      
      </div>
  );
}

export default Results;