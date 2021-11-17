import React from 'react';
import { useQuery } from '@apollo/client';
import challengeCard from '../../components/challengeCard';


import {QUERY_ALL_CHALLENGES } from '../../utils/queries';

const Challenges = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_CHALLENGES);
    console.log(loading, error, data)
    const challenge = data?.getChallenge || [];
    console.log("challenge:", challenge);
    return (
      <div className="container">
        {/* will inserts about the post */}
        <h1 className="large text-center mb-5">Challenges</h1>
          
        <div className="challenge">
          {challenge.map((challenge) => (
            <challengeCard challenge={challenge}/>
          ))}
        </div>
      </div>
)
}

export default Challenges;


