import React from 'react';
import Auth from '../utils/auth';
import { Route, Redirect } from 'react-router-dom';
import pageTransitions from '../utils/pageTransitions';



const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            Auth.loggedIn() ?
                <Component {...props} transition={pageTransitions} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;