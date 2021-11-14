import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContactsContext } from '../contexts/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContactsContext();

  return (
    <>
    <small className="m-1 pb-1 border-left text-muted">Your contacts are who you can create new conversations with. The list of contacts are shown below. Create a new contact with the users email address by clicking "New Contact" below, and entering a name to save their email under.</small>
    <hr />
    <ListGroup variant="flush">
      {contacts.map((contact) => {
        return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
      })}
    </ListGroup>
    </>
  );
}
