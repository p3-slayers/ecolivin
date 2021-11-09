// Step2.js
import React from "react";

function Step3(props) {
  return (
    <div>
        <p>q4 <input name="q41" value={props.getState('q41', '')} onChange={props.handleChange} /></p>
        <p>q4 <input name="q42" value={props.getState('q42', '')} onChange={props.handleChange} /></p>

    </div>
  );
}

export default Step3;