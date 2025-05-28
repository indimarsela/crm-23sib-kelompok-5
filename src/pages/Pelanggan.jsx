import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp, Pencil, Trash, Mail } from 'lucide-react';

const dummyData = [
  { id: 1, name: 'Ali', email: 'ali@mail.com', totalOrders: 5, lastOrder: '2025-03-01' },
  { id: 2, name: 'Budi', email: 'budi@mail.com', totalOrders: 12, lastOrder: '2025-04-15' },
  { id: 3, name: 'Citra', email: 'citra@mail.com', totalOrders: 3, lastOrder: '2025-01-10' },
  { id: 4, name: 'Dina', email: 'dina@mail.com', totalOrders: 9, lastOrder: '2025-05-01' },
  { id: 5, name: 'Eka', email: 'eka@mail.com', totalOrders: 7, lastOrder: '2025-04-20' },
  { id: 6, name: 'Farhan', email: 'farhan@mail.com', totalOrders: 4, lastOrder: '2025-02-15' },
  { id: 7, name: 'Gita', email: 'gita@mail.com', totalOrders: 11, lastOrder: '2025-05-10' },
  { id: 8, name: 'Hadi', email: 'hadi@mail.com', totalOrders: 2, lastOrder: '2025-01-05' },
  { id: 9, name: 'Intan', email: 'intan@mail.com', totalOrders: 6, lastOrder: '2025-03-20' },
  { id: 10, name: 'Joko', email: 'joko@mail.com', totalOrders: 1, lastOrder: '2024-12-25' },
];

const isMoreThanTwoMonths = (lastDate) => {
  const lastOrderDate = new Date(lastDate);
  const now = new Date();
  const diffMonths = (now.getFullYear() - lastOrderDate.getFullYear()) * 12 + now.getMonth() - lastOrderDate.getMonth();
  return diffMonths >= 2;
};

const Pelanggan = () => {
  const [customers, setCustomers] = useState(dummyData);
  const [sortOrder, setSortOrder] = useState(null);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', totalOrders: 0, lastOrder: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ name: '', email: '', totalOrders: 0, lastOrder: '' });

  const handleSort = (order) => {
    const sorted = [...customers].sort((a, b) =>
      order === 'asc' ? a.totalOrders - b.totalOrders : b.totalOrders - a.totalOrders
    );
    setCustomers(sorted);
    setSortOrder(order);
  };

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.lastOrder) {
      const newEntry = {
        ...newCustomer,
        id: customers.length + 1,
        totalOrders: Number(newCustomer.totalOrders),
      };
      setCustomers([...customers, newEntry]);
      setNewCustomer({ name: '', email: '', totalOrders: 0, lastOrder: '' });
    }
  };

  const handleDelete = (id) => {
    const filtered = customers.filter((cust) => cust.id !== id);
    setCustomers(filtered);
  };

  const handleEdit = (cust) => {
    setEditingId(cust.id);
    setEditingData({ name: cust.name, email: cust.email, totalOrders: cust.totalOrders, lastOrder: cust.lastOrder });
  };

  const handleSaveEdit = () => {
    const updated = customers.map((cust) =>
      cust.id === editingId ? { ...cust, ...editingData, totalOrders: Number(editingData.totalOrders) } : cust
    );
    setCustomers(updated);
    setEditingId(null);
    setEditingData({ name: '', email: '', totalOrders: 0, lastOrder: '' });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Pelanggan</h1>

      <div className="mb-6 p-4 bg-white rounded-xl shadow-md">
  <h2 className="text-lg font-semibold mb-4">Tambah Pelanggan Baru</h2>
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    <input
      type="text"
      placeholder="Nama"
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={newCustomer.name}
      onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
    />
    <input
      type="email"
      placeholder="Email"
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={newCustomer.email}
      onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
    />
    <input
      type="number"
      placeholder="Total Pembelian"
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={newCustomer.totalOrders}
      onChange={(e) => setNewCustomer({ ...newCustomer, totalOrders: e.target.value })}
    />
    <input
      type="date"
      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={newCustomer.lastOrder}
      onChange={(e) => setNewCustomer({ ...newCustomer, lastOrder: e.target.value })}
    />
    <button
      onClick={handleAddCustomer}
      className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
    >
      Tambah
    </button>
  </div>
</div>


      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => handleSort('asc')} className="icon-button">
          <ArrowDown className="w-4 h-4" />
        </button>
        <button onClick={() => handleSort('desc')} className="icon-button">
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-sm text-gray-700">
          <thead>
            <tr className="bg-blue-50 text-left text-xs uppercase tracking-wider text-blue-600">
              <th className="p-3">Nama</th>
              <th className="p-3">Email</th>
              <th className="p-3">Total Pembelian</th>
              <th className="p-3">Terakhir Pesan</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust) => (
              <tr key={cust.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  {editingId === cust.id ? (
                    <input
                      type="text"
                      className="input"
                      value={editingData.name}
                      onChange={(e) => setEditingData({ ...editingData, name: e.target.value })}
                    />
                  ) : (
                    cust.name
                  )}
                </td>
                <td className="p-3">
                  {editingId === cust.id ? (
                    <input
                      type="email"
                      className="input"
                      value={editingData.email}
                      onChange={(e) => setEditingData({ ...editingData, email: e.target.value })}
                    />
                  ) : (
                    cust.email
                  )}
                </td>
                <td className="p-3">
                  {editingId === cust.id ? (
                    <input
                      type="number"
                      className="input"
                      value={editingData.totalOrders}
                      onChange={(e) => setEditingData({ ...editingData, totalOrders: e.target.value })}
                    />
                  ) : (
                    cust.totalOrders
                  )}
                </td>
                <td className="p-3">
                  {editingId === cust.id ? (
                    <input
                      type="date"
                      className="input"
                      value={editingData.lastOrder}
                      onChange={(e) => setEditingData({ ...editingData, lastOrder: e.target.value })}
                    />
                  ) : (
                    cust.lastOrder
                  )}
                </td>
                <td className="p-3 space-x-2">
                  {editingId === cust.id ? (
                    <button
                      onClick={handleSaveEdit}
                      className="btn-success"
                    >
                      Simpan
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(cust)} className="icon-action text-blue-600">
                      <Pencil className="inline w-4 h-4" />
                    </button>
                  )}
                  <button onClick={() => handleDelete(cust.id)} className="icon-action text-red-600">
                    <Trash className="inline w-4 h-4" />
                  </button>
                  {isMoreThanTwoMonths(cust.lastOrder) && (
                    <button className="icon-action text-yellow-600">
                      <Mail className="inline w-4 h-4 mr-1" /> Follow-up
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pelanggan;