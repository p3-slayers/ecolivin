// Step2.js
import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';

function Step2(props) {
  return (
    <div>
         <InputGroup>
            <p>I take public transit regularly to get to work/school. </p>
            <InputGroup.Radio value="1" name="c2q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q1" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I own a hybrid or electric car. </p>
            <InputGroup.Radio value="1" name="c2q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q2" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I ride my bike to get to a given destination as much as possible. </p>
            <InputGroup.Radio value="1" name="c2q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q3" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>When travelling, I take a train or bus instead of airplane if possible. </p>
            <InputGroup.Radio value="1" name="c2q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q4" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>When possible, I walk to nearby locations instead of driving. </p>
            <InputGroup.Radio value="1" name="c2q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q5" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>Q: </p>
            <InputGroup.Radio value="1" name="c2q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q6" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>Q: </p>
            <InputGroup.Radio value="1" name="c2q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q7" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>Q: </p>
            <InputGroup.Radio value="1" name="c2q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c2q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c2q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c2q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c2q8" onChange={props.handleChange}/>
        </InputGroup>
       
    </div>
  );
}

export default Step2;