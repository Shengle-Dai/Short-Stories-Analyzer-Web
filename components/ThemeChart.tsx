// components/ThemeChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const colors = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(255, 159, 64, 0.5)",
]; // Add more colors as needed

const ThemeChart = ({ stories }) => {
  const data = {
    labels: ["Horror", "Loss", "Resilience", "Nostalgia", "Hope"],
    datasets: stories.map((story, index) => ({
      label: story.title,
      data: [
        story.data.horror_percentage,
        story.data.loss_percentage,
        story.data.resilience_percentage,
        story.data.nostalgia_percentage,
        story.data.hope_percentage,
      ],
      backgroundColor: colors[index % colors.length], // Use colors cyclically
      borderColor: colors[index % colors.length],
      borderWidth: 1,
    })),
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top" as "top", // Explicitly declare 'top' as a type
      },
      title: {
        display: true,
        text: "Story Theme Percentages",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ThemeChart;
