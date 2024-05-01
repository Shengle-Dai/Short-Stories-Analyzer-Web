"use client";

import React, { useState } from "react";
import IntroParagraph from "@/components/IntroParagraph";
import Section from "@/components/Section";
import Box from "@/components/box";
import StoryDetailModal from "@/components/StoryDetailModal"; // Assuming you have this component
import { stories } from "@/utils/definitions";

const StoriesPage = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStorySelect = (story) => {
    setSelectedStory(story);
  };

  return (
    <>
      <IntroParagraph
        title="Selected Short Stories"
        description="Explore the emotional landscape of our selected short stories."
      />
      <div className="flex flex-col min-h-screen px-10 py-6 gap-y-[30px]">
        <Section
          title="All Selected Stories"
          description="Select and click the story that you want to explore, and see the details about it."
        >
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {stories.map((story) => (
              <Box
                key={story.id}
                name={story.title}
                onClick={() => handleStorySelect(story)}
              />
            ))}
          </div>
        </Section>
      </div>
      {selectedStory && (
        <StoryDetailModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </>
  );
};

export default StoriesPage;
