// src/Chart.js
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Chart.css"; // Make sure to import the CSS for styling

// Register the scales and elements you want to use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.title), // Adjust this according to your dataset
    datasets: [
      {
        label: "Intensity",
        data: data.map((item) => item.intensity), // Adjust this according to your dataset
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Data Visualization Chart",
      },
    },
    layout: {
      padding: {
        top: 20, // Space for title
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Chart;
