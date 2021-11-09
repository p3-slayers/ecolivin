import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


function Sidebar() {

  return (
    
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
          
    <span className="fs-4">Sidebar</span>
    <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
        <Link to="/account">Account</Link>            
      </li>
      <li className="nav-item">
        <Link to="/dailyactions">Daily Actions</Link>
      </li>
      <li className="nav-item">
        <Link to="/habittracker">Habit Tracker</Link>
      </li>
      <li className="nav-item">
        <Link to="/resources">Resources</Link>
      </li>

    </ul>
  </div>
  );
}

export default Sidebar;
