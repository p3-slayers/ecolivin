import React from 'react'
import { useGlobalUserContext } from '../../utils/GlobalState';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

import {DELETE_USER} from '../../utils/mutations'

function DeleteUser(){
    const [state, dispatch] = useGlobalUserContext();
    const [deleteUser]= useMutation(DELETE_USER)

    const handleDeleteUser = async () => {
        console.log(`deleted a user btn clicked`);
        const mutationResponse = await deleteUser({
          variables: {
            _id: state._id,
          },
        });
        Auth.logout()
    }
    return(
        <Link style={{ textDecoration: "none", color: "white"}}
        onClick={()=>handleDeleteUser()}>Deactivate Account</Link>
    )
}


export default DeleteUser;