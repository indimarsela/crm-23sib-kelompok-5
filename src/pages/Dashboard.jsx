import React from "react";
import {
  FaSignOutAlt,
  FaChartBar,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const Dashboard = () => {
  const statBoxes = ["350", "350", "350", "350"];
  const leaderboard = [
    { name: "Syarah Meylina", value: 90000 },
    { name: "Indi Marsela", value: 2500 },
    { name: "Caitlin Prameswari", value: 2300 },
    { name: "Alya Qonitatul", value: 2200 },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
      <div className="text-lg font-semibold mb-1">Hi, Indi Marsela</div>
      <div className="text-sm text-gray-500 mb-6">It’s looking like a slow day.</div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {statBoxes.map((value, index) => (
          <div key={index} className="bg-red-700 text-white p-4 rounded shadow">
            <div className="text-sm">Unresponded</div>
            <div className="text-2xl font-bold">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-red-700 p-4 rounded shadow text-white">
          <div className="mb-2">Today</div>
          <div className="h-40 flex items-center justify-center">
            <span className="text-gray-300">[Line Chart Placeholder]</span>
          </div>
        </div>

        <div className="bg-white rounded shadow p-4">
          <div className="text-sm font-bold mb-4">Leaderboard</div>
          <div className="bg-red-700 text-white p-2 rounded mb-3">
            <div className="text-xs">Most Sales</div>
            <div className="font-semibold">Syarah Meylina</div>
          </div>
          {leaderboard.slice(1).map((item, index) => (
            <div
              key={item.name}
              className="flex justify-between text-sm text-gray-700 mb-1"
            >
              <span>
                {index + 2}. {item.name}
              </span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr className="text-left text-sm bg-gray-200">
              <th className="p-2">Teammembers</th>
              <th className="p-2">Assigned conversations</th>
              <th className="p-2">Closed conversations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm border-t">
              <td className="p-2">Indi Marsela</td>
              <td className="p-2">26</td>
              <td className="p-2">27</td>
            </tr>
            <tr className="text-sm border-t">
              <td className="p-2">Caitlin Prameswari</td>
              <td className="p-2">34</td>
              <td className="p-2">6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;