import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react"; // Gunakan ikon dari lucide-react
import { schedules as initialSchedules } from "../assets/sampleSchedule";

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
  const [schedules, setSchedules] = useState(initialSchedules);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ date: "", time: "", event: "", location: "" });

  const conflicts = checkConflicts(schedules);

  const handleDelete = (id) => {
    const updated = schedules.filter((item) => item.id !== id);
    setSchedules(updated);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditData({ ...item });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    const updated = schedules.map((item) =>
      item.id === editingId ? { ...item, ...editData } : item
    );
    setSchedules(updated);
    setEditingId(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#800000]">📅 Scheduling Assistant (SA)</h2>

      <div className="grid gap-4">
        {schedules.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-4 border">
            {editingId === item.id ? (
              <div className="space-y-2">
                <input
                  name="date"
                  value={editData.date}
                  onChange={handleEditChange}
                  className="border p-2 w-full"
                />
                <input
                  name="time"
                  value={editData.time}
                  onChange={handleEditChange}
                  className="border p-2 w-full"
                />
                <input
                  name="event"
                  value={editData.event}
                  onChange={handleEditChange}
                  className="border p-2 w-full"
                />
                <input
                  name="location"
                  value={editData.location}
                  onChange={handleEditChange}
                  className="border p-2 w-full"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-[#800000] text-white px-4 py-2 rounded hover:bg-[#990000]"
                >
                  Simpan
                </button>
              </div>
            ) : (
              <>
                <p><strong>Tanggal:</strong> {item.date}</p>
                <p><strong>Waktu:</strong> {item.time}</p>
                <p><strong>Event:</strong> {item.event}</p>
                <p><strong>Lokasi:</strong> {item.location}</p>

                <div className="mt-3 flex gap-3">
                  <Edit
                    size={20}
                    className="text-[#800000] cursor-pointer hover:text-[#990000]"
                    onClick={() => handleEdit(item)}
                  />
                  <Trash2
                    size={20}
                    className="text-[#b04a4a] cursor-pointer hover:text-[#a03a3a]"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </>
            )}
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
