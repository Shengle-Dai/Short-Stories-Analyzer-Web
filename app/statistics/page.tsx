"use client";

import React, { useState } from "react";
import { stories } from "@/utils/definitions"; // Adjust the import path as needed
import ThemeChart from "@/components/ThemeChart"; // Adjust the import path as needed

const StatsPage = () => {
  const [selectedStoryIds, setSelectedStoryIds] = useState<string[]>([]);

  const handleStoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => (option as HTMLOptionElement).value
    );
    setSelectedStoryIds(selectedOptions);
  };

  const selectedStories = stories.filter(
    (story) => selectedStoryIds.includes(story.id.toString()) // Ensure IDs are compared as strings
  );

  return (
    <div>
      <select
        onChange={handleStoryChange}
        value={selectedStoryIds}
        multiple
        size={5}
      >
        {stories.map((story) => (
          <option key={story.id} value={story.id.toString()}>
            {story.title}
          </option>
        ))}
      </select>

      {selectedStories.length > 0 && <ThemeChart stories={selectedStories} />}
    </div>
  );
};

export default StatsPage;
