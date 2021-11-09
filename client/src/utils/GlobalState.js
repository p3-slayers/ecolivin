import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'


// const StoreContext = createContext();
// const { Provider } = StoreContext;

const UserContext = createContext();
const { Provider } = UserContext;


// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     categories: [],
//     currentCategory: '',
//   });

const UserProvider = () => {
    const [state, dispatch] = useProductReducer({
     user:{}
    });
  
  return <Provider value={[state, dispatch]}/>;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

const useUserContext = () => {
  return useContext(UserContext);
};


export { UserProvider, useUserContext };
