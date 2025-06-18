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
    id: 1,
    orderId: "58767",
    orderNumber: "SO72012",
    status: "New",
    item: 1,
    customer: "Cody Fisher",
    shipping: "Standard",
    tracking: "204000000578470913",
  },
  {
    id: 2,
    orderId: "58765",
    orderNumber: "SO72014",
    status: "Inprogress",
    item: 2,
    customer: "Kate Watson",
    shipping: "Express",
    tracking: "204000000578470914",
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

const statusColor = {
  New: "bg-blue-100 text-blue-800",
  Inprogress: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
  Rejected: "bg-pink-100 text-pink-800",
  Draft: "bg-gray-100 text-gray-800",
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
                <td className="px-3 py-2">{order.orderId}</td>
                <td className="px-3 py-2">{order.orderNumber}</td>
                <td className="px-3 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColor[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-3 py-2">{order.item}</td>
                <td className="px-3 py-2">{order.customer}</td>
                <td className="px-3 py-2">{order.shipping}</td>
                <td className="px-3 py-2">{order.tracking}</td>
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
