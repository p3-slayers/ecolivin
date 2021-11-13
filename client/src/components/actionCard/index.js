
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'

function ActionCard(input) {
  const text = input.title;
  // const link = input.link;
  const actionText = input.actionText;
  const actionId = input.actionId;

  const isAdded = localStorage.getItem(actionId) || false;
  const [disable, setDisable] = useState(false);

  const handleFormSubmit = async (event) => {
    console.log(`handleFormSubmit fired`);
    event.preventDefault();

    localStorage.setItem(actionId, true);
    setDisable(true);

  };

  function submitButton(){
    if(isAdded){
      return (<button type="submit" disabled={true}>Added</button>);
    }else {
      return (<button type="submit" disabled={disable}>Add</button>);
    }
  };
  
  return (

    <Card style={{ width: '13rem' }}>
    <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>
        {actionText}
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row flex-end">
            {submitButton()}
          </div>
        </form>
        </Card.Text>
    </Card.Body>
    </Card>        
    
  );
}

export default ActionCard;
