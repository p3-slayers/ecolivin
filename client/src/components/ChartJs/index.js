import React from "react";
import { Container } from "react-bootstrap";
import { Bar, ChartProps } from "react-chartjs-2";

const data = {
  labels: ["Life Style", "Housing", "Waste", "Food", "Transportation"],
  datasets: [
    {
      label: "User Average",
      //map over all user data and find average
      data: [10, 5, 11, 9, 2, 4],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Your Scores",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
  ],
};

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

const VerticalBar = () => (
    //found that putting the graph in a container and changing container width to change size of bar graph easiest..
  <Container style={{ width: "70%", margin: "0 auto" }}>
    <h6 className="title">Results of Questionnaire</h6>
    <Bar data={data} options={options} />
  </Container>
);

export default VerticalBar;
