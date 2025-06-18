import React from "react";
import { FaUserCircle, FaCog, FaDollarSign, FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const pieData = [
  { name: "Investment", value: 400 },
  { name: "Food", value: 300 },
  { name: "Shopping", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const lineData = [
  { name: '1', value: 20 },
  { name: '5', value: 50 },
  { name: '10', value: 35 },
  { name: '15', value: 75 },
  { name: '20', value: 50 },
  { name: '25', value: 85 },
  { name: '30', value: 60 },
];

const transactions = [
  { name: "Rumit Akbar", amount: "1,100.0" },
  { name: "Alamin Sarkar", amount: "1,100.0" },
  { name: "Rasel Ahmed", amount: "1,100.0" },
  { name: "Rumit Akbar", amount: "1,100.0" },
];

const AccountManagement = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">Hi, Indi Marsela</h1>
          <p className="text-sm text-gray-500">It’s looking like a slow day.</p>
        </div>
        <div className="flex gap-4 items-center">
          <FaCog className="text-xl" />
          <FaUserCircle className="text-2xl" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        {[
          { label: "Total Balance", value: "$4,156.45", icon: <FaWallet /> },
          { label: "Income", value: "$3,146.45", icon: <FaArrowUp /> },
          { label: "Expenses", value: "$1,146.45", icon: <FaArrowDown /> },
          { label: "Savings", value: "$2,146.45", icon: <FaDollarSign /> },
        ].map((card, index) => (
          <div key={index} className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-4 rounded shadow">
            <div className="flex items-center justify-between mb-2">
              {card.icon}
              <div className="text-sm">...</div>
            </div>
            <div className="text-md font-semibold">{card.label}</div>
            <div className="text-lg font-bold">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-red-800 text-white p-4 rounded">
          <h3 className="font-semibold mb-2">Spending Categories</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around text-sm mt-2">
            {pieData.map((d, i) => (
              <span key={i}>{d.name}</span>
            ))}
          </div>
        </div>

        <div className="bg-red-800 text-white p-4 rounded">
          <h3 className="font-semibold mb-2">Earning Flow</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#00D2FF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-900 text-white p-4 rounded">
          <h3 className="font-semibold mb-2">Recent Transaction</h3>
          {transactions.map((tx, idx) => (
            <div key={idx} className="flex justify-between border-b border-white/20 py-2">
              <span>{tx.name}</span>
              <span>{tx.amount}</span>
            </div>
          ))}
        </div>

        <div className="bg-red-900 text-white p-4 rounded">
          <h3 className="font-semibold mb-2">Card Information</h3>
          <div className="text-sm space-y-2">
            <div>Status: <span className="text-green-400 font-bold">Active</span></div>
            <div>Card: Credit</div>
            <div>Card Type: Visa</div>
            <div>Card Number: 223456****</div>
            <div>Expire Date: 12-12-2026</div>
            <div>Currency: <span className="font-semibold">BDT</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
