import React, { useState, useEffect } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ email }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationOpen = activeKey === CONVERSATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {console.log(`MsgDashboard.js MOUNTED`)
  return console.log(`MsgDashboard.js UNMOUNTED`)
  }, [])

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      {/* on select, the eventKey of the selected Nav.Link automatically gets passed to the function inside of onSelect. The below could also be written as: 
       onSelect={(k) => setActiveKey(k)} */}
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}> Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-end overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-end small">
          Your Email: <span className="text-muted">{email}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
