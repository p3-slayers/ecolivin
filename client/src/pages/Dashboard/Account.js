import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/index";
import DeleteUser from "../../components/deleteUserBtn/index.js";

import { useMutation } from '@apollo/client';
import { UPDATE_USER, UPDATE_PASSWORD, UPLOAD_PROFILE_PIC } from '../../utils/mutations';
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

  // picture upload stuff
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState('')
  const [uploadPicture] = useMutation(UPLOAD_PROFILE_PIC, {
    onCompleted: data => console.log(data)
  })

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

    window.location.reload();
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

  const handlePictureUploadChange = event => {
    console.log(`handlePictureUploadChange Fired!`)
    if ( !event.target.files[0] ) return;

      console.log(event.target.files[0])
      setFile(event.target.files[0])
      setFileName(event.target.files[0].name)

  }

  const handlePictureUploadSubmit = async (event) => {
    console.log(`handlePictureUpload Fired!`)
    event.preventDefault();
    console.log(file)
    if (!file) console.log(`No File present`);
    if (!file) return;

    try {
      const response = await uploadPicture({
        variables: {
          file: file,
          id: state._id
        }
      });

      const updatedUserData = response.data.uploadPicture.user
      // set the MongoDB profilePic field for the user to the AWS address
      // return the updated userObject to be dispatched to state
      console.log(`UPDATED USER DATA AS FOLLOWS:`)
      console.log(updatedUserData)

      dispatch({
        type: SET_USER_DATA,
        payload: updatedUserData,
      });

      console.log(response)
    } catch (error) {
      console.log(error)
    }


    // const formData = new FormData();
    // formData.append('userID', state._id)
    // formData.append('file', file)

    // console.log(file)
    // console.log(fileName)
    // console.log(formData.getAll(`file`))
    // console.log(formData.getAll(`userID`))


  }

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
        <form onSubmit={handleFormSubmit} className="p-2 border border-dark rounded">
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
        </form>
        <br></br>
        <form onSubmit={handlePasswordUpdate} className="p-2 border border-dark rounded">
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
          <br></br>
        <form onSubmit={handlePictureUploadSubmit} className="p-2 border border-dark rounded">
          <div className="form-group row">
            <label htmlFor="profilePicture" className="col-sm-2 col-form-label">Upload profile picture:</label>
            <div class="col-sm-4">
              <input
                className="form-control"
                placeholder="******"
                name="profilePicture"
                type="file"
                id="profilePicture"
                onChange={handlePictureUploadChange}
              />
            </div>
            {/* {error ? (
              <div className="mt-3">
                <p className="text-muted small">The password is incorrect</p>
              </div>
            ) : null} */}
          </div>
          <br></br>
          <div className="col-sm-10">
            <Button type="submit">Upload Photo</Button>
          </div>
          <br></br>
        </form>
        <div
            className="flex-row"
            style={{ marginTop: "30px", justifyContent: "center" }}
          >
            <Button>
              <DeleteUser />
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Account;
