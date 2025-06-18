import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Perorangan", value: 60 },
  { name: "Instansi", value: 25 },
  { name: "Vendor Event", value: 15 },
];

const COLORS = ["#6366f1", "#a855f7", "#ec4899"];

const barData = [
  { month: "Jan", value: 100000 },
  { month: "Feb", value: 200000 },
  { month: "Mar", value: 250000 },
  { month: "Apr", value: 220000 },
  { month: "May", value: 270000 },
  { month: "Jun", value: 230000 },
  { month: "Jul", value: 290000 },
  { month: "Aug", value: 310000 },
  { month: "Sep", value: 330000 },
  { month: "Oct", value: 350000 },
  { month: "Nov", value: 300000 },
  { month: "Dec", value: 320000 },
];

const trafficSources = [
  { source: "Google Ads", visitors: 1200 },
  { source: "Facebook", visitors: 980 },
  { source: "Instagram", visitors: 1020 },
  { source: "Website", visitors: 850 },
  { source: "iOS App", visitors: 600 },
  { source: "Android App", visitors: 700 },
];

const locations = [
  { location: "Jakarta", users: 800 },
  { location: "Bandung", users: 600 },
  { location: "Surabaya", users: 400 },
  { location: "Medan", users: 300 },
  { location: "Yogyakarta", users: 500 },
  { location: "Makassar", users: 250 },
];

const CustomerSegmentation = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Customer Segmentation Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Segmentasi Pelanggan</h3>
          <PieChart width={250} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Wishlist</h3>
          <p className="text-4xl font-bold text-purple-600">500</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Transaksi</h3>
          <p className="text-4xl font-bold text-purple-600">250</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Customer Acquisition per Bulan</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Sumber Trafik</h3>
          <ul className="space-y-2">
            {trafficSources.map((src, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{src.source}</span>
                <span className="font-bold text-purple-600">{src.visitors}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Lokasi Pelanggan</h3>
          <ul className="space-y-2">
            {locations.map((loc, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{loc.location}</span>
                <span className="font-bold text-purple-600">{loc.users}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentation;
