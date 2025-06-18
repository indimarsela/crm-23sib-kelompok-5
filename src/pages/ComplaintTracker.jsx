import React from "react";
import StatBox from "../components/StatBox";
import ComplaintTable from "../components/ComplaintTable";
import SatisfactionGauge from "../components/SatisfactionGauge";
import SLALimits from "../components/SLALimits";

function ComplaintTracker() {
  const agents = [
    {
      name: "Stevan",
      avatar: "https://i.pravatar.cc/150?img=12",
      department: "Customer Care",
      total: 48,
      answered: 45,
      satisfaction: 3.4,
      onDuty: true,
    },
    {
      name: "Dion",
      avatar: "https://i.pravatar.cc/150?img=33",
      department: "Technical Support",
      total: 42,
      answered: 40,
      satisfaction: 3.8,
      onDuty: false,
    },
    {
      name: "Mary",
      avatar: "https://i.pravatar.cc/150?img=47",
      department: "Escalation",
      total: 39,
      answered: 35,
      satisfaction: 3.2,
      onDuty: true,
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#800000] mb-8 flex items-center gap-2">
        📊 Complaint Tracker Dashboard
      </h1>

      {/* Statistik Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <StatBox title="📞 Total Calls" value="357" color="border-orange-500" />
        <StatBox
          title="⚡ Avg. Answer Speed (sec)"
          value="55.4"
          color="border-yellow-500"
        />
        <StatBox
          title="📉 Abandon Rate"
          value="17.5%"
          color="border-red-500"
        />
        <StatBox
          title="📈 Calls / Minute"
          value="0.095"
          color="border-green-500"
        />
      </div>

      {/* Agent Performance Table */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#800000]">
            👩‍💻 Agent Performance
          </h2>
          <span className="text-sm text-gray-500">Updated 5 mins ago</span>
        </div>
        <ComplaintTable data={agents} />
      </div>

      {/* Kepuasan dan SLA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#800000] mb-2">
            😊 Customer Satisfaction
          </h2>
          <p className="text-gray-500 text-sm mb-4">Average from last 100 responses</p>
          <SatisfactionGauge score={3.34} />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#800000] mb-2">
            ⏱️ SLA Tracking
          </h2>
          <p className="text-gray-500 text-sm mb-4">SLA compliance overview</p>
          <SLALimits fastPercent={40.9} lowScoreCount={126} />
        </div>
      </div>
    </div>
  );
}

export default ComplaintTracker;
