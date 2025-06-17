import React from "react";
import {
  FaSearch,
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowDown,
  FaChartBar,
} from "react-icons/fa";

const Laporan = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$32,400",
      change: "+8.4%",
      icon: <FaArrowUp className="text-green-500" />,
    },
    {
      title: "Total Orders",
      value: "1,240",
      change: "+3.2%",
      icon: <FaArrowUp className="text-green-500" />,
    },
    {
      title: "Cancelled Orders",
      value: "120",
      change: "-1.2%",
      icon: <FaArrowDown className="text-red-500" />,
    },
    {
      title: "New Customers",
      value: "320",
      change: "+5.9%",
      icon: <FaArrowUp className="text-green-500" />,
    },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
      <div className="text-lg font-semibold mb-1">Hi, Indi Marsela</div>
      <div className="text-sm text-gray-500 mb-4">Here’s your latest report summary.</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-4 rounded-lg shadow flex flex-col gap-2"
          >
            <div className="text-sm text-gray-500">{stat.title}</div>
            <div className="text-xl font-semibold">{stat.value}</div>
            <div className="flex items-center gap-2 text-sm">
              {stat.icon}
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Sales Chart</h2>
        <div className="w-full h-64 flex items-center justify-center text-gray-400">
          <FaChartBar className="text-6xl" />
          <span className="ml-2">Chart placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
