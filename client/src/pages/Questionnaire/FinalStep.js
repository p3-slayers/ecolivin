import React from "react";
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { ADD_RESULT } from "../../utils/mutations";
import { useHistory } from 'react-router-dom';


function FinalStep(props) {

  const [addResult] = useMutation(ADD_RESULT);
  const history = useHistory();

  function calculateEachCategoryPercent(states){
    let foodScore = 0;
    let transportationScore = 0;
    let wasteScore = 0;
    let housingScore = 0;
    let lifestyleScore = 0;

    const foodQ = ['c1q1', 'c1q2', 'c1q3', 'c1q4', 'c1q5', 'c1q6', 'c1q7', 'c1q8'];
    foodQ.forEach((element) => { 
      foodScore += parseInt(states[element] || 0);
    });

    const transportationQ = ['c2q1', 'c2q2', 'c2q3', 'c2q4', 'c2q5', 'c2q6', 'c2q7', 'c2q8'];
    transportationQ.forEach((element) => { 
      transportationScore += parseInt(states[element] || 0);
    });

    const wasteQ = ['c3q1', 'c3q2', 'c3q3', 'c3q4', 'c3q5', 'c3q6', 'c3q7', 'c3q8'];
    wasteQ.forEach((element) => { 
      wasteScore += parseInt(states[element] || 0);
    });

    const housingQ = ['c4q1', 'c4q2', 'c4q3', 'c4q4', 'c4q5', 'c4q6', 'c4q7', 'c4q8'];
    housingQ.forEach((element) => { 
      housingScore += parseInt(states[element] || 0);
    });

    const lifestyleQ = ['c4q1', 'c5q2', 'c5q3', 'c5q4', 'c5q5', 'c5q6', 'c5q7', 'c5q8'];
    lifestyleQ.forEach((element) => { 
      lifestyleScore += parseInt(states[element] || 0);
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
  
  const handleFormSubmit = async (event) => {
    console.log(`handleFormSubmit fired`);
    event.preventDefault();

    // save to db
    const mutationResponse = await addResult({
      variables: {
        food: result.foodPrecentage,
        housing: result.housingPercentage,
        transportation: result.transportationPercentage,
        waste: result.wastePercentage,
        lifestyle: result.lifestylePercentage
      },
    });

    console.log(mutationResponse);

    // save to local storage
    localStorage.setItem('food', result.foodPrecentage);
    localStorage.setItem('housing', result.housingPercentage);
    localStorage.setItem('transportation', result.transportationPercentage);
    localStorage.setItem('waste', result.wastePercentage);
    localStorage.setItem('lifestyle', result.lifestylePercentage);
    

    history.push('/results');
  };
  

  return (
    <div className="text-center justify-content-center mt-5 pt-5">
      <h1 className="my-5">You are done! Please submit to calculate.</h1>
      <form onSubmit={handleFormSubmit} className="mx-auto">
        <div className="mb-3">
          <Button type="submit" size="lg">Submit</Button>
        </div>
      </form>
      {/* need to get those answers saved in the database */}


  

    </div>
  );
}

export default FinalStep;