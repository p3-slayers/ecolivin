import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/index";
import { useGlobalUserContext } from "../../utils/GlobalState";
import BarChart from "../../components/ChartJs";
import { Button, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";

import { QUERY_ALL_RESULTS } from "../../utils/queries";

function computeAverages(others) {
  console.log(others);
  let allPercentages = {
    food: [],
    housing: [],
    transportation: [],
    waste: [],
    lifestyle: [],
  };

  const cats = ["food", "housing", "transportation", "waste", "lifestyle"];
  cats.map(function (category) {
    others.map(function (other) {
      allPercentages[category].push(other[category]);
    });
  });

  cats.map(function (category) {
    const total = allPercentages[category].reduce((a, b) => a + b, 0);
    allPercentages[category] = total / allPercentages[category].length;
  });

  return allPercentages;
}

const Dashboard = () => {
  // console.log(auth.loggedIn())
  // console.log(auth.getProfile().data.firstName)
  const [state, dispatch] = useGlobalUserContext();
  console.log("mystate", state);
  // useEffect(console.log(`DASHBOARD MOUNTED`), []);

  const qResults = useQuery(QUERY_ALL_RESULTS);
  const otherResults = qResults.data?.getResults || [];
  const otherPercentages = computeAverages(otherResults);

  const food = localStorage.getItem("food");
  const transportation = localStorage.getItem("transportation");
  const waste = localStorage.getItem("waste");
  const lifestyle = localStorage.getItem("lifestyle");
  const housing = localStorage.getItem("housing");

  //on the container that wraps around these pages add margin 30px auto
  return (
    <>
      <div className="d-flex mt-5">
      
        <Sidebar />

        <div className="px-5 flex-grow-1" style={{ marginLeft: "30px" }}>
          <h1 className="display-5">Hello, {state.firstName}!</h1>

          <Row className="mt-5 mb-5 align-items-center">
            <Col>
              <p>
              Hi {state.firstName}, welcome to EcoLivin. Below, you can see how your answers to the Questionnaire compare to the all other users of EcoLivin. To improve your scores, navigate through the dashboard to learn how to implement actions into your life by adding challenges to your week, viewing resources may help guide you in implementing these practices. Happy living!
              </p>
            </Col>
            <Col className="text-center">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dailyactions"
              >
                <Button
                  variant="success"
                  className="mb-4"
                  style={{ width: "50%" }}
                >
                  Add actions now!
                </Button>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/beginquestionnaire"
              >
                <Button variant="success" style={{ width: "50%" }}>
                  Retake Questionnaire
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className="mt-4 align-items-center">
            <Col style={{ height: "500px;" }}>
              <BarChart
                lifestyle={lifestyle}
                housing={housing}
                waste={waste}
                food={food}
                transportation={transportation}
                otherPercentages={otherPercentages}
              />
            </Col>
            <Col className="px-5">
              <p>
                The team at EcoLivin believes that taking the steps to live a
                more sustainable lifetstyle should start with making small
                changes to your daily routine. These small steps may eventually
                lead to a more fulflilling lifestyle that has major implications
                for yourself, your community, and of course, our planet.
                <p style={{display:'flex', justifyContent:'end', paddingTop:'5px'}}> The Team at EcoLivin &#128154; </p>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
