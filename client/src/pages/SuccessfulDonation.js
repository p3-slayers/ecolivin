import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import logo from "../assets/ecolivin.png";
import Confetti from "react-confetti";

function Success() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const colors=['#703043', '#308875', '#FFFFFF', 'rgb(223, 212, 209)']
  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });
  function returnLink() {
    if (Auth.loggedIn()) {
      return (
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <img src={logo} alt="EcoLivin logo" height="100px" />
        </Link>
      );
    } else {
      return (
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black", fontSize: "32px" }}
        >
          <img src={logo} alt="EcoLivin logo" height="100px" />
        </Link>
      );
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: "rgb(223, 212, 209, 0.5)",
      }}
    >
      <Confetti width={width} height={height} numberOfPieces={250} colors={colors} />
      <h1 style={{ marginTop:'-300px', }}>Thank You For Your Donation</h1>
      {returnLink()}
    </div>
  );
}

export default Success;
