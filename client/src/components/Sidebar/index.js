import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useGlobalUserContext } from '../../utils/GlobalState';

function Sidebar() {
  const [state, dispatch] = useGlobalUserContext();
  console.log("mystate", state);
  return (
    <div style={{border:'1px solid black' ,height:'70vh'}}>
    <Row>
      <Col xs={6} md={3} lg={3} style={{ width: "auto" }}>
        <ListGroup style={{ textAlign: "center", textDecoration: "none" }}>
        <ListGroupItem>
        <img src={state.profileImage}/>
        <h5>{state.firstName} {state.lastName}</h5>
        </ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%"}}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/account"
              >
                Account
              </Link>
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%" }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
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
                style={{ textDecoration: "none", color: "white" }}
                to="/habittracker"
              >
                Habit Tracker
              </Link>
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%" }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/resources"
              >
                Resources
              </Link>
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button style={{ width: "100%" }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
               Dashboard
              </Link>
            </Button>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
    </div>
  );
}

export default Sidebar;
