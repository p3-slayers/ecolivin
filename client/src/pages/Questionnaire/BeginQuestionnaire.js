import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const BeginQuestionnaire = () => {
  return (
    <div className="container">
      {/* will inserts information/summary about the User */}
      <h1>BeginQuestionnaire PAGE</h1>
      <Link to="/questionnaire"><Button variant="primary">Start</Button>{' '}</Link>
    </div>
  );
};

export default BeginQuestionnaire;
