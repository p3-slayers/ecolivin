import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

function Sidebar() {
  return (
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
