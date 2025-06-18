import React from "react";

const SatisfactionGauge = ({ score }) => {
  return (
    <div className="bg-white shadow p-4 rounded mb-6">
      <h2 className="text-lg font-semibold mb-2">Overall Satisfaction Score</h2>
      <div className="flex items-center gap-4">
        <div className="w-40 h-40 rounded-full border-8 border-green-300 flex items-center justify-center text-3xl font-bold">
          {score.toFixed(2)}
        </div>
        <div className="text-gray-600">Skor rata-rata dari semua agent</div>
      </div>
    </div>
  );
};

export default SatisfactionGauge;
