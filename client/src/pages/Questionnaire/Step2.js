// Step2.js
import React from "react";
import Question from "../../components/Question";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Step2(props) {
  return (
    <div>


<Row className="mb-3">
            <Col md={4}>        <h2>Transportation</h2>    </Col>
            <Col md={{ span: 1, offset: 4 }}>
               Strongly disagree
            </Col>
            <Col md={{ span: 1, offset:2 }}>
               Strongly Agree
            
            </Col>
        </Row>
        <hr/>
        <Question text={"I take public transit regularly to get to work/school."} id="c2q1" onChange={props.handleChange} />
        <Question text={"I own a hybrid or electric car."} id="c2q2" onChange={props.handleChange} />
        <Question text={"When possible, I walk to nearby locations instead of driving."} id="c2q3" onChange={props.handleChange} />
        <Question text={"I ride my bike to get to a given destination as much as possible."} id="c2q4" onChange={props.handleChange} />
        <Question text={"When travelling, I take a train or bus instead of airplane if possible."} id="c2q5" onChange={props.handleChange} />
        <Question text={"When on vacation, I travel to destinations close to home."} id="c2q6" onChange={props.handleChange} />
        <Question text={"I live a mostly car-free lifestyle"} id="c2q7" onChange={props.handleChange} />
        <Question text={"I carpool often to get to my destinations"} id="c2q8" onChange={props.handleChange} />
        
        
       
    </div>
  );
}

export default Step2;