import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import { Row, Col } from "react-bootstrap";

const Resources = () => {
  return (
    <div className="d-flex flex-row mt-5">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="p-5">
        
      </div>
<div>
<Row>
        <h2>Resources</h2>
        </Row> 
      <Row className="mt-4">
        <Col>
        <div className="rounded-circle bg-primary small food mb-3 pt-4 text-center" style={{width:"100px", height:"100px"}}> 
            <h5 className="p-0">Food</h5>
          </div> 
        </Col>
        <Col> TExt </Col>
      </Row>
      <Row>
        <Col>
        <div className="rounded-circle bg-success transportation mb-3 pt-4 text-center" style={{width:"100px", height:"100px"}}> 
            <h5 className="p-0 small">Transportation</h5>
          </div> 
        </Col>
        <Col> Text</Col>
      </Row>
      <Row>
        <Col>
        <div className="rounded-circle bg-success waste pt-4 mb-3 text-center" style={{width:"100px", height:"100px"}}> 
            <h5 className="p-0">Waste</h5>
          </div>
        </Col>
        <Col> Text</Col>
      </Row>
      <Row>
        <Col> <div className="rounded-circle bg-success pt-4 mb-3 lifestyle text-center" style={{width:"100px", height:"100px"}}> 
            <h5 className="p-0">Lifestyle</h5>
          </div>
        </Col>
        <Col> TExt </Col>
      </Row>
      <Row>
        <Col>
        <div className="rounded-circle bg-success housing pt-4 text-center" style={{width:"100px", height:"100px"}}> 
            <h5 className="p-0">Housing</h5>
          </div> 
        </Col>
        <Col> Text</Col>
      </Row>
    </div>
    </div>
  );
};

export default Resources;
