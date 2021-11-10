import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useGlobalUserContext } from '../../utils/GlobalState';

function Nav() {
  const [globalState, dispatch] = useGlobalUserContext();

  const [state, setState] = useState(globalState);

  function homepageLink() {
    if (Auth.loggedIn()) {
      return <Link to="/dashboard">LOGO/Name</Link>;
    } else {
      return <Link to="/">LOGO/Name</Link>;
    }
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-1">
            <Link to="/feed">Feed</Link>
          </li>
          <li className="mx-1">
            <Link to="/challenges">Challenges</Link>
          </li>
          <li className="mx-1">
            <Link to="/events">Events</Link>
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
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-1">
            <Link to="/team">Team</Link>
          </li>
          <li className="mx-1">
            <Link to="/donate">Donate</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (

   
    <header className="flex-row px-1">
      <h1>{homepageLink()}</h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
