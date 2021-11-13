import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
//replace the spinner w our logo
import spinner from '../../assets/spinner.gif';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  function homepageLink() {
    if (Auth.loggedIn()) {
      //ADD LINEHEIGHT when logo is picked
      return (
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <span style={{ color: 'green' }}>ECO</span>Livin
        </Link>
      );
    } else {
      return (
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'black', fontSize: '32px' }}
        >
          {' '}
          <span style={{ color: 'green', textDecoration: 'none' }}>ECO</span>
          Livin
        </Link>
      );
    }
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav onClick={() => setExpanded(false)}>
          <NavLink as={Link} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink as={Link} to="/feed">
            Feed
          </NavLink>
          <NavLink as={Link} to="/challenges">
            Challenges
          </NavLink>
          <NavLink as={Link} to="/events">
            Events
          </NavLink>
          <NavLink as={Link} to="/messenger">
            Messenger
          </NavLink>
          <NavLink as={Link} to="/donate">
            Donate
          </NavLink>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <NavLink href="/" onClick={() => Auth.logout()}>
            Logout
          </NavLink>
        </Nav>
      );
    } else {
      return (
        <Nav onClick={() => setExpanded(false)}>
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
      <NavbarBrand>
        <img src={spinner} alt="logo spinner" height="32px" />
        {homepageLink()}
      </NavbarBrand>
      <NavbarToggle
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <NavbarCollapse
        className="justify-content-center"
        style={{ paddingRight: '145px' }}
      >
        {showNavigation()}
      </NavbarCollapse>
    </Navbar>
  );
}

export default Navigation;
