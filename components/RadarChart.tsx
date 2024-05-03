import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  RadarController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Colors } from "@/utils/colors";
import { Story } from "@/utils/definitions";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  RadarController,
  Title,
  Tooltip,
  Legend
);

const RadarChart = ({ stories }: { stories: Story[] }) => {
  const labels = ["Horror", "Loss", "Resilience", "Nostalgia", "Hope"];
  const datasets = stories.map((story, index) => ({
    label: story.title,
    data: [
      story.data.horror_percentage,
      story.data.loss_percentage,
      story.data.resilience_percentage,
      story.data.nostalgia_percentage,
      story.data.hope_percentage,
    ],
    borderColor: Colors[story.id.toString() as keyof typeof Colors],
    backgroundColor: Colors[story.id.toString() as keyof typeof Colors].replace(
      "1)",
      "0.2)"
    ),
  }));

  const data = { labels, datasets };
  const options = {
    scales: {
      r: {
        beginAtZero: true,
      },
    },
    plugins: { legend: { position: "top" as const } },
  };

  return (
    <div style={{ width: "600px", height: "600px" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
