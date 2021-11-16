import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import ActionCard from '../../components/actionCard/index'


const DailyActions = () => {
  return (
    <div className="d-flex mt-5">
      {/* will inserts information/summary about the User */}
      <Sidebar />
      <div className="px-5 flex-grow-1">
        <h2 className="mb-4">Daily Actions</h2>


        <Tabs defaultActiveKey="profile" className="mb-3">
          <Tab eventKey="food" title="Food">
            <Container>
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="f1" title="Plant-based" link="nolinkfornow" actionText="Eat 100% plant-based for the day"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f2" title="Veggie Scraps" link="nolinkfornow" actionText="Reuse veggie scraps and make broths or freeze for new recipes"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f3" title="Compost" link="nolinkfornow" actionText="Begin composting any food waste"/>
              </Col>
            </Row>
            <Row>            
              <Col md={4}>
                  <ActionCard actionId="f4" title="Garden" link="nolinkfornow" actionText="Begin or mantain garden"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f5" title="Local foods" link="nolinkfornow" actionText=" Buy locally grown food"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="f6" title="Homecooked Meal" link="nolinkfornow" actionText="Eat homecooked meals when possible"/>
              </Col>
            </Row>

            </Container>
          </Tab>

          <Tab eventKey="lifestyle" title="Lifestyle">
          <Container>
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="l1" title="Used Items" link="nolinkfornow" actionText="Buy mostly used stuff and shop at second-hand stores"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l2" title="Education" link="nolinkfornow" actionText="Listen to a podcast or watch a documentary regarding sustainability."/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l3" title="Gifts" link="nolinkfornow" actionText="Make homemade gifts for loved ones."/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="l4" title="Communication" link="nolinkfornow" actionText="Share knowledge with friends on how to live sustainably."/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l5" title="New Purchases" link="nolinkfornow" actionText="Make purchases from companies who promote sustainability."/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="l6" title="Zero waste kit" link="nolinkfornow" actionText="Create and carry a zero waste kit when going out to reduce waste."/>
              </Col>
            </Row>
            </Container>
          </Tab>
          
          <Tab eventKey="transportation" title="Transportation">
          <Container> 
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="t1" title="Carpool" link="nolinkfornow" actionText="Carpool to work/school or any event with a friend"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t2" title="Public Transit" link="nolinkfornow" actionText="Take public transit to work/school or etc"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t3" title="Bike" link="nolinkfornow" actionText="Bike to work/school"/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="t4" title="Electric bike/scooter" link="nolinkfornow" actionText="Swap out your car for an electric bike/scooter"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t5" title="Stairs" link="nolinkfornow" actionText="Take stairs over elevator"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="t6" title="Car-free" link="nolinkfornow" actionText="Embrace days of car-free living"/>
              </Col>
            </Row>


            </Container>
          </Tab>
          <Tab eventKey="waste" title="Waste">
          <Container>
            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="w1" title="Recycle" link="nolinkfornow" actionText="Recycle products correctly, following your city/location guidelines"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w2" title="Water Bottle" link="nolinkfornow" actionText="Carry a refillable water bottle to reduce plastic bottles."/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w3" title="Reusable cups" link="nolinkfornow" actionText="Bring a reusable cup to a coffee/tea shop to reduce waste"/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="w4" title="Towels and Napkins" link="nolinkfornow" actionText="Switch from single use paper towels and napkins to cloth towels and handkerchief'"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w5" title="No more single packages" link="nolinkfornow" actionText="Refrain from purchasing single packages items or plastic wrapped produce"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="w6" title="Reusable bags" link="nolinkfornow" actionText="Carry reusable bags to reduce plastic bags"/>
              </Col>
            </Row>


            </Container>
          </Tab>
          <Tab eventKey="housing" title="Housing">
          <Container>
            

            <Row className="mb-4">            
              <Col md={4}>
                  <ActionCard actionId="h1" title="Shower" link="nolinkfornow" actionText="Decrease shower time to 5 minutes, and switch from taking baths"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h2" title="Washer" link="nolinkfornow" actionText="Wash clothing on cold cycle insead of hot"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h3" title="Air-dry" link="nolinkfornow" actionText="Air-dry clothing after washing instead of usering the drying machine"/>
              </Col>
            </Row>

            <Row>            
              <Col md={4}>
                  <ActionCard actionId="h4" title="Lighting" link="nolinkfornow" actionText="Turn off lights when not in use"/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h5" title="Unplug Electronics" link="nolinkfornow" actionText="Unplug electronics when not in use."/>
              </Col>
              <Col md={4}>
                  <ActionCard actionId="h6" title="Thermostat" link="nolinkfornow" actionText="Keep your home at lower temperature (2-3 degrees lower)"/>
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
