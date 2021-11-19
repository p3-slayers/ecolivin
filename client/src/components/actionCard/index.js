import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

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

    localStorage.setItem(
      actionId,
      JSON.stringify({
        actionTitle: text,
        actionId: actionId,
        actionText: actionText,
      })
    );
    setDisable(true);
  };

  function submitButton() {
    if (isAdded) {
      return (
        <Button  variant='div' className='btn-primary font-weight-bold'  type="submit" disabled={true}>
          Added 
        </Button>
      );
    } else {
      return (
        <Button  variant='div' className='btn-success font-weight-bold'  type="submit" disabled={disable}>
          Add ➕
        </Button>
      );
    }
  }

  return (
    <Card style={{ width: "15rem" }} className="border-0">
      <Card.Body>
        <Card.Title className="text-center">
          <h4>{text}</h4>
        </Card.Title>
        <Card.Text className="d-flex flex-row card-text justify-content-center text-wrap">
          <p className="small text-center text-wrap">{actionText}</p>
          <form className="text-center" onSubmit={handleFormSubmit}>
            <div className="flex-row flex-end">{submitButton()}</div>
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ActionCard;
