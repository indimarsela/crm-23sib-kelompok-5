import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// Dummy chart data (bisa diganti dengan data props atau API)
const chartData = [
  { name: "Sen", value: 400 },
  { name: "Sel", value: 300 },
  { name: "Rab", value: 200 },
  { name: "Kam", value: 278 },
  { name: "Jum", value: 189 },
  { name: "Sab", value: 239 },
  { name: "Min", value: 349 },
];

// Fallback dummy leaderboard
const fallbackLeaderboard = [
  { name: "Syarah Meylina", value: 90000 },
  { name: "Indi Marsela", value: 2500 },
  { name: "Caitlin Prameswari", value: 2300 },
  { name: "Alya Qonitatul", value: 2200 },
];

const Dashboard = ({ leaderboard = fallbackLeaderboard }) => {
  const statBoxes = ["350", "350", "350", "350"];

  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
      <div className="text-lg font-semibold mb-1 text-[#922b2b]">Hi, Indi Marsela</div>
      <div className="text-sm text-gray-500 mb-6">It’s looking like a slow day.</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statBoxes.map((value, index) => (
          <div key={index} className="bg-[#a52a2a] text-white p-4 rounded shadow">
            <div className="text-sm">Unresponded</div>
            <div className="text-2xl font-bold">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <div className="text-[#a52a2a] font-semibold mb-2">Today</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#a52a2a"
                strokeWidth={2}
                dot={{ fill: "#922b2b" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded shadow p-4">
          <div className="text-sm font-bold mb-4 text-[#922b2b]">Leaderboard</div>
          <div className="bg-[#a52a2a] text-white p-2 rounded mb-3">
            <div className="text-xs">Most Sales</div>
            <div className="font-semibold">{leaderboard[0]?.name}</div>
          </div>
          {leaderboard.slice(1).map((item, index) => (
            <div key={item.name} className="flex justify-between text-sm text-gray-700 mb-1">
              <span>{index + 2}. {item.name}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <table className="w-full bg-white shadow rounded text-sm">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="p-2">Teammembers</th>
              <th className="p-2">Assigned conversations</th>
              <th className="p-2">Closed conversations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Indi Marsela</td>
              <td className="p-2">26</td>
              <td className="p-2">27</td>
            </tr>
            <tr className="border-t">
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
