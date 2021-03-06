import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card'
import Moment from 'react-moment';
// Moment.globalFormat = 'D/MM/YYYY H:MM';
Moment.globalFormat = 'LL';



function ChallengeCard(props) {
  props = props.challenge;
  console.log("mddskldjs", props);
  const title = props.title;
  // const link = props.link;
  const challengeText = props.challenge;
  const challengeId = props.challengeId;
  const dateStart = props.dateStart;
  const dateEnd = props.dateEnd;

  const joined = localStorage.getItem(challengeId) || false;
  const [disable, setDisable] = useState(false);

  const handleFormSubmit = async (event) => {
    console.log(`handleFormSubmit for challenges fired`);
    event.preventDefault();

    localStorage.setItem(challengeId, JSON.stringify({
      challengeTitle: title,
      challengeId: challengeId,
      challenge: challengeText,
      dateStart: dateStart,
      dateEnd: dateEnd

    }));
    setDisable(true);

  };

  function submitButton(){
    if(joined){
      return (<Button className="m-2" type="submit" disabled={true}>Joined!</Button>);
    }else {
      return (<Button className="m-2 fw-bold" type="submit" disabled={disable}>Join</Button>);
    }
  };

  return (
    <div className="card text-dark bg-light mb-5 mx-5" style={{width:"40%"}}>
      <div className="card-header">
        <h2 className="py-2"> {title} </h2>
        <p className="text-muted small m-0 p-0">Beginning <Moment unix>{dateStart/1000}</Moment> - Ending <Moment unix>{dateEnd/1000}</Moment></p>
      </div>
      <div className="card-body bg-white">
        <p className="card-text">{challengeText}</p>
        </div>
        <form className="text-center bg-white pb-3" onSubmit={handleFormSubmit}>
          <div className="d-grid gap-2 col-3 mx-auto">
            {submitButton()}
          </div>
        </form>
    </div>
    
  );
}

export default ChallengeCard;
