// Step2.js
import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';

function Step3(props) {
  return (
    <div>
        <InputGroup>
            <p>I use a smart thermostat in my home. </p>
            <InputGroup.Radio value="1" name="c4q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q1" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>More than 75% of my home is powered by clean energy. </p>
            <InputGroup.Radio value="1" name="c4q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q2" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I use LED lightbulbs in my home. </p>
            <InputGroup.Radio value="1" name="c4q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q3" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I air-dry clothes instead of using a dryer. </p>
            <InputGroup.Radio value="1" name="c4q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q4" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I turn lights off when not in use at home. </p>
            <InputGroup.Radio value="1" name="c4q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q5" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I unplug all electronics not being used.</p>
            <InputGroup.Radio value="1" name="c4q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q6" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I take short showers instead of baths.</p>
            <InputGroup.Radio value="1" name="c4q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q7" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I have low flush toilets in my home. </p>
            <InputGroup.Radio value="1" name="c4q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c4q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c4q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c4q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c4q8" onChange={props.handleChange}/>
        </InputGroup>
    </div>
  );
}

export default Step3;