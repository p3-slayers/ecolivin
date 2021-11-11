// Step2.js
import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';

function Step3(props) {
  return (
    <div>
        <InputGroup>
            <p>I buy new items once a month. </p>
            <InputGroup.Radio value="1" name="c5q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q1" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I mostly second-hand shop. </p>
            <InputGroup.Radio value="1" name="c5q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q2" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I use reusable water bottles and coffee cups daily. </p>
            <InputGroup.Radio value="1" name="c5q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q3" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I bring reusable bags to grocery stores. </p>
            <InputGroup.Radio value="1" name="c5q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q4" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I purchase hygiene products packaged in biodegradable or compostable material.</p>
            <InputGroup.Radio value="1" name="c5q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q5" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I make homemade gifts for people.  </p>
            <InputGroup.Radio value="1" name="c5q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q6" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I donate used goods. </p>
            <InputGroup.Radio value="1" name="c5q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q7" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I attend talks or events on sustainability.</p>
            <InputGroup.Radio value="1" name="c5q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c5q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c5q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c5q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c5q8" onChange={props.handleChange}/>
        </InputGroup>
    </div>
  );
}

export default Step3;