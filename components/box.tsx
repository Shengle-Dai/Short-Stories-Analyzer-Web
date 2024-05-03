import React from "react";

const Box = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <div
      className="border border-gray-300 hover:border-blue-500 hover:bg-blue-100 shadow-sm hover:shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      <div className="p-4 flex items-center justify-center">
        <p className="text-center text-lg hover:text-blue-600 font-semibold text-gray-700">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Box;
