// Step2.js
import React from "react";

function Step2(props) {
  return (
    <div>
        <p>q2 <input name="q21" value={props.getState('q21', '')} onChange={props.handleChange} /></p>
        <p>q2 <input name="q22" value={props.getState('q22', '')} onChange={props.handleChange} /></p>

    </div>
  );
}

export default Step2;