import React from 'react';
import { useQuery } from '@apollo/client';
import ChallengeCard from '../../components/challengeCard';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {QUERY_ALL_CHALLENGES } from '../../utils/queries';

function isJoined(challenge){
  if (localStorage.getItem(challenge.challengeId) || false){
    return (<ChallengeCard challenge={challenge}/>);
  }
}

function showAll(challenge){
  return (<ChallengeCard challenge={challenge}/>);
}

const Challenges = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_CHALLENGES);
    console.log(loading, error, data)
    const challenges = data?.getChallenges || [];
    console.log("challenge:", challenges);
    return (
      <div className="container text-center">
        {/* will inserts about the post */}
        <h1 className="large text-center mb-5">Challenges</h1>
        <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/joinedchallenges"
              >
                <Button
                  variant="success"
                  className="mb-4"
                  
                >
                  View Joined Challenges!
                </Button>
              </Link>
        <div className="challenge">
          {challenges.map((challenge) => (
            showAll(challenge)
          ))}
        </div>
      </div>
    )
}

export default Challenges;


