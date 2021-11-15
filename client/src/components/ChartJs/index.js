import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";




const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function VerticalBar (input) {

  const data = {
    labels: ["Lifestyle", "Housing", "Waste", "Food", "Transportation"],
    datasets: [
      {
        label: "User Average",
        //map over all user data and find average
        data: [input.otherPercentages.lifestyle, input.otherPercentages.housing, input.otherPercentages.waste, input.otherPercentages.food, input.otherPercentages.transportation],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Your Scores",
        data: [input.lifestyle, input.housing, input.waste, input.food, input.transportation],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };


  return (
    //found that putting the graph in a container and changing container width to change size of bar graph easiest..
  <Fragment style={{ width: "70%", margin: "0 auto" }}>
    <h4 className="title text-center mb-3">Check how you compare to others!</h4>
    <Bar data={data} options={options} />
  </Fragment>
  );
};

export default VerticalBar;
