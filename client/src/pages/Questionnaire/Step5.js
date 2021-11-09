// Step2.js
import React from "react";

function Step3(props) {
  return (
    <div>
        <p>q5 <input name="q51" value={props.getState('q51', '')} onChange={props.handleChange} /></p>
        <p>q5 <input name="q52" value={props.getState('q52', '')} onChange={props.handleChange} /></p>

    </div>
  );
}

export default Step3;