import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/index';

import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { UPDATE_USER } from '../../utils/mutations';
import { useHistory } from 'react-router-dom';
import { useGlobalUserContext } from '../../utils/GlobalState';
import { SET_USER_DATA } from '../../utils/actions';
import { Button } from "react-bootstrap";

const Account = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [updateUser] = useMutation(UPDATE_USER);

  // for setting global state
  const [state, dispatch] = useGlobalUserContext();

  // for redirecting page
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    console.log(`handleFormSubmit fired`);
    event.preventDefault();
    const mutationResponse = await updateUser({
      variables: {
        id: state._id,
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    // isolate token from mutationResponse so it can be set to localStorage via Auth.login
    const token = mutationResponse.data.updateUser.token;
    // set the JWT to localStorage
    Auth.login(token);

    // isolate userData from the mutationResponse so it can be set to the global state
    const userData = { ...mutationResponse.data.updateUser.user };
    // dispatch the userData to the reducer and set the global state up with the user data
    dispatch({
      type: SET_USER_DATA,
      payload: userData,
    });

    console.log(state);
    console.log(token);

    history.push('/dashboard');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  return (
    <div className="d-flex mt-5">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="px-5 flex-grow-1">
        <h2 className>Edit Profile</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder={state.firstName}
              name="firstName"
              type="firstName"
              id="firstName"
            onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder={state.lastName}
              name="lastName"
              type="lastName"
              id="lastName"
            onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:</label>
            <input
              placeholder={state.email}
              name="email"
              type="email"
              id="email"
            onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
            onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <Button type="submit">Update Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
