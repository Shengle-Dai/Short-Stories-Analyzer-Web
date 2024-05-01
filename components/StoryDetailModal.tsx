// components/StoryDetailModal.tsx
import React from "react";
import { Story } from "@/utils/definitions";
import PercentageBar from "./PercentageBar";
import Image from "next/image";

const StoryDetailModal = ({
  story,
  onClose,
}: {
  story: Story;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-15%">
      <div
        className="bg-white p-5 rounded-lg shadow-lg flex"
        style={{ width: "90%" }}
      >
        <div className="flex-1 text-left pr-8" style={{ flex: "2 1 70%" }}>
          <h2 className="text-xl font-bold mb-4">{story.title}</h2>
          <p className="mb-4">{story.intro}</p>
          <PercentageBar label="Horror" value={story.data.horror_percentage} />
          <PercentageBar label="Loss" value={story.data.loss_percentage} />
          <PercentageBar
            label="Resilience"
            value={story.data.resilience_percentage}
          />
          <PercentageBar
            label="Nostalgia"
            value={story.data.nostalgia_percentage}
          />
          <PercentageBar label="Hope" value={story.data.hope_percentage} />
          <button
            onClick={onClose}
            className="mt-5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
        <div className="flex-1" style={{ flex: "1 1 30%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={story.imagePath}
              alt={story.title + " image"}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailModal;
