import { Button, ButtonGroup } from "react-bootstrap";
import React, { useState } from "react";

const donationData = [
    {
       amount:10,
        'id':1
    },
    {
        amount:20,
        'id':2
    },
    {
        amount:50,
        'id':3
    },
    {
        amount:100,
        'id':4
    },
    {
        amount:'Other',
        'id':5
    },
    ];

    var newArr= donationData.filter(item=> item.id !==5)
    console.log(newArr)


function DonationAmount() {
  const [selectedDonation, setSelectedDonation] = useState("");

  const handleDonationAmt = (e) => {
    setSelectedDonation(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Choose:</h2>
      {newArr.map((item) => (
      <ButtonGroup>
            <Button
              key={item.id}
              value={item.amount}
              onClick={
              handleDonationAmt
              }
            >
              ${item.amount}
            </Button>
      </ButtonGroup>
      ))}
        <input type='text' placeholder="$ Other Amount" onChange={handleDonationAmt}>
       </input>
    </div>
  );
}

export default DonationAmount;
