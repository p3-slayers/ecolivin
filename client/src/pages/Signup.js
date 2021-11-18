import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import logo from '../assets/ecolivin.png'

import { useHistory } from 'react-router-dom';
import { useGlobalUserContext } from '../utils/GlobalState';
import { SET_USER_DATA } from '../utils/actions';
import { Row, Col, Button } from "react-bootstrap";


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  // for setting global state
  const [state, dispatch] = useGlobalUserContext();

  // for redirecting page
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    console.log(`handleFormSubmit fired`);
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    // isolate token from mutationResponse so it can be set to localStorage via Auth.login
    const token = mutationResponse.data.addUser.token;
    // set the JWT to localStorage
    Auth.login(token);

    // isolate userData from the mutationResponse so it can be set to the global state
    const userData = { ...mutationResponse.data.addUser.user };
    // dispatch the userData to the reducer and set the global state up with the user data
    dispatch({
      type: SET_USER_DATA,
      payload: userData,
    });

    console.log(state);
    console.log(token);

    // render the Questionnaire page
    history.push('/beginquestionnaire');
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
    <div className="signup">
    <Row>
      <Col className="offset-md-4 mt-5 pt-5" xs={12} md={4} lg={4}>
      <div className="d-flex flex-row my-1 justify-content-center shadow-lg p-5 bg-light">
      <form onSubmit={handleFormSubmit} className="mb-3 w-75 text-center">
      <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="logo spinner" height="65px" />
          </Link>
      {/* <h2 className="text-center mynpm-4">Signup</h2> */}
        <div className="flex-row space-between mb-2 mt-4 align-items-center ">
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row space-between my-2 align-items-center">
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row space-between my-2 align-items-center">
          <label htmlFor="email">Email</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row space-between my-2 align-items-center">
          <label htmlFor="pwd">Password</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            required
            minlength="5"
          />
        </div>
        <div className="flex-row flex-end justify-content-center my-4">
          <Button type="submit">SIGN UP</Button>
        </div>
      </form>
      <Link className="text-success text-decoration-none" to="/login">Already have an account? Login NOW!</Link>
    </div>
    </Col>
    </Row>
    </div>
  );
}

export default Signup;
