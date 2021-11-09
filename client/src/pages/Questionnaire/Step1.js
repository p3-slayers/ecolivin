// Step1.js
import React from "react";

function Step1(props) {
  return (
    <div>
        <p>q1 <input name="q11" value={props.getState('q11', '')} onChange={props.handleChange} /></p>
        <p>q1 <input name="q22" value={props.getState('q12', '')} onChange={props.handleChange}/></p>
    
    </div>
    
  );
}

export default Step1;