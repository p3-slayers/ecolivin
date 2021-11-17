import React, { useState, useCallback, useEffect } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useConversationsContext } from '../contexts/ConversationsProvider';

export default function OpenConversation() {
  const [text, setText] = useState('');
  // use callback will cache results from previous iteration and just return the cached value if the same parameters are passed. This does not create a new value, and thus does not trigger a re-render.
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const { sendMessage, selectedConversation } = useConversationsContext();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((recipient) => recipient.email),
      text
    );

    setText('');
  }

  useEffect(() => {console.log(`OpenConversation.js MOUNTED`)
  return console.log(`OpenConversation.js UNMOUNTED`)
  }, [])

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                // messages have no unique ID so we set the key to the index
                key={index}
                className={`my-1 d-flex flex-column ${
                  message.fromMe
                    ? 'align-self-end align-items-end'
                    : 'align-items-start'
                }`}
              >
                <div
                  className={`rounded px-2 py-1 ${
                    message.fromMe ? 'bg-primary text-white' : 'border'
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? 'text-right' : ''
                  }`}
                >
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
            />
            <Button type="submit">Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
