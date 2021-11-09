import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <>
      {/* add information about the project */}
      <h2>DISPLAY RESULTS</h2>
      <Link to="/dashboard"><Button variant="primary">GO to DASHBOARD</Button>{' '}</Link>
    </>
  );
}

export default Results;