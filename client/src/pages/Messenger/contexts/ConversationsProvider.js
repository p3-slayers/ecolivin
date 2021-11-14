import React, { useContext, useState, useEffect, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContactsContext } from './ContactsProvider';
import { useSocketContext } from './SocketProvider';

const ConversationsContext = React.createContext();

// custom reactHook
export function useConversationsContext() {
  // the export is basically a closure that provides access to the ContactsContext, returning the useContext method passed with the ContactsContext object.
  // useContext essentially reaches up the tree to the nearest context provider for the passed type of context and returns the value of that context. Very similar to state, but on a global level without requiring threading of props through multiple components.
  return useContext(ConversationsContext);
}

// actual functional component
export function ConversationsProvider({ id, children }) {
  // const userConversations = await useQuery(getUserConversations)
  const [conversations, setConversations] = useLocalStorage(
    `conversations`,
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContactsContext();
  const socket = useSocketContext();

  function createConversation(recipients) {
    // useMutation(NewConversation)
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  // including sender to ensure that this function is flexible enough to take in messages from our server, as well as take in our own messages.
  // wrapping in useCallBack hook with a dependency on setConversations so that this wont fire infinitely when a message is received-> only once when setConversations is called. And because this is only called within the callback, on rerender it wont be changed.
  const addMessageToConversation = useCallback(
    ({ recipients, text, sender }) => {
      console.log(`addMessageToConversation fired`);
      // useMutation(addMessageToConversation)

      // all we have is an array of recipients- so we need to figure out which conversation to add the message to, OR if we need to create a brand new conversation.
      setConversations((prevConversations) => {
        let madeChange = false;
        const newMessage = { sender, text };

        const newConversations = prevConversations.map((conversation) => {
          // if the recipient arrays are equal, set madeChange to true, and return the conversation but with a new updated messages array, with the newMessage appended to the end..
          if (arrayEquality(conversation.recipients, recipients)) {
            madeChange = true;
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }
          // if the recipient arrays are NOT equal, just return the conversation unchanged.
          return conversation;
        });

        if (madeChange) {
          // if we modified an existing conversation, just return the newConversations array.
          return newConversations;
        } else {
          // if we need to create a new conversation, return a new array with all the previous conversations but with the newly created conversation object pushed on the end.
          return [...prevConversations, { recipients, messages: [newMessage] }];
        }
      });
    },
    [setConversations]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.on(`receive-message`, addMessageToConversation);
    // useMutation(addMessageToConversation)


    // cleanup to remove the event listener... the return statement for useEffect is returned to close connections, prevent memory leaks, etc. and is executed subsequently after the callback passed to useEffect is executed.
    return () => socket.off('receive-message');
  }, [socket, addMessageToConversation]);

  function sendMessage(recipients, text) {
    socket.emit(`send-message`, { recipients, text });
    // useMutation(addMessageToConversation)

    addMessageToConversation({ recipients, text, sender: id });
  }

  const formattedConversations = conversations.map((conversation, index) => {
    // adds/ sets up the name property for each recipient
    const recipients = conversation.recipients.map((recipientId) => {
      // for each contact (recipient) in a conversation, do the following:
      const contact = contacts.find((contact) => {
        return contact.id === recipientId;
      });
      // if there is a contact, return the contact.name, otherwise if there is not a contact, return the recipientId
      const name = (contact && contact.name) || recipientId;
      return { id: recipientId, name };
    });

    // adds/ sets up the senderName, as well as the fromMe property in each message
    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender;
      });
      // if contact, set name equal to the contact name, or default to the sender ID if sender not in contacts.
      const name = (contact && contact.name) || message.sender;

      // if the sender ID matched the logged in users ID, set fromMe variable to true.
      const fromMe = id === message.sender;
      return { ...message, senderName: name, fromMe };
    });

    // return T/F depending on if the current iteration index# matches the selectedConversationIndex state
    const selected = index === selectedConversationIndex;

    // return for formattedConversations.map(): for each conversation, return all the previous conversation info, but also add formatted messages, formatted recipients, and if the conversation is currently selected.
    return { ...conversation, messages, recipients, selected };
  });

  const contextValuesToBroadcast = {
    conversations: formattedConversations,
    // selectedConversation;s value is actually the entire conversation object from the formattedConversations array, with the index of the selectedConversationIndex. Thus the bracket notation.
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={contextValuesToBroadcast}>
      {children}
    </ConversationsContext.Provider>
  );
}

// putting this function down here because it actually does not depend on anything in the component
function arrayEquality(a, b) {
  // if the arrays are not the same length we immediately know they are not equal
  if (a.length !== b.length) return false;

  // sort the arrays in the same way in case they are out of order
  a.sort();
  b.sort();

  // if every element in the a array is equal to every element in the b array at the same index, the arrays are exactly equal, so return true.
  return a.every((element, index) => {
    return element === b[index];
  });
}
