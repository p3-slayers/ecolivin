import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import logo from '../assets/ecolivin.png'
import { useHistory } from 'react-router-dom';
import { useGlobalUserContext } from '../utils/GlobalState';
import { SET_USER_DATA } from '../utils/actions';
import { Row, Col, Button } from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN);

  // for setting global state
  const [state, dispatch] = useGlobalUserContext();

  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      // isolate token from mutationResponse so it can be set to localStorage via Auth.login
      const token = mutationResponse.data.login.token;
      // set the JWT to localStorage
      Auth.login(token);

      // isolate userData from the mutationResponse so it can be set to the global state
      const userData = { ...mutationResponse.data.login.user };

      console.log(mutationResponse);
      console.log(userData);
      // dispatch the updated userData to the reducer and set the global state up with the user data
      dispatch({
        type: SET_USER_DATA,
        payload: userData,
      });

      // persist userData to localstorage to maintain state across sessions
      console.log(userData);
      // localStorage.setItem('userData', userData);

      // console.log(state);

      // render the dashboard page
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
  };

  return (

      <div className="login">
        <Row>
          <Col className="offset-md-4 mt-5 pt-5" xs={6} md={4} lg={4}>
          <div className="d-flex flex-row my-1 justify-content-center shadow-lg p-5 bg-light">
          <form onSubmit={handleFormSubmit} className="mb-3 w-75 text-center">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="logo spinner" height="65px" />
          </Link>
            <div className="flex-row space-between mb-2 mt-4 align-items-center ">
                <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              
            </div>
            <div className="flex-row space-between my-2 align-items-center">
                <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div className="mt-3">
                <p className="text-muted small">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div className="flex-row flex-end justify-content-center my-4">
              <Button type="submit">LOGIN</Button>
            </div>
          </form>
          <Link className="text-success text-decoration-none" to="/signup">Don't have an account? Signup NOW!</Link>
        </div>
        </Col>
        </Row>
        </div>



    // <div className="container my-1">
    //   <Link to="/signup">← Go to Signup</Link>

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     {error ? (
    //       <div>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </div>
    //     ) : null}
    //     <div className="flex-row flex-end">
    //       {/* <Link to="/dashboard"> */}
    //       <button type="submit">Submit</button>
    //       {/* </Link> */}
    //     </div>
    //   </form>
    // </div>
  );
}

export default Login;
