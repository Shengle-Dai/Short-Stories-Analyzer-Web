"use client";

import React, { useState } from "react";
import { stories } from "@/utils/stories";
import ThemeChart from "@/components/ThemeChart";
import RadarChart from "@/components/RadarChart";
import IntroParagraph from "@/components/IntroParagraph";
import Section from "@/components/Section";

const StatsPage = () => {
  const [selectedStoryIds, setSelectedStoryIds] = useState<string[]>([]);
  const [chartType, setChartType] = useState<string>("bar");

  const toggleStorySelection = (storyId: string) => {
    setSelectedStoryIds((prev) =>
      prev.includes(storyId)
        ? prev.filter((id) => id !== storyId)
        : [...prev, storyId]
    );
  };

  const handleChartTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartType(event.target.value);
  };

  const selectedStories = stories.filter((story) =>
    selectedStoryIds.includes(story.id.toString())
  );

  return (
    <>
      <IntroParagraph
        title="Graph of Selected Short Stories"
        description="Visually compare the differences in stories that you want to explore."
      />
      <div className="flex flex-col min-h-screen px-10 py-6 gap-y-[30px]">
        <Section
          title="All Selected Stories"
          description="Select and click the stories that you want to explore, and see the comparison between them."
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-2">
              {stories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => toggleStorySelection(story.id.toString())}
                  className={`p-2 rounded ${
                    selectedStoryIds.includes(story.id.toString())
                      ? "bg-sky-100 text-blue-600 border border-blue-400"
                      : "bg-gray-50 border border-gray-300 text-gray-800"
                  }`}
                >
                  {story.title}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <select
                onChange={handleChartTypeChange}
                value={chartType}
                className="bg-gray-50 border border-gray-300 text-gray-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer hover:bg-gray-100 hover:border-blue-400 transition-all duration-300 ease-in-out"
              >
                <option value="bar">Bar Chart</option>
                <option value="radar">Radar Chart</option>
              </select>
            </div>
            {selectedStories.length > 0 &&
              (chartType === "radar" ? (
                <RadarChart stories={selectedStories} />
              ) : (
                <ThemeChart stories={selectedStories} />
              ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default StatsPage;
