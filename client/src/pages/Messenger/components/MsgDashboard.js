import React, { useEffect } from 'react';
import { useConversationsContext } from '../contexts/ConversationsProvider';
import OpenConversation from './OpenConversation';
import Sidebar from './Sidebar';

export default function Dashboard({ email }) {

  useEffect(() => {console.log(`MsgDashboard.js MOUNTED`)
  return console.log(`MsgDashboard.js UNMOUNTED`)
  }, [])

  const { selectedConversation } = useConversationsContext();
  return (
    <div className="d-flex" style={{ height: '80vh' }}>
      <Sidebar email={email} />
      {/* if selectedConversation, render the <OpenConversation> */}
      {selectedConversation && <OpenConversation />}
    </div>
  );
}

