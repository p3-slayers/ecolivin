import React from 'react';
import { useConversationsContext } from '../contexts/ConversationsProvider';
import OpenConversation from './OpenConversation';
import Sidebar from './Sidebar';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversationsContext();
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={id} />
      {/* if selectedConversation, render the <OpenConversation> */}
      {selectedConversation && <OpenConversation />}
    </div>
  );
}

