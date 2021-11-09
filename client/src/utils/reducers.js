import { useReducer } from 'react';
import {
  SET_USER_DATA,
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      const userData = action.payload;
      return userData;
    }
    // case UPDATE_PRODUCTS:
    //   return {
    //     ...state,
    //     products: [...action.products],
    //   };

    // case UPDATE_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: [...action.categories],
    //   };

    // case UPDATE_CURRENT_CATEGORY:
    //   return {
    //     ...state,
    //     currentCategory: action.currentCategory
    //   }

    default:
      return state;
  }
};

// export function useUserReducer(initialState) {
//   return useReducer(reducer, initialState);
// }
