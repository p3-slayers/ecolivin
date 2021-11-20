// Step1.js
import React from "react";
import Question from "../../components/Question";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Step1(props) {
  return (
    <div>

        <Row className="mb-3">
            <Col md={4}>        <h2>Food </h2>    </Col>
            <Col md={{ span: 1, offset: 4 }}>
               Strongly disagree
            </Col>
            <Col md={{ span: 1, offset:2 }}>
               Strongly Agree
            
            </Col>
        </Row>
        <hr/>


        <Question text={"I eat an entirely plant-based diet."} id="c1q1" onChange={props.handleChange} />
        <Question text={"I eat meat or seafood 1-2 days per week."} id="c1q2" onChange={props.handleChange} />
        <Question text={"I eat locally sourced food as much as possible."} id="c1q3" onChange={props.handleChange} />
        <Question text={"I grow more than 50% of my own food. "} id="c1q4" onChange={props.handleChange} />
        <Question text={"I rarely eat dairy products. "} id="c1q5" onChange={props.handleChange} />
        <Question text={"I try to minimize my food waste."} id="c1q6" onChange={props.handleChange} />
        <Question text={"More than 50% of my food comes from regenerative resources."} id="c1q7" onChange={props.handleChange} />
        <Question text={"I eat seasonally as much as possible."} id="c1q8" onChange={props.handleChange} />


    </div>
    
  );
}

export default Step1; 