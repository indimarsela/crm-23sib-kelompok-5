import React, { useState } from 'react';

const initialData = [
  { email: 'shreyababulkar.sb@gmail.com', health: 8.9, deliverability: 82, blacklisted: false, active: true },
  { email: 'johnfoo@gmail.com', health: 9.2, deliverability: 70, blacklisted: false, active: true },
  { email: 'shreyababulkar.sb@gmail.com', health: 8.5, deliverability: 81, blacklisted: false, active: true },
  { email: 'raynexide@gmail.com', health: 8.3, deliverability: 42, blacklisted: true, active: false },
];

const EmailCampaignManagement = () => {
  const [mailboxes, setMailboxes] = useState(initialData);

  const toggleStatus = (index) => {
    const updated = [...mailboxes];
    updated[index].active = !updated[index].active;
    setMailboxes(updated);
  };

  const deleteMailbox = (index) => {
    const updated = mailboxes.filter((_, i) => i !== index);
    setMailboxes(updated);
  };

  return (
    <div className="p-6 bg-[#fdf6f6] min-h-screen text-[#7b241c]">
      <h1 className="text-2xl font-bold mb-4">Email Campaign Management</h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-sm font-semibold">Sent</h2>
          <p className="text-2xl font-bold">1876</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-sm font-semibold">Delivered</h2>
          <p className="text-2xl font-bold">1786</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-sm font-semibold">Landed in Inbox</h2>
          <p className="text-2xl font-bold text-green-700">94%</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-sm font-semibold">Landed in Spam</h2>
          <p className="text-2xl font-bold text-red-600">5%</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Mailbox Management</h3>
          <button className="bg-[#7b241c] hover:bg-[#922b21] text-white px-4 py-2 rounded">Add new mailbox</button>
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">Status</th>
              <th>Email address</th>
              <th>Account health</th>
              <th>Deliverability</th>
              <th>Not blacklisted</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mailboxes.map((m, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={m.active} onChange={() => toggleStatus(idx)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-checked:bg-[#7b241c] rounded-full peer peer-focus:ring-2 transition-all"></div>
                  </label>
                </td>
                <td>{m.email}</td>
                <td>{m.health}</td>
                <td>{m.deliverability}%</td>
                <td>{!m.blacklisted ? '✔️' : '❌'}</td>
                <td>
                  <button onClick={() => deleteMailbox(idx)} className="text-red-600">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-lg font-semibold mb-2">Mailbox Health</h4>
          <p className="text-3xl font-bold text-green-600">74%</p>
          <ul className="text-sm mt-2 space-y-1">
            <li>Mailbox temp.: <span className="text-orange-500">298 /day</span></li>
            <li>SPF: ✅</li>
            <li>DKIM: ✅</li>
            <li>DMARC: ✅</li>
            <li>Not blacklisted: ✅</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="text-lg font-semibold mb-2">Deliverability Score</h4>
          <div className="w-full h-24 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-3xl font-bold text-green-700">94%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCampaignManagement;
