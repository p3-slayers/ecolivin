// Step2.js
import React from "react";

function Step3(props) {
  return (
    <div>
        <p>q3 <input name="q31" value={props.getState('q31', '')} onChange={props.handleChange} /></p>
        <p>q3 <input name="q32" value={props.getState('q32', '')} onChange={props.handleChange} /></p>

    </div>
  );
}

export default Step3;