import React from 'react';
import {Container} from 'react-bootstrap'
import spinner from '../assets/spinner.gif'
import Card from '../components/CardPayment';
import DonationAmount from '../components/DonationAmount'
import Nav from '../components/Nav/index'

function Donate() {
  return (
    <>
    <Nav />
    <div style={{display:'flex'}}>
      <Container style={{flex:'0.5', }}>
        <img src={spinner} height="150px"></img>
        <h2>check </h2>
      </Container>
     <Container style={{flex:'0.5', border:'2px solid black', margin:'0 auto'}}>
      <DonationAmount />
      <Card/>
     </Container>
    </div>
    </>
  );
}

export default Donate;
