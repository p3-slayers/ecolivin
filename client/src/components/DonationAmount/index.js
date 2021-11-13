import {Button} from 'react-bootstrap'
import React, {useState} from 'react';

//
function DonationAmount(){
    // eslint-disable-next-line no-unused-vars
    const [selectedDonation, setSelectedDonation]= useState("")
   
     const handleDonationAmt=(e)=> {
        setSelectedDonation(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <Button value='10' onClick={handleDonationAmt}>
                $10
            </Button>
            <Button value='20'  onClick={handleDonationAmt}>
                $20
            </Button>
            <Button value='50'  onClick={handleDonationAmt}>
                $50
            </Button>
            <Button value='100'  onClick={handleDonationAmt}>
                $100
            </Button>
            <input type='text' placeholder="$ Other Amount" onChange={handleDonationAmt}>
            </input>
        </div>
    )
}

 export default DonationAmount;