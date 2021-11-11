import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FinalStep(props) {

  function calculateEachCategoryPercent(states){
    let foodScore = 0;
    let transportationScore = 0;
    let wasteScore = 0;
    let housingScore = 0;
    let lifestyleScore = 0;

    const foodQ = ['c1q1', 'c1q2', 'c1q3', 'c1q4', 'c1q5', 'c1q6', 'c1q7', 'c1q8'];
    foodQ.forEach((element) => { 
      foodScore += parseInt(states[element]);
    });

    const transportationQ = ['c2q1', 'c2q2', 'c2q3', 'c2q4', 'c2q5', 'c2q6', 'c2q7', 'c2q8'];
    transportationQ.forEach((element) => { 
      transportationScore += parseInt(states[element]);
    });

    const wasteQ = ['c3q1', 'c3q2', 'c3q3', 'c3q4', 'c3q5', 'c3q6', 'c3q7', 'c3q8'];
    wasteQ.forEach((element) => { 
      wasteScore += parseInt(states[element]);
    });

    const housingQ = ['c4q1', 'c4q2', 'c4q3', 'c4q4', 'c4q5', 'c4q6', 'c4q7', 'c4q8'];
    housingQ.forEach((element) => { 
      housingScore += parseInt(states[element]);
    });

    const lifestyleQ = ['c4q1', 'c5q2', 'c5q3', 'c5q4', 'c5q5', 'c5q6', 'c5q7', 'c5q8'];
    lifestyleQ.forEach((element) => { 
      lifestyleScore += parseInt(states[element]);
    });

     return {
      "foodScore": foodScore,
      "transportationScore": transportationScore,
      "wasteScore": wasteScore,
      "housingScore": housingScore,
      "lifestyleScore": lifestyleScore,

      "foodPrecentage": Math.round((foodScore / (40) * 100), 2),
      "transportationPercentage": Math.round((transportationScore / (40) * 100), 2),
      "wastePercentage": Math.round((wasteScore / (40) * 100), 2),
      "housingPercentage": Math.round((housingScore / (40) * 100), 2),
      "lifestylePercentage": Math.round((lifestyleScore / (40) * 100), 2),


      "total": foodScore + transportationScore + wasteScore + housingScore + lifestyleScore,
     };
  }
  let result = calculateEachCategoryPercent(props.state);
  
  return (
    <div>
      {console.log(result)};
      <h5>You are done. Please submit to calculate</h5>
      <p>percent: {String(result.foodPrecentage)}</p>
      <p>q: {props.state.c1q1}</p>
      <p>q: {props.state.c1q2}</p>
      <p>q: {props.state.c1q3}</p>
      <p>q: {props.state.c1q4}</p>
      <p>q: {props.state.c1q5}</p>
      <p>q: {props.state.c1q6}</p>
      <p>q: {props.state.c1q7}</p>
      <p>q: {props.state.c1q8}</p>

      {/* need to get those answers saved in the database */}


      <Link to="/results"><Button variant="primary">Submit</Button>{' '}</Link>

    </div>
  );
}

export default FinalStep;