import React from 'react';
import Sidebar from '../../components/Sidebar/index';

const HabitTracker = () => {
  return (
    <div className="d-flex">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="p-2 flex-grow-1">
        <h3>ht</h3>
      </div>
    </div>
  );
};

export default HabitTracker;