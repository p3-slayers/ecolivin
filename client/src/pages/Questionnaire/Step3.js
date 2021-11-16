// Step2.js
import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Question from "../../components/Question";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Step3(props) {
  return (
    <div>

<Row className="mb-3">
            <Col md={4}>        <h2>Waste</h2>    </Col>
            <Col md={{ span: 1, offset: 4 }}>
               Strongly disagree
            </Col>
            <Col md={{ span: 1, offset:2 }}>
               Strongly Agree
            
            </Col>
        </Row>
        <hr/>


        <Question text={"I recycle often. "} id="c3q1" onChange={props.handleChange} />
        <Question text={"I compost most food and paper waste."} id="c3q2" onChange={props.handleChange} />
        <Question text={"I repurpose other people’s waste. "} id="c3q3" onChange={props.handleChange} />
        <Question text={"I switched to e-billing and removed mail subscriptions."} id="c3q4" onChange={props.handleChange} />
        <Question text={"I use a fan instead of an air conditioner. "} id="c3q5" onChange={props.handleChange} />
        <Question text={"I buy products with less packaging. "} id="c3q6" onChange={props.handleChange} />
        <Question text={"I avoid disposable or single-use products."} id="c3q7" onChange={props.handleChange} />
        <Question text={"I meal plan to avoid extra waste. "} id="c3q8" onChange={props.handleChange} />


        
    </div>
  );
}

export default Step3;