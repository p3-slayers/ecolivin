import React from 'react';
import { useQuery } from '@apollo/client';
import ChallengeCard from '../../components/challengeCard';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { QUERY_ALL_CHALLENGES } from '../../utils/queries';

import { Spring, animated } from "react-spring";

function isJoined(challenge) {
  if (localStorage.getItem(challenge.challengeId) || false) {
    return (<ChallengeCard challenge={challenge} />);
  }
}

function showAll(challenge) {
  return (<ChallengeCard challenge={challenge} />);
}

const Challenges = ({ transition }) => {
  const { loading, error, data } = useQuery(QUERY_ALL_CHALLENGES);
  console.log(loading, error, data)
  const challenges = data?.getChallenges || [];
  console.log("challenge:", challenges);

  return (
    <Spring
      from={transition.from}
      to={transition.to}
      config={transition.config}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="container text-center ">
            {/* will inserts about the post */}

            <h1 className="large text-center mb-5">Challenges</h1>
            <div className="d-flex justify-content-center">
              <p className="text-center mb-5 " style={{ width: "50%" }}> We have provided challenges that you can join to help create accountability and empowerment as you adapt a more sustainable lifestyle.  </p>
            </div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/joinedchallenges"
            >
              <Button
                variant="success"
                className="mb-5"

              >
                View Joined Challenges!
              </Button>
            </Link>

            <div className="challenge  d-flex flex-row justify-content-center">
              {challenges.map((challenge) => (
                showAll(challenge)
              ))}
            </div>
          </div>
        </animated.div>)}
    </Spring>
  )
}

export default Challenges;


