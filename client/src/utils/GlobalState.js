import React, { createContext, useContext, useReducer } from 'react';

// all this does is remove the need for us to pass a reducer function to the call in UserProvider
import { reducer } from './reducers';

const GlobalUserContext = createContext();

const useGlobalUserContext = () => useContext(GlobalUserContext);

const GlobalUserState = {};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, GlobalUserState);

  return (
    <GlobalUserContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalUserContext.Provider>
  );
};

export { UserContextProvider, useGlobalUserContext };
