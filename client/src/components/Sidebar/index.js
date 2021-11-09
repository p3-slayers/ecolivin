import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


function Sidebar() {

  return (
    
    <div>
      <div class="p-2">
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
    </div>

  );
}

export default Sidebar;
