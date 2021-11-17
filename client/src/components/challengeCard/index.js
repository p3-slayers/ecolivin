import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card'
import Moment from 'react-moment';
Moment.globalFormat = 'D/MM/YYYY H:MM';



function ChallengeCard(input) {
  input = input.challenge;
  console.log("mddskldjs", input);
  const title = input.title;
  // const link = input.link;
  const challengeText = input.challenge;
  const challengeId = input.challengeId;
  const dateStart = input.dateStart;
  const dateEnd = input.dateEnd;

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
      return (<Button type="submit" disabled={true}>Joined!</Button>);
    }else {
      return (<Button type="submit" disabled={disable}>Join</Button>);
    }
  };

  return (


    <div className="card text-dark bg-light mb-4 mx-5">
        <div className="card-header"><h4> {title} - {challengeText} </h4>
        <p className="text-muted small m-0 p-0">Dates: <Moment unix>{dateStart/1000}</Moment> - <Moment unix>{dateEnd/1000}</Moment></p>

        </div>
        <div className="card-body bg-white">
        <p className="card-text"></p>
        </div>
        <form className="text-center" onSubmit={handleFormSubmit}>
          <div className="flex-row flex-end">
            {submitButton()}
          </div>
        </form>
    </div>
    
  );
}

export default ChallengeCard;