import React from 'react';
import Sidebar from '../../components/Sidebar/index';

const Resources = () => {
  return (
    <div className="d-flex mt-5">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="px-5 flex-grow-1">
        <h2>Resources</h2>
      </div>
    </div>
  );
};

export default Resources;
