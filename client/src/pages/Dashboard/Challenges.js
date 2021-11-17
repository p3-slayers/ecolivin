import React from 'react';
import { useQuery } from '@apollo/client';
import ChallengeCard from '../../components/ChallengeCard';



import {QUERY_ALL_CHALLENGES } from '../../utils/queries';

const Challenges = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_CHALLENGES);
    console.log(loading, error, data)
    const challenges = data?.getChallenges || [];
    console.log("challenge:", challenges);
    return (
      <div className="container">
        {/* will inserts about the post */}
        <h1 className="large text-center mb-5">Challenges</h1>
          
        <div className="challenge">
          {challenges.map((challenge) => (
            <ChallengeCard challenge={challenge}/>
          ))}
        </div>
      </div>
)
}

export default Challenges;


