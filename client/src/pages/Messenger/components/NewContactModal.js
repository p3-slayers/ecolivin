import React, { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContactsContext } from '../contexts/ContactsProvider';

export default function NewContactModal({ closeModal }) {
  const emailRef = useRef();
  const nameRef = useRef();
  // returns a context object (similar to state) and we destructure the createContact method out of that object.
  const { createContact } = useContactsContext();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(emailRef.current.value, nameRef.current.value);
    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" ref={emailRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Save as (name)</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
