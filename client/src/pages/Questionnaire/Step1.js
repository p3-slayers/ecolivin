// Step1.js
import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';

function Step1(props) {
  return (
    <div>
        
        <InputGroup>
            <p>I eat an entirely plant-based diet. </p>
            <InputGroup.Radio value="1" name="c1q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q1" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q1" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I eat meat or seafood 1-2 days per week.</p>
            <InputGroup.Radio value="1" name="c1q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q2" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q2" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I eat locally sourced food as much as possible.  </p>
            <InputGroup.Radio value="1" name="c1q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q3" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q3" onChange={props.handleChange}/>
        </InputGroup>

        <InputGroup>
            <p>I grow more than 50% of my own food.  </p>
            <InputGroup.Radio value="1" name="c1q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q4" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q4" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I rarely eat dairy products. </p>
            <InputGroup.Radio value="1" name="c1q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q5" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q5" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I try to minimize my food waste. </p>
            <InputGroup.Radio value="1" name="c1q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q6" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q6" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>More than 50% of my food comes from regenerative resources. </p>
            <InputGroup.Radio value="1" name="c1q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q7" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q7" onChange={props.handleChange}/>
        </InputGroup>
        <InputGroup>
            <p>I eat seasonally as much as possible. </p>
            <InputGroup.Radio value="1" name="c1q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="2" name="c1q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="3" name="c1q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="4" name="c1q8" onChange={props.handleChange}/>
            <InputGroup.Radio value="5" name="c1q8" onChange={props.handleChange}/>
        </InputGroup>
       



    </div>
    
  );
}

export default Step1; 