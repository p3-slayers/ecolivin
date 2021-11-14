import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Results() {
  const food = localStorage.getItem('food');
  const transportation = localStorage.getItem('transportation');
  const waste = localStorage.getItem('waste');
  const lifestyle = localStorage.getItem('lifestyle');
  const housing = localStorage.getItem('housing');
 

  function goToDashboard(){
    window.location.assign("/dashboard");
  }

  return (
    <>
      {/* add information about the project */}
      <h2>DISPLAY RESULTS</h2>
      <h4>Food: {food}</h4>
      <h4>Transportation: {transportation}</h4>
      <h4>Waste: {waste}</h4>
      <h4>Lifestyle: {lifestyle}</h4>
      <h4>Housing: {housing}</h4>

      {/* <Link to="/dashboard"><Button variant="primary">GO to DASHBOARD</Button>{' '}</Link> */}
      <Button variant="primary" onClick={goToDashboard}>GO to DASHBOARD</Button>
      </>
  );
}

export default Results;