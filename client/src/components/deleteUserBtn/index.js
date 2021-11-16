import React, { useState } from "react";
import { useGlobalUserContext } from "../../utils/GlobalState";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { Modal, Button } from "react-bootstrap";

import { DELETE_USER } from "../../utils/mutations";

function DeleteUser() {
  const [state, dispatch] = useGlobalUserContext();
  const [showModal, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const [deleteUser] = useMutation(DELETE_USER);

  const handleDeleteUser = async () => {
    console.log(`deleted a user btn clicked`);
    const mutationResponse = await deleteUser({
      variables: {
        _id: state._id,
      },
    });
    Auth.logout();
  };
  return (
    <>
      <div
        style={{ textDecoration: "none", color: "white" }}
        onClick={setModalShow}
      >
        Deactivate Account
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete My Account</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: "22px" }}>
          {state.firstName}, are you sure you want to delete your account?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser()}>
            Delete My Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteUser;