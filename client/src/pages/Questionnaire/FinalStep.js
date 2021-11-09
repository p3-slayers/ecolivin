import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FinalStep(props) {
  return (
    <div>
      <h5>You are done. Please submit to calculate</h5>
      {/* <p>q: {props.state.name}</p>
      <p>q: {props.state.surname}</p>
      <p>q: {props.state.email}</p>
      <p>q: {props.state.phone}</p> */}

      <Link to="/results"><Button variant="primary">Submit</Button>{' '}</Link>

    </div>
  );
}

export default FinalStep;