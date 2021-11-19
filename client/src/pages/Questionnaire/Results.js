import React from "react";
import { Button, Col, Row } from "react-bootstrap/";
import { Link } from "react-router-dom";
import CircleLabel from "../../components/CircleLabel";
import { Spring, animated } from "react-spring";

function Results() {
  const food = localStorage.getItem("food");
  const transportation = localStorage.getItem("transportation");
  const waste = localStorage.getItem("waste");
  const lifestyle = localStorage.getItem("lifestyle");
  const housing = localStorage.getItem("housing");

  function goToDashboard() {
    window.location.assign("/dashboard");
  }

  return (
    <div className="text-center">
      <h1 className="text-center my-5 display-4">RESULTS</h1>
      <div className="container my-5">
        <Row>
          <Col>
            <Spring
              from={{ opacity: 0, marginTop: -1000 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1000, duration: 1000 }}
            >
              {(props) => (
                <animated.div style={props}>
                    <CircleLabel
                      label="Food"
                      labeltwo={food}
                      fontSize="3em"
                      bgStyle="food"
                      icon="🥬"
                      height="170px"
                      width="170px"
                    />
                  </animated.div>
              )}
            </Spring>
          </Col>
          <Col>
            <Spring
              from={{ opacity: 0, marginTop: -1000 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1000, duration: 800 }}
            >
              {(props) => (
                <animated.div style={props}>
                    <CircleLabel
                      label="Transportation"
                      labeltwo={transportation}
                      fontSize="1.5em"
                      bgStyle="transportation"
                      icon="🚴"
                      height="170px"
                      width="170px"
                    />
                </animated.div>
              )}
            </Spring>
          </Col>
          <Col>
            <Spring
              from={{ opacity: 0, marginTop: -1000 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1000, duration: 700 }}
            >
              {(props) => (
                <animated.div  style={props}>
                    <CircleLabel
                      label="Waste"
                      labeltwo={waste}
                      fontSize="3em"
                      bgStyle="waste"
                      icon="🗑️"
                      height="170px"
                      width="170px"
                    />
                  </animated.div>
              )}
            </Spring>
          </Col>
          <Col>
            <Spring
              from={{ opacity: 0, marginTop: -1000 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1000, duration: 600 }}
            >
              {(props) => (
                  <animated.div style={props}>
                    <CircleLabel
                      label="Lifestyle"
                      labeltwo={lifestyle}
                      fontSize="3em"
                      bgStyle="lifestyle"
                      icon="🏙️"
                      height="170px"
                      width="170px"
                    />
                  </animated.div>
              )}
            </Spring>
          </Col>
          <Col>
            <Spring
              from={{ opacity: 0, marginTop: -1000 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1000, duration: 500 }}
            >
              {(props) => (
                  <animated.div style={props}>
                    <CircleLabel
                      label="Housing"
                      labeltwo={housing}
                      fontSize="2.8em"
                      bgStyle="housing"
                      icon="🏠"
                      height="170px"
                      width="170px"
                    />
                  </animated.div>
              )}
            </Spring>
          </Col>
        </Row>
      </div>

      <Link to="/dashboard">
        <Button
          variant="primary"
          className="text-center mt-5"
          onClick={goToDashboard}
          size="lg"
        >
          GO to DASHBOARD
        </Button>
      </Link>
    </div>
  );
}

export default Results;

//all the circle drop down at the same time instead of staggered, comment it in to see if you like it more or less than the current state
{
  /* <Spring
from={{ opacity: 0, marginTop: -1000 }}
to={{ opacity: 1, marginTop: 0 }}
config={{ delay: 1000, duration: 1000 }}
>
{(props) => (
  <>
    <Col>
      <animated.div div style={props}>
        <CircleLabel
          label="Food"
          labeltwo={food}
          fontSize="3em"
          bgStyle="food"
          icon="🥬"
          height="170px"
          width="170px"
        />
      </animated.div>
    </Col>
    <Col>
      <animated.div style={props}>
        <CircleLabel
          label="Transportation"
          labeltwo={transportation}
          fontSize="1.5em"
          bgStyle="transportation"
          icon="🚴"
          height="170px"
          width="170px"
        />
      </animated.div>
    </Col>
    <Col>
      <animated.div  style={props}>
        <CircleLabel
          label="Waste"
          labeltwo={waste}
          fontSize="3em"
          bgStyle="waste"
          icon="🗑️"
          height="170px"
          width="170px"
        />
      </animated.div>
    </Col>
    <Col>
      <animated.div style={props}>
        <CircleLabel
          label="Lifestyle"
          labeltwo={lifestyle}
          fontSize="3em"
          bgStyle="lifestyle"
          icon="🏙️"
          height="170px"
          width="170px"
        />
      </animated.div>
    </Col>
    <Col>
      <animated.div  style={props} >
        <CircleLabel
          label="Housing"
          labeltwo={housing}
          fontSize="2.8em"
          bgStyle="housing"
          icon="🏠"
          height="170px"
          width="170px"
        />
      </animated.div>
    </Col>
  </>
)}
</Spring> */
}
