import React from 'react';
import { useQuery } from '@apollo/client';
import ChallengeCard from '../../components/challengeCard';
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";

import {QUERY_ALL_CHALLENGES } from '../../utils/queries';

function isJoined(challenge){
  if (localStorage.getItem(challenge.challengeId) || false){
    return (<ChallengeCard challenge={challenge}/>);
  }
}

const JoinedChallenges = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_CHALLENGES);
    console.log(loading, error, data)
    const challenges = data?.getChallenges || [];
    console.log("challenge:", challenges);
    return (
      <div className="container text-center">
        {/* will inserts about the post */}
        <h1 className="large text-center mb-5">Joined Challenges</h1>
        <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/challenges"
              >
                <Button
                  variant="success"
                  className="mb-4"
                
                >
                  Go to all Challenges!
                </Button>
              </Link>
        <div className="challenge">
          {challenges.map((challenge) => (
            isJoined(challenge)
          ))}
        </div>
      </div>
    )
}

export default JoinedChallenges;


