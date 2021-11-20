/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Navbar,
  NavLink,
  Button
} from "react-bootstrap";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { useGlobalUserContext } from "../../utils/GlobalState";

function Sidebar() {
  const [state, dispatch] = useGlobalUserContext();
  console.log("mystate", state);
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="sideBarNavStlye" style={{ height: "70vh", minWidth: "20%" }} expand="lg" expanded={expanded}>
      <NavbarToggle className="sideBarToggle" onClick={() => setExpanded(expanded ? false : 'expanded')} />
      <NavbarCollapse >
        <Row className="mx-auto py-2 border border-dark rounded" style={{ backgroundColor: "rgb(170,200,170)" }}>
          <Col xs={6} md={3} lg={3} style={{ width: "auto" }}>
            <ListGroup style={{ textAlign: "center", textDecoration: "none" }}>
              <ListGroupItem style={{ backgroundColor: "rgb(170,200,170)" }}>
                <img
                  src={state.profileImage}
                  alt='User Profile Photo'
                  className="img-fluid img-thumbnail rounded-circle" id="profileImage"
                  style={{
                    objectFit: "cover",
                    width: "200px",
                    height: "200px"
                  }} />
                <h5 className="mt-2">
                  {state.firstName} {state.lastName}
                </h5>
              </ListGroupItem>
              <NavLink as={Link} to="/dashboard">
                <Button
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Dashboard
                </Button>
              </NavLink>
              <NavLink as={Link} to="/account">
                <Button
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Account
                </Button>
              </NavLink>
              <NavLink as={Link} to="/dailyactions">
                <Button
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Daily Actions
                </Button>
              </NavLink>
              <NavLink as={Link} to="/habittracker">
                <Button
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Habit Tracker
                </Button>
              </NavLink>
              <NavLink as={Link} to="/resources">
                <Button
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Resources
                </Button>
              </NavLink>
            </ListGroup>
          </Col>
        </Row>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Sidebar;
