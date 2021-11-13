import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_ACTION } from '../../utils/queries';


function getAddedActions(){

  let added = {}

  const actionIds = [
    "f1", "f2", "f3", "f4", "f5", "f6",
    "t1", "t2", "t3", "t4", "t5", "t6",
    "l1", "l2", "l3", "l4", "l5", "l6",
    "w1", "w2", "w3", "w4", "w5", "w6",
    "h1", "h2", "h3", "h4", "h5", "h6"
  ];
  actionIds.map(id => {
    if(localStorage.getItem(id)){
      const { loading, error, data } = useQuery(QUERY_SINGLE_ACTION, {
        variables: { id:id },
      });
      console.log("actondb", loading, error, data);
      added[id] = "empty now";
    }
  });

  return added;
}


const HabitTracker = () => {
  const addedActions = getAddedActions();
  console.log("myAddedActions", addedActions);

  return (
    <div className="d-flex mt-5">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="p-2 flex-grow-1">
        <h3>ht</h3>

        {
          Object.keys(addedActions).map(function(key, index) {
            <p>{key} {index}</p>
        })}      



      </div>
    </div>
  );
};

export default HabitTracker;
