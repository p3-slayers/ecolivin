import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, ButtonGroup } from "react-bootstrap";

const donationData = [
  {
    amount: 10,
    id: 1,
  },
  {
    amount: 20,
    id: 2,
  },
  {
    amount: 50,
    id: 3,
  },
  {
    amount: 100,
    id: 4,
  }
];


function Card() {
  const [selectedDonation, setSelectedDonation] = useState("");

  const handleDonationAmt = (e) => {
    setSelectedDonation(e.target.value);
    console.log(e.target.value);
  };

  const stripe = useStripe();
  const elements = useElements();
  // console.log(stripe, elements)

  const handleSubmit = async (donationAmt) => {
    console.log("submit payment method hit");
    console.log("donation amount", donationAmt);
    //checks to see if stripe or elements were loaded from the two hooks
    if (!elements || !stripe) {
      return;
    }

    const response = await fetch(
      "http://localhost:3000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: 1,
              price: donationAmt,
              quantity: 1,
            },
          ],
        }),
      }
    )
      .then((res) => {
        if (res.ok) return res.json();
        // If there is an error then make sure we catch that
        return res.json().then((e) => Promise.reject(e));
      })
      //destructuring the response, only need the url
      .then(({ url }) => {
        // On success redirect the customer to the returned URL aka the stripe checkout site
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <>
      <div id="paymentForm">
        <div>
          <h2>Choose:</h2>
          {donationData.map((item) => (
            <ButtonGroup>
              <Button
                key={item.id}
                value={item.amount}
                onClick={() => handleSubmit(item.amount)}
              >
                ${item.amount}
              </Button>
            </ButtonGroup>
          ))}
          <input
            type="text"
            placeholder="$ Other Amount"
            onChange={handleDonationAmt}
          ></input>
        </div>

        <button
          disabled={!elements || !stripe || !selectedDonation.length > 0}
          onClick={() => handleSubmit(selectedDonation)}
        >
          Donate
        </button>
      </div>
    </>
  );
}

export default Card;
