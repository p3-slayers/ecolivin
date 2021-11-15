import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { useContactsContext } from '../contexts/ContactsProvider';
import { useConversationsContext } from '../contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {
  const [selectedContactEmails, setSelectedContactEmails] = useState([]);
  const { contacts } = useContactsContext();
  const { createConversation } = useConversationsContext();

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactEmails);
    closeModal();
  }

  function handleCheckBoxChange(contactEmail) {
    setSelectedContactEmails((previousSelectedContactEmails) => {
      if (previousSelectedContactEmails.includes(contactEmail)) {
        return previousSelectedContactEmails.filter((prevEmail) => {
          // removes from the previous selected Email list the one that is equal to the email that was toggled off
          return contactEmail !== prevEmail;
        });
      } else {
        return [...previousSelectedContactEmails, contactEmail];
      }
    });
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.email} key={contact.email}>
              <Form.Check
                type="checkbox"
                value={selectedContactEmails.includes(contact.email)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.email)}
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
