import React, { useState } from "react";
import {
  FaUserCircle,
  FaCog,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const initialOrders = [
  {
    id: 'AA001',
    customerName: 'Rizky Firmansyah',
    packageName: 'Paket Prasmanan A',
    pax: 100,
    totalPrice: 15000000,
    orderDate: '2025-06-28 10:30',
    deliveryDate: '2025-07-15',
    deliveryTime: '12:00',
    status: 'Dalam Proses',
    paymentMethod: 'Transfer Bank',
    paymentStatus: 'Lunas',
    address: 'Jl. Melati Indah No. 10, Pekanbaru Kota, 28282',
    phone: '081234567890',
    email: 'rizky.f@email.com',
    notes: 'Mohon siapkan area khusus untuk hidangan vegetarian.',
    shipping: "Reguler",
    tracking: "204000000111122233",
    orderNumber: "SO001",
    item: 8,
  },
  {
    id: 'AA002',
    customerName: 'Siti Rahmawati',
    packageName: 'Paket Pernikahan Silver',
    pax: 300,
    totalPrice: 35000000,
    orderDate: '2025-06-25 14:15',
    deliveryDate: '2025-08-10',
    deliveryTime: '18:00',
    status: 'Menunggu Konfirmasi',
    paymentMethod: 'Transfer Bank',
    paymentStatus: 'Belum Lunas',
    address: 'Komplek Permata Hijau Blok C-5, Marpoyan Damai, 28288',
    phone: '081321098765',
    email: 'siti.r@email.com',
    notes: 'Acara malam hari, mohon persiapan diatur dengan baik.',
    shipping: "Express",
    tracking: "204000000222233344",
    orderNumber: "SO002",
    item: 2,
  },
  {
    id: 'AA003',
    orderNumber: "SO72014",
    status: "Dalam Proses",
    item: 2,
    customerName: "Kate Watson",
    shipping: "Express",
    tracking: "204000000578470914",
  },
];

// Fungsi untuk mendapatkan warna badge berdasarkan status
const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Menunggu Konfirmasi': return 'bg-blue-100 text-blue-800';
    case 'Dalam Proses': return 'bg-yellow-100 text-yellow-800';
    case 'Siap Dikirim': return 'bg-purple-100 text-purple-800';
    case 'Terkirim': return 'bg-green-100 text-green-800';
    case 'Dibatalkan': return 'bg-red-100 text-red-800';
    case 'Selesai': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-200 text-gray-800';
  }
};

const OrderManagement = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (confirmed) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

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

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Order</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaPlus /> Create order
        </button>
      </div>

      <div className="overflow-auto">
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2">ORDER ID</th>
              <th className="px-3 py-2">ORDER NUMBER</th>
              <th className="px-3 py-2">STATUS</th>
              <th className="px-3 py-2">ITEM</th>
              <th className="px-3 py-2">CUSTOMER NAME</th>
              <th className="px-3 py-2">SHIPPING SERVICE</th>
              <th className="px-3 py-2">TRACKING CODE</th>
              <th className="px-3 py-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-3 py-2">{order.id}</td>
                <td className="px-3 py-2">{order.orderNumber || "-"}</td>
                <td className="px-3 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusBadgeClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-3 py-2">{order.item || "-"}</td>
                <td className="px-3 py-2">{order.customerName || "-"}</td>
                <td className="px-3 py-2">{order.shipping || "-"}</td>
                <td className="px-3 py-2">{order.tracking || "-"}</td>
                <td className="px-3 py-2 flex gap-2">
                  <button className="text-blue-600 hover:underline">
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(order.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
