import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/profile">
              Profile
            </Link>
          </li> 
          <li className="mx-1">
            <Link to="/feed">
              Feed
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/challenges">
              Challenges
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/events">
              Events
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/home">
              Home
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/team">
              Team
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/donate">
              Donate
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          LOGO/Name
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
