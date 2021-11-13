import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'

function ActionCard(input) {
  const text = input.title;
  const link = input.link;
  const actionText = input.actionText;

  return (

    <Card style={{ width: '13rem' }}>
    <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>
        {actionText}
        </Card.Text>
    </Card.Body>
    </Card>        
    
  );
}

export default ActionCard;
