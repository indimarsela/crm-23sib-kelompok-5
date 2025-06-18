import React from "react";

const ComplaintTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white shadow rounded p-4 mb-6">
      <h2 className="text-lg font-semibold mb-3">Call Summary by Agent</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Agent</th>
            <th className="p-2">Total Calls</th>
            <th className="p-2">Answered</th>
            <th className="p-2">Satisfaction</th>
          </tr>
        </thead>
        <tbody>
          {data.map((agent, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{agent.name}</td>
              <td className="p-2">{agent.total}</td>
              <td className="p-2">{agent.answered}</td>
              <td className="p-2">{agent.satisfaction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintTable;
