import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { useContactsContext } from '../contexts/ContactsProvider';
import { useConversationsContext } from '../contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContactsContext();
  const { createConversation } = useConversationsContext();

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  }

  function handleCheckBoxChange(contactId) {
    setSelectedContactIds((previousSelectedContactIds) => {
      if (previousSelectedContactIds.includes(contactId)) {
        return previousSelectedContactIds.filter((prevId) => {
          // removes from the previous selected ID list the one that is equal to the id that was toggled off
          return contactId !== prevId;
        });
      } else {
        return [...previousSelectedContactIds, contactId];
      }
    });
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
