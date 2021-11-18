
import {
  SET_USER_DATA,
  // eslint-disable-next-line no-unused-vars
  CREATE_NEW_CONTACT
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      const userData = action.payload;
      console.log(userData);
      return userData;
    }

    case CREATE_NEW_CONTACT: {
      console.log(action.payload)
      break;
    }

    default:
      return state;
  }
};

