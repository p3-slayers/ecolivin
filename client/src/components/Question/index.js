import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useGlobalUserContext } from "../../utils/GlobalState";
import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
//replace the spinner w our logo 
import spinner from "../../assets/spinner.gif";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import InputGroup from 'react-bootstrap/InputGroup';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Question(input) {
  const text = input.text;
  const id = input.id;
  const onChange = input.onChange;

  return (



    <Row className="mb-2">
    <Col md={6}>{text}</Col>
    <Col md={{ span: 4, offset: 2 }}>



        <ToggleButtonGroup type="radio" name={id}>
        <ToggleButton value={1} id={"1-"+id} onChange={onChange} className="mx-2">1</ToggleButton>
        <ToggleButton value={2} id={"2-"+id} onChange={onChange} className="mx-2">2</ToggleButton>
        <ToggleButton value={3} id={"3-"+id} onChange={onChange} className="mx-2">3</ToggleButton>
        <ToggleButton value={4} id={"4-"+id} onChange={onChange} className="mx-2">4</ToggleButton>
        <ToggleButton value={5} id={"5-"+id} onChange={onChange} className="mx-2">5</ToggleButton>
        </ToggleButtonGroup>

    </Col>
  </Row>


    
//   <Row>
//     <Col md={4}>{text}</Col>
//     <Col md={{ span: 4, offset: 4 }}>
//         <InputGroup>
//             <InputGroup.Radio value="1" name={id} onChange={onChange}/>
//             <InputGroup.Radio value="2" name={id} onChange={onChange}/>
//             <InputGroup.Radio value="3" name={id} onChange={onChange}/>
//             <InputGroup.Radio value="4" name={id} onChange={onChange}/>
//             <InputGroup.Radio value="5" name={id} onChange={onChange}/>
//         </InputGroup>
      
//     </Col>
//   </Row>

    
  );
}

export default Question;
