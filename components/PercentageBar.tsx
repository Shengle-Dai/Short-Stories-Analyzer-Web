import React from "react";

const PercentageBar = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PercentageBar;
