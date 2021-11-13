import React, { useImperativeHandle } from "react";
import PaymentForm from "../PaymentForm";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import FormField from "../FormField";
import { Container, Row } from "react-bootstrap";


function Card() {
  // const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  // const handleCardDetailsChange = (e) => {
  //   e.error ? setCheckoutError(e.error.message) : setCheckoutError();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit payment method hit");
    //checks to see if stripe or elements were loaded from the two hooks
    if (!elements || !stripe) {
      return;
    }
    // const billingDetails = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   address: {
    //     city: e.target.city.value,
    //     line1: e.target.address.value,
    //     state: e.target.state.value,
    //     postal_code: e.target.zip.value,
    //   },
    // };
    // create payment intent on server
    const response = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            id: 1,
            quantity: 2,
          },
          {
            id: 2,
            quantity: 1,
          },
        ],
      }),
    }) .then(res => {
      if (res.ok) return res.json()
      // If there is an error then make sure we catch that
      return res.json().then(e => Promise.reject(e))
    })
    //destructuring the response, only need the url
    .then(({ url }) => {
      // On success redirect the customer to the returned URL aka the stripe checkout site
      console.log(url)
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })

    // console.log(response.url)

    //destructuring the err and paymentMethod
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   //the hook gives us a refrence to the card element on our page
    //   card: elements.getElement(CardElement),
    //   // billing_details: billingDetails,
    // });



    // console.log("payment method:", paymentMethod);
    // if (error) {
    //   setCheckoutError(error.message);
    //   //   alert(error.message)
    //   console.log(error.message);
    //   return;
    // }
    //TODO: CONFIRM THE CARD PAYMENT but i need the client secret which comes from a fetch request
    // const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: paymentMethod.id,
    // });
    // console.log('payment intent:',paymentIntent);
  };

  return (
    <>
      <form id="paymentForm" onSubmit={handleSubmit} >
        {/* <label htmlFor="card-element"></label> */}
        {/* <Row>
          <PaymentForm>
            <FormField />
          </PaymentForm>
        </Row> */}
        <div className="py-3">
          {/* <CardElement
            onChange={handleCardDetailsChange}
            id="card-element"
            options={cardElementOptions}
          /> */}
          {/* {checkoutError && <p style={{ color: "red" }}>{checkoutError}</p>} */}
        </div>
        {/* disabled={!elements || !stripe} */}
        <button type="submit">
          Donate
        </button>
      </form>
    </>
  );
}

export default Card;
