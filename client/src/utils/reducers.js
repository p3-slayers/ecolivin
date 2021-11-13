
import {
  SET_USER_DATA,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      const userData = action.payload;
      console.log(userData);
      return userData;
    }
    // case UPDATE_PRODUCTS:
    //   return {
    //     ...state,
    //     products: [...action.products],
    //   };

    default:
      return state;
  }
};

// export function useUserReducer(initialState) {
//   return useReducer(reducer, initialState);
// }
