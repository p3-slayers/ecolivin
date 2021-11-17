import React, {useState} from "react";
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
    <Navbar className="sideBarNavStlye" style={{ border: "1px solid black", height: "70vh" }} expand="lg" expanded={expanded}>
    <NavbarToggle className="sideBarToggle" onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <NavbarCollapse >
      <Row>
        <Col xs={6} md={3} lg={3} style={{ width: "auto" }}>
          <ListGroup style={{ textAlign: "center", textDecoration: "none" }}>
            <ListGroupItem>
              <img src={state.profileImage} />
              <h5>
                {state.firstName} {state.lastName}
              </h5>
            </ListGroupItem>
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
          </ListGroup>
        </Col>
      </Row>
    </NavbarCollapse>
    </Navbar>
  );
}

export default Sidebar;
