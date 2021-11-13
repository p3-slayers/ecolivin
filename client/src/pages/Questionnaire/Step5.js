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
            <Col md={4}>        <h2>Lifestyle</h2>    </Col>
            <Col md={{ span: 2, offset: 4 }}>
               Strongly disagree
            </Col>
            <Col md={{ span: 1, offset:1 }}>
               Strongly Agree
            
            </Col>
        </Row>
        <hr/>
        <Question text={"I buy new items once a month. "} id="c5q1" onChange={props.handleChange} />
        <Question text={"I mostly second-hand shop."} id="c5q2" onChange={props.handleChange} />
        <Question text={"I use reusable water bottles and coffee cups daily."} id="c5q3" onChange={props.handleChange} />
        <Question text={"I bring reusable bags to grocery stores."} id="c5q4" onChange={props.handleChange} />
        <Question text={"I purchase hygiene products packaged in biodegradable or compostable material. "} id="c5q5" onChange={props.handleChange} />
        <Question text={"I make homemade gifts for people. "} id="c5q6" onChange={props.handleChange} />
        <Question text={"I donate used goods. "} id="c5q7" onChange={props.handleChange} />
        <Question text={"I attend talks or events on sustainability."} id="c5q8" onChange={props.handleChange} />
       
    </div>
  );
}

export default Step3;