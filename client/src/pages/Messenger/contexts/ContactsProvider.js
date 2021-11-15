import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();

// custom reactHook
export function useContactsContext() {
  // the export is basically a closure that provides access to the ContactsContext, returning the useContext method passed with the ContactsContext object.
  // useContext essentially reaches up the tree to the nearest context provider for the passed type of context and returns the value of that context. Very similar to state, but on a global level without requiring threading of props through multiple components.
  return useContext(ContactsContext);
}

// actual functional component
export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage(`contacts`, []);

  function createContact(email, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { email, name }];
    });
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
