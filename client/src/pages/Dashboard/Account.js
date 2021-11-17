import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/index";
import DeleteUser from "../../components/deleteUserBtn/index.js";

import { useMutation } from '@apollo/client';
import { UPDATE_USER, UPDATE_PASSWORD } from '../../utils/mutations';
import { useHistory } from 'react-router-dom';
import { useGlobalUserContext } from '../../utils/GlobalState';
import { SET_USER_DATA } from '../../utils/actions';
import { Button } from "react-bootstrap";

const Account = () => {
  // for setting global state
  const [state, dispatch] = useGlobalUserContext();

  const [formState, setFormState] = useState({
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    password: '',
    oldPassword: '' });
  const [updateUser] = useMutation(UPDATE_USER);
  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  // for redirecting page
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    console.log(`handleFormSubmit fired`);
    event.preventDefault();
    const mutationResponse = await updateUser({
      variables: {
        _id: state._id,
        email: formState.email,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });

    // isolate userData from the mutationResponse so it can be set to the global state
    const userData = { ...mutationResponse.data.updateUser.user };
    // dispatch the userData to the reducer and set the global state up with the user data
    dispatch({
      type: SET_USER_DATA,
      payload: userData,
    });

    console.log(state);

    history.push('/dashboard');
  };

  const handlePasswordUpdate = async (event) => {
    console.log(`handlePasswordUpdate fired`);
    event.preventDefault();
    try {
    await updatePassword({
      variables: {
        _id: state._id,
        password: formState.password,
        oldPassword: formState.oldPassword,
      },
    });

    history.push('/dashboard');
  } catch (e) {
    console.log(e);
  }
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
      <Sidebar />
      {/* <Container style={{display:'flex', flexDirection:'column', width:'auto'}}> */}
      <div className="px-5 flex-grow-1">
        <h2>Edit Profile</h2>
        <br></br>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name:</label>
            <div class="col-sm-4">
              <input
                className="form-control"
                placeholder={state.firstName}
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name:</label>
            <div class="col-sm-4">
              <input
                className="form-control"
                placeholder={state.lastName}
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
            <div class="col-sm-4">
              <input
                className="form-control"
                placeholder={state.email}
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <br></br>
          <div className="col-sm-10">
            <Button type="submit">Update Account</Button>
          </div>
          <div
            className="flex-row"
            style={{ marginTop: "30px", justifyContent: "center" }}
          >
            <Button>
              <DeleteUser />
            </Button>
          </div>
        </form>
        <br></br>
        <form onSubmit={handlePasswordUpdate}>
          <div className="form-group row">
            <label htmlFor="oldPassword" className="col-sm-2 col-form-label">Old Password:</label>
            <div class="col-sm-4">
              <input
                className="form-control"
                placeholder="******"
                name="oldPassword"
                type="password"
                id="oldPassword"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div className="mt-3">
                <p className="text-muted small">The password is incorrect</p>
              </div>
            ) : null}
          </div>
          <br></br>
          <div className="form-group row">
            <label htmlFor="pwd" className="col-sm-2 col-form-label"> New Password:</label>
            <div class="col-sm-4">
              <input
                className="form-control"
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                minlength="5"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <br></br>
          <div className="col-sm-10">
            <Button type="submit">Update Password</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
