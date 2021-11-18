import React from "react";
import Sidebar from "../../components/Sidebar/index";
import { Row, Col } from "react-bootstrap";

const Resources = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="d-flex flex-row mt-5">
        {/* will inserts information/summary about the User */}
        <div className="p-5">
          <Sidebar />
        </div>
        <div>
          <Row>
            <h2>Resources</h2>
          </Row>
          <Row className="mt-4">
            <Col>
              <div
                className="rounded-circle bg-primary small food d-flex justify-content-center align-items-center"
                style={{ width: "100px", height: "100px" }}
              >
                <h5 className="p-0">Food</h5>
              </div>
            </Col>
            <Col>
              <ul>
                <li>
                  <p>
                    A community forum that discuss subjects that range from
                    transportation to food,{" "}
                    <span style={{ fontWeight: "bold" }}>
                      <a href="https://ecofriend.com/" target="_blank">
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
                      <a href="https://www.treehugger.com/" target="_blank">
                        here.
                      </a>
                    </span>
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="rounded-circle bg-success transportation d-flex justify-content-center align-items-center"
                style={{ width: "100px", height: "100px" }}
              >
                <h5 className="p-0 small">Transportation</h5>
              </div>
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
            <Col>
              <div
                className="rounded-circle bg-success waste d-flex justify-content-center align-items-center"
                style={{ width: "100px", height: "100px" }}
              >
                <h5 className="p-0">Waste</h5>
              </div>
            </Col>
            <Col>
              <ul>
                <li>
                  <p>
                    Items that can help you transition to a minimum waste
                    lifestyle,{" "}
                    <span style={{ fontWeight: "bold" }}>
                      <a href="https://zerowastemvmt.com/" target="_blank">
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
                      <a href="https://earth911.com/" target="_blank">
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
                      <a href="https://www.getgreenbewell.com/" target="_blank">
                        here.
                      </a>
                    </span>
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="rounded-circle bg-success lifestyle d-flex justify-content-center align-items-center"
                style={{ width: "100px", height: "100px" }}
              >
                <h5 className="p-0">Lifestyle</h5>
              </div>
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
            <Col>
              <div
                className="rounded-circle bg-success housing d-flex justify-content-center align-items-center"
                style={{ width: "100px", height: "100px" }}
              >
                <h5 className="p-0">Housing</h5>
              </div>
            </Col>
            <Col>
              <ul>
                <li>
                  <p>
                    Tips on maintaining a zero waste home,{" "}
                    <span style={{ fontWeight: "bold" }}>
                      <a href="https://zerowastehome.com/" target="_blank">
                        here.
                      </a>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Great tips for learning how to garden sustainably,{" "}
                    <span style={{ fontWeight: "bold" }}>
                      <a href="https://eartheasy.com/" target="_blank">
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
    </>
  );
};

export default Resources;
