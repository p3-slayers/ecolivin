import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/ecolivin.png";
import Card from "../components/CardPayment";
import Nav from "../components/Nav/index";
function Donate() {
  return (
    <>
      <Nav />
      <div style={{marginTop:'100px'}}>
      <div
        className="container mt-5"
        style={{ display: "flex", fontFamily: "Karla sans-serif" }}
      >
        <Container className="text-center" style={{ paddingRight: "30px" }}>
          <img
            style={{ margin: "0 auto", display: "block", borderRadius: "75px" }}
            src={logo}
            alt='EcoLivin Logo'
            height="150px"
          ></img>
          <p className="py-3">
          Hi friends, the team at EcoLivin has really enjoyed building this application to help users become more aware of the daily actions they can take to protect our earth. We hope you find this application useful, and commit to making some changes that positively impact you and your community. If you'd like to buy our next cup of coffee, we promise to make sure its fair-trade, responsibly-sourced, and eco-friendly. &#128154; 
          </p>
        </Container>
        <Container style={{ border: "2px solid #703043" }}>
          <Card />
        </Container>
      </div>
      </div>
    </>
  );
}

export default Donate;
