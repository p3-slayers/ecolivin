import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const BeginQuestionnaire = () => {
  return (
    <div className="container text-center mt-5 pt-5">
      {/* will inserts information/summary about the User */}
      <h1>Begin Questionnaire</h1>
      <p className="my-4">Lorem ipsum dolor sit amet. Sed culpa quia ex neque aliquam et labore placeat non mollitia maiores est omnis recusandae ex commodi obcaecati quisquam aperiam. Ut modi alias vel ipsam quidem aut.</p>
      <Link to="/questionnaire"><Button variant="primary" className="mt-4" size="lg">Start</Button>{' '}</Link>
    </div>
  );
};

export default BeginQuestionnaire;
