import React from "react";

const SLALimits = ({ fastPercent, lowScoreCount }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">SLA Limits</h2>
      <p className="text-sm">Call answered in less than 160 seconds:</p>
      <p className="text-2xl text-green-500 font-bold">{fastPercent} %</p>

      <p className="text-sm mt-4">Calls with satisfaction score less than 3:</p>
      <p className="text-2xl text-red-500 font-bold">{lowScoreCount}</p>
    </div>
  );
};

export default SLALimits;
