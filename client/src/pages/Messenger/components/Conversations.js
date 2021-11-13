import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversationsContext } from '../contexts/ConversationsProvider';

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversationsContext();
  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => {
        return (
          <ListGroup.Item
            key={index}
            action
            onClick={() => selectConversationIndex(index)}
            active={conversation.selected}
          >
            {/* take the recipients of a particular conversation */}
            {conversation.recipients
              // map each recipient to their name from the formattedConversations and return the array of names
              .map((recipient) => recipient.name)
              // join each entry in the array with a comma and a space.
              .join(', ')}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
