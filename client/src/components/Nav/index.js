import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
//replace the spinner w our logo
import logo from '../../assets/ecolivin.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  function homepageLink() {
    if (Auth.loggedIn()) {
      //ADD LINEHEIGHT when logo is picked
      return (
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="EcoLivin logo" height="65px" />
        </Link>
      );
    } else {
      return (
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'black', fontSize: '32px' }}
        >
          {' '}
          <img src={logo} alt="logo spinner" height="65px" />
        </Link>
      );
    }
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav className='align-items-center' onClick={() => setExpanded(false)}>
          <NavLink className="text-dark" as={Link} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/feed">
            Feed
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/challenges">
            Challenges
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/messenger">
            Messenger
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/donate">
            Donate
          </NavLink>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <NavLink className="text-dark" href="/" onClick={() => Auth.logout()}>
            Logout
          </NavLink>
        </Nav>
      );
    } else {
      return (
        <Nav className="align-items-center"  onClick={() => setExpanded(false)}>
          <NavLink className="text-dark" as={Link} to="/">
            {' '}
            Home
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/about">
            About
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/team">
            {' '}
            Team{' '}
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/donate">
            Donate
          </NavLink>
          <NavLink className="text-dark" as={Link} to="/login">
            Login
          </NavLink>
        </Nav>
      );
    }
  }

  return (
    <Navbar style={{backgroundColor:"#DFD4D1"}} expand="lg" expanded={expanded}>
      <NavbarBrand className="mx-3">
        
        {homepageLink()}
      </NavbarBrand>
      <NavbarToggle
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <NavbarCollapse
        className="justify-content-center"
        //with this commented in, it throws off the centering of nav items when toggled
        // style={{ paddingRight: '145px' }}
      >
        {showNavigation()}
      </NavbarCollapse>
    </Navbar>
  );
}

export default Navigation;
