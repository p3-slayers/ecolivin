import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

function Sidebar() {
  return (
    // <div>
    //   <div className="p-2">
    //     <span className="fs-4">Sidebar</span>
    //     <ul className="nav nav-pills flex-column mb-auto">
    //       <li className="nav-item">
    //         <Link to="/account">Account</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/dailyactions">Daily Actions</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/habittracker">Habit Tracker</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/resources">Resources</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    // <Container >
    <Row>
      <Col xs={6} md={3} lg={3} style={{ width: "auto" }}>
        <ListGroup style={{ textAlign: "center", textDecoration: "none" }}>
          <ListGroupItem>Quick Links</ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%"}}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/account"
              >
                Account
              </Link>
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/dailyactions"
              >
                {" "}
                Daily Actions{" "}
              </Link>
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/habittracker"
              >
                Habit Tracker
              </Link>
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/resources"
              >
                Resources
              </Link>
            </Button>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
    // </Container>
  );
}

export default Sidebar;
