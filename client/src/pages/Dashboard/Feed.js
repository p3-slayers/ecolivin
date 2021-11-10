import React, { useState } from 'react';

const Feed = ( {useState}) => {
  const [text, setText] = useState('');
  return (
    <div className="container">
      {/* will inserts information/summary about the User */}
      <h1>FEED PAGE</h1>
    </div>
  );
};

export default Feed;
