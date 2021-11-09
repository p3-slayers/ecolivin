import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/index'

const Dashboard = () => {
  return (

    <div class="d-flex">
      {/* will inserts information/summary about the User */}
     <Sidebar/>
     <div class="p-2 flex-grow-1">
        <h3>content</h3>        

        </div>
    </div>
  );
};

export default Dashboard;
