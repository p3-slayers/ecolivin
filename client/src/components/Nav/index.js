import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useGlobalUserContext } from "../../utils/GlobalState";
import { Nav, Navbar, NavbarBrand, NavLink, Spinner } from "react-bootstrap";
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
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/feed">Feed</NavLink>
          <NavLink href="/challenges">Challenges</NavLink>
          <NavLink href="/events">Events</NavLink>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <NavLink href="/" onClick={() => Auth.logout()}>
            Logout
          </NavLink>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/team"> Team </NavLink>
          <NavLink href="/donate">Donate</NavLink>
          <NavLink href="/login">Login</NavLink>
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
