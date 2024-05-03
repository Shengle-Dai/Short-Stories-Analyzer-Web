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
import { Colors } from "@/utils/colors";
import { Story } from "@/utils/definitions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ThemeChart = ({ stories }: { stories: Story[] }) => {
  const data = {
    labels: ["Horror", "Loss", "Resilience", "Nostalgia", "Hope"],
    datasets: stories.map((story) => ({
      label: story.title,
      data: [
        story.data.horror_percentage,
        story.data.loss_percentage,
        story.data.resilience_percentage,
        story.data.nostalgia_percentage,
        story.data.hope_percentage,
      ],
      backgroundColor: Colors[story.id.toString() as keyof typeof Colors],
      borderColor: Colors[story.id.toString() as keyof typeof Colors],
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
        position: "top" as const,
      },
    },
  };

  return (
    <div style={{ width: "1000px", height: "600px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ThemeChart;
