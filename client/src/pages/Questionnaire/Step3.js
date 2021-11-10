// Step2.js
import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';

function Step3(props) {
  return (
    <div>
         <InputGroup>
            <p>I recycle often. </p>
            <InputGroup.Radio value="1" name="c3q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q1" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I compost most food and paper waste. </p>
            <InputGroup.Radio value="1" name="c3q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q2" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I repurpose other people’s waste. </p>
            <InputGroup.Radio value="1" name="c3q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q3" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I switched to e-billing and removed mail subscriptions. </p>
            <InputGroup.Radio value="1" name="c3q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q4" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I use a fan instead of an air conditioner. </p>
            <InputGroup.Radio value="1" name="c3q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q5" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I buy products with less packaging. </p>
            <InputGroup.Radio value="1" name="c3q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q6" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I avoid disposable or single-use products.</p>
            <InputGroup.Radio value="1" name="c3q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q7" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I mean plan to avoid extra waste. </p>
            <InputGroup.Radio value="1" name="c3q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c3q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c3q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c3q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c3q8" onChange={props.handleChange}/>
        </InputGroup>
    </div>
  );
}

export default Step3;