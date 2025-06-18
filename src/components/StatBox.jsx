import React from "react";

const StatBox = ({ title, value, color }) => {
  return (
    <div className={`border-l-8 ${color} bg-white p-4 rounded shadow`}>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
    </div>
  );
};

export default StatBox;
