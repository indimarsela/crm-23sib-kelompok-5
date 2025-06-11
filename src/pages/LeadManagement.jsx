import { useState } from 'react';

const LeadManagement = () => {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: '', contact: '', source: '', status: 'New' });
  const [editIndex, setEditIndex] = useState(null);

  const sumberList = ['Instagram', 'WhatsApp', 'Event Offline', 'Website', 'Rekomendasi'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateLead = () => {
    if (!form.name || !form.contact || !form.source) return;

    if (editIndex !== null) {
      const updatedLeads = leads.map((lead, i) =>
        i === editIndex ? form : lead
      );
      setLeads(updatedLeads);
      setEditIndex(null);
    } else {
      setLeads([...leads, form]);
    }

    setForm({ name: '', contact: '', source: '', status: 'New' });
  };

  const handleEdit = (index) => {
    setForm(leads[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedLeads = leads.filter((_, i) => i !== index);
    setLeads(updatedLeads);
    if (editIndex === index) {
      setEditIndex(null);
      setForm({ name: '', contact: '', source: '', status: 'New' });
    }
  };

  return (
    <div className="p-6 min-h-screen bg-[#FFF8F8] text-gray-800">
      <h2 className="text-2xl font-bold text-[#9B1C1C] mb-6">Lead Management</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            name="name"
            placeholder="Nama Pelanggan"
            value={form.name}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <input
            name="contact"
            placeholder="Kontak (HP/Email)"
            value={form.contact}
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <select
            name="source"
            value={form.source}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="">Pilih Sumber</option>
            {sumberList.map((sumber, idx) => (
              <option key={idx} value={sumber}>{sumber}</option>
            ))}
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="New">New</option>
            <option value="Follow Up">Follow Up</option>
            <option value="Closed">Closed</option>
            <option value="Declined">Declined</option>
          </select>
        </div>

        <button
          onClick={handleAddOrUpdateLead}
          className="mt-4 px-4 py-2 bg-[#9B1C1C] text-white rounded hover:bg-red-800 transition"
        >
          {editIndex !== null ? 'Update Lead' : 'Tambah Lead'}
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-[#9B1C1C] text-white">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Nama Pelanggan</th>
              <th className="px-4 py-2 text-left">Kontak</th>
              <th className="px-4 py-2 text-left">Sumber</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{lead.name}</td>
                <td className="px-4 py-2">{lead.contact}</td>
                <td className="px-4 py-2">{lead.source}</td>
                <td className="px-4 py-2">{lead.status}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  Belum ada leads
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadManagement;
