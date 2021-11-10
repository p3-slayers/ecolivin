import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useGlobalUserContext } from "../../utils/GlobalState";
import { Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import spinner from "../../assets/spinner.gif";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Navigation() {
  const [globalState, dispatch] = useGlobalUserContext();

  const [state, setState] = useState(globalState);

  function homepageLink() {
    if (Auth.loggedIn()) {
      return <Link to="/dashboard">ECOLivin</Link>;
    } else {
      return <Link to="/">ECOLivin</Link>;
    }
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav>
          <NavLink as={Link} to="/dashboard">Dashboard</NavLink>
          <NavLink as={Link} to="/feed">Feed</NavLink>
          <NavLink as={Link} to="/challenges">Challenges</NavLink>
          <NavLink as={Link} to="/events">Events</NavLink>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <NavLink href="/" onClick={() => Auth.logout()}>
            Logout
          </NavLink>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <NavLink as={Link} to="/">Home</NavLink>
          <NavLink as={Link} to="/about">About</NavLink>
          <NavLink as={Link} to="/team"> Team </NavLink>
          <NavLink as={Link} to="/donate">Donate</NavLink>
          <NavLink as={Link} to="/login">Login</NavLink>
        </Nav>
      );
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <NavbarBrand>
        <img src={spinner} height="32px" />
        {homepageLink()}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>{showNavigation()}</NavbarCollapse>
    </Navbar>
  );
}

export default Navigation;
