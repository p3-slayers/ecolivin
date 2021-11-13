import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import ActionCard from '../../components/actionCard/index'

const DailyActions = () => {
  return (
    <div className="d-flex mt-5">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="p-2 flex-grow-1">
        <h3>Daily Actions</h3>


        <Tabs defaultActiveKey="profile" className="mb-3">
          <Tab eventKey="food" title="Food">
            <Container>
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="f1" title="food action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f2" title="food action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f3" title="food action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>
            <Row>            
              <Col md={4}>
                  <ActionCard actionId="f4" title="food action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f5" title="food action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f6" title="food action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>

            </Container>
          </Tab>

          <Tab eventKey="lifestyle" title="Lifestyle">
          <Container>
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="l1" title="lifestyle action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l2" title="lifestyle action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l3" title="lifestyle action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="l4" title="lifestyle action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l5" title="lifestyle action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l6" title="lifestyle action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>
            </Container>
          </Tab>
          
          <Tab eventKey="transportation" title="Transportation">
          <Container> 
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="t1" title="transportation action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t2" title="transportation action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t3" title="transportation action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="t4" title="transportation action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t5" title="transportation action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t6" title="transportation action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>


            </Container>
          </Tab>
          <Tab eventKey="waste" title="Waste">
          <Container>
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="w1" title="waste action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w2" title="waste action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w3" title="waste action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="w4" title="waste action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w5" title="waste action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w6" title="waste action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>


            </Container>
          </Tab>
          <Tab eventKey="housing" title="Housing">
          <Container>
            

            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="h1" title="housing action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h2" title="housing action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h3" title="housing action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="h4" title="housing action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h5" title="housing action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h6" title="housing action1" link="nolinkfornow" actionText="in this action you will eat healthy"/>
              </Col>
            </Row>


            </Container>
          </Tab>
        </Tabs>

      </div>
    </div>
  );
};

export default DailyActions;
