import React from "react";
import { Container } from "react-bootstrap";
import spinner from "../assets/spinner.gif";
import Card from "../components/CardPayment";
import Nav from "../components/Nav/index";
function Donate() {
  return (
    <>
      <Nav />
      <div
        className="container mt-5"
        style={{ display: "flex", fontFamily: "Karla sans-serif" }}
      >
        <Container className="text-center" style={{ paddingRight: "30px" }}>
          <h2>Charity Spotlight </h2>
          <img
            style={{ margin: "0 auto", display: "block", borderRadius: "75px" }}
            src={spinner}
            height="150px"
          ></img>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </Container>
        <Container style={{ border: "2px solid #703043" }}>
          <Card />
        </Container>
      </div>
    </>
  );
}

export default Donate;
