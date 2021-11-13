import React from "react";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";


const food = localStorage.getItem('food');
const transportation = localStorage.getItem('transportation');
const waste = localStorage.getItem('waste');
const lifestyle = localStorage.getItem('lifestyle');
const housing = localStorage.getItem('housing');

const data = {
  labels: ["Lifestyle", "Housing", "Waste", "Food", "Transportation"],
  datasets: [
    {
      label: "User Average",
      //map over all user data and find average
      data: [10, 5, 11, 9, 2],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Your Scores",
      data: [lifestyle, housing, waste, food, transportation],
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
