import React from "react";
import Sidebar from "../../components/Sidebar/index";
import { Row, Col } from "react-bootstrap";
import CircleLabel from "../../components/CircleLabel";

import { Spring, animated } from "react-spring";

const Resources = () => {
  return (
    <>
      <div className="d-flex mt-5">
        <div className='py-5'>
          <Sidebar />
        </div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 0, duration: 200 }}
        >
          {(props) => (
            <animated.div style={props}>
              <div className="px-5 flex-grow-1">
                <h1 className="mb-5 text-center">Resources</h1>
                <div>
                  <Row className="mt-4">
                    <Col md={3} className="d-flex justify-content-center">
                      <CircleLabel
                        label="Food"
                        fontSize="2.9em"
                        bgStyle="food"
                        icon="🥬"
                        width='100px'
                        height='100px'
                      />
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <p>
                            A community forum that discuss subjects that range from
                            transportation to food,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://ecofriend.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                        <li style={{ borderBottom: "1px solid black" }}>
                          <p>
                            Signing up for this newsletter will get you off to a good
                            start,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://www.treehugger.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} className="d-flex justify-content-center">
                      <CircleLabel
                        label="Transportation"
                        fontSize="1.1em"
                        bgStyle="transportation"
                        icon="🚴"
                        width='100px'
                        height='100px'
                      />
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <p>
                            A resource to help you consider how your transportation
                            decisions impacts the enviornment,
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://www.transit.dot.gov/regulations-and-programs/environmental-programs/transit-and-sustainability"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                        <li style={{ borderBottom: "1px solid black" }}>
                          <p>
                            They NY Times wrote up a great article on how to travel more
                            sustainably,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://www.nytimes.com/guides/travel/how-to-travel-sustainably"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} className="d-flex justify-content-center">
                      <CircleLabel
                        label="Waste"
                        fontSize="2.5em"
                        bgStyle="waste"
                        icon="🗑️"
                        width='100px'
                        height='100px'
                      />
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <p>
                            Items that can help you transition to a minimum waste
                            lifestyle,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://zerowastemvmt.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            A place where you can read blogs, get green tips, and engage
                            with a community forum,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://earth911.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                        <li style={{ borderBottom: "1px solid black" }}>
                          <p>
                            Learn tricks and tips to become sustainable all while living
                            on a budget,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://www.getgreenbewell.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} className="d-flex justify-content-center">
                      <CircleLabel label='Lifestyle' bgStyle='lifestyle' fontSize='2em' icon='🏙️' width='100px'
                        height='100px' />
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <p>
                            Learn what it means to live a sustainable life,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                target="_blank"
                                href="https://www.conserve-energy-future.com/15-ideas-for-sustainable-living.php"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                        <li style={{ borderBottom: "1px solid black" }}>
                          <p>
                            Tips to take small steps to learning how to be sustainable,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                target="_blank"
                                href=" https://theminimalistvegan.com/live-a-more-sustainable-lifestyle/"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} className="d-flex justify-content-center">
                      <CircleLabel label='Housing' bgStyle='housing' fontSize='1.9em' icon='🏠' width='100px'
                        height='100px' />
                    </Col>
                    <Col>
                      <ul>
                        <li>
                          <p>
                            Tips on maintaining a zero waste home,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://zerowastehome.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Great tips for learning how to garden sustainably,{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                href="https://eartheasy.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                here.
                              </a>
                            </span>
                          </p>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>
            </animated.div>)}
        </Spring>
      </div>
    </>
  );
};

export default Resources;
