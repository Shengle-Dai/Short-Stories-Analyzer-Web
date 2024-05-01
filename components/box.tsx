import React from "react";

const Box = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <div
      className="border border-gray-300 hover:border-blue-500 shadow-sm hover:shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <div className="p-4 bg-white hover:bg-blue-100">
        <p className="text-center text-lg font-semibold text-gray-700 hover:text-blue-600">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Box;
