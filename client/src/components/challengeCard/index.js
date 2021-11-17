import React from "react";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card'
import Moment from 'react-moment';
Moment.globalFormat = 'D/MM/YYYY H:MM';

function challengeCard(input) {
  const challenge = input.challenge;

  return (


    <div className="card text-dark bg-light mb-4 mx-5">
        <div className="card-header"><h4>👤 {challenge.challenge} </h4>
        <p className="text-muted small m-0 p-0">Dates: <Moment unix>{challenge.dateStart/1000}</Moment> - <Moment unix>{challenge.dateEnd/1000}</Moment></p>

        </div>
        <div className="card-body bg-white">
        <p className="card-text">{challenge.user.firstName} {challenge.user.firstName}</p>
        </div>
    </div>
    
  );
}

export default challengeCard;
