import React, { useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useGlobalUserContext } from '../../../utils/GlobalState';
import { useMutation } from '@apollo/client';
import { ADD_NEW_CONTACT } from '../../../utils/mutations';

const ContactsContext = React.createContext();

// custom reactHook
export function useContactsContext() {
  // the export is basically a closure that provides access to the ContactsContext, returning the useContext method passed with the ContactsContext object.
  // useContext essentially reaches up the tree to the nearest context provider for the passed type of context and returns the value of that context. Very similar to state, but on a global level without requiring threading of props through multiple components.
  return useContext(ContactsContext);
}

// actual functional component
export function ContactsProvider({ children }) {

  // access global user state to get contacts
  const [state] = useGlobalUserContext();

  // set up value and setter for contacts
  const [contacts, setContacts] = useState(state.contacts)

  // for adding contacts via GraphQL 
  const [addContactToDB] = useMutation(ADD_NEW_CONTACT);
  
  async function createContact(email, name) {
    console.log(`createContact fired`)
    try {
      let updatedContact = await addContactToDB({
        variables: {
          _id: state._id, 
          email: email, 
          name: name
        }
      } );
      console.log(updatedContact)
      setContacts((prevContacts) => {
        return [...prevContacts, { email, name }];
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
