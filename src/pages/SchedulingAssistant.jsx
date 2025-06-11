import React from "react";
import { schedules } from "../assets/sampleSchedule"; // 

function checkConflicts(data) {
  const conflicts = [];
  const seen = new Map();

  data.forEach((item) => {
    const key = `${item.date}-${item.time}`;
    if (seen.has(key)) {
      conflicts.push([seen.get(key), item]);
    } else {
      seen.set(key, item);
    }
  });

  return conflicts;
}

const SchedulingAssistant = () => {
  const conflicts = checkConflicts(schedules);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📅 Scheduling Assistant (SA)</h2>

      <div className="grid gap-4">
        {schedules.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-4 border">
            <p><strong>Tanggal:</strong> {item.date}</p>
            <p><strong>Waktu:</strong> {item.time}</p>
            <p><strong>Event:</strong> {item.event}</p>
            <p><strong>Lokasi:</strong> {item.location}</p>
          </div>
        ))}
      </div>

      {conflicts.length > 0 && (
        <div className="mt-6 bg-red-100 p-4 rounded border border-red-400 text-red-700">
          <h3 className="font-bold">⚠️ Konflik Jadwal Terdeteksi:</h3>
          <ul className="list-disc pl-5 mt-2">
            {conflicts.map(([a, b], i) => (
              <li key={i}>
                {a.event} & {b.event} bentrok pada {a.date} pukul {a.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SchedulingAssistant;
