import React from "react";
import {
  FaSignOutAlt,
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    "Dashboard",
    "Product",
    "Order Management",
    "Lead Management",
    "Account Management",
    "Trigger Marketing",
    "Customer Segmentation",
    "Campaign Management",
    "Email Campaign Management",
    "Self Service",
    "Complaint Tracker",
    "Delivery Scheduler",
    "Auto Email Responder",
  ];

  return (
    <div className="w-64 h-screen bg-white border-r p-4">
      <div className="text-xl font-bold text-red-600 mb-8">
        <span className="text-2xl">A.A CATERING</span>
        <p className="text-xs text-gray-500">Always Ahead Catering</p>
      </div>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item} className="text-gray-700 hover:text-red-500 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 text-red-600 cursor-pointer">
        <FaSignOutAlt className="inline-block mr-2" /> Log out
      </div>
    </div>
  );
};

const OrderManagement = () => {
  const orders = [
    { id: 1, orderId: "98272", orderNumber: "98277424", status: "New order", color: "blue-500", item: 1, name: "Cody Fisher", shipping: "Standard", tracking: "9400100000000000000000" },
    { id: 2, orderId: "98273", orderNumber: "98277434", status: "Inproduction", color: "yellow-500", item: 2, name: "Kristin Watson", shipping: "Priority", tracking: "9400100000000000000001" },
    { id: 3, orderId: "98274", orderNumber: "98277444", status: "Shipped", color: "green-500", item: 12, name: "Esther Howard", shipping: "Express", tracking: "9400100000000000000002" },
    { id: 4, orderId: "98275", orderNumber: "98277454", status: "Cancelled", color: "pink-500", item: 12, name: "Jenny Wilson", shipping: "Express", tracking: "9400100000000000000003" },
    { id: 5, orderId: "98276", orderNumber: "98277464", status: "Rejected", color: "red-500", item: 12, name: "John Smith", shipping: "Express", tracking: "9400100000000000000004" },
    { id: 6, orderId: "98277", orderNumber: "98277474", status: "Draft", color: "gray-300", item: 4, name: "Cameron Williamson", shipping: "Express", tracking: "9400100000000000000005" },
    { id: 7, orderId: "98278", orderNumber: "98277484", status: "Draft", color: "gray-300", item: 4, name: "Cameron Williamson", shipping: "Express", tracking: "9400100000000000000006" },
    { id: 8, orderId: "98279", orderNumber: "98277494", status: "Draft", color: "gray-300", item: 4, name: "Cameron Williamson", shipping: "Priority", tracking: "9400100000000000000007" },
    { id: 9, orderId: "98280", orderNumber: "98277504", status: "Draft", color: "gray-300", item: 41, name: "Cameron Williamson", shipping: "Express", tracking: "9400100000000000000008" },
    { id: 10, orderId: "98281", orderNumber: "98277514", status: "Draft", color: "gray-300", item: 44, name: "Cameron Williamson", shipping: "Express", tracking: "9400100000000000000009" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <div className="text-lg font-semibold mb-1">Hi, Indi Marsela</div>
        <div className="text-sm text-gray-500 mb-4">It’s looking like a slow day.</div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Order</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded">+ Create order</button>
        </div>

        <div className="bg-white rounded shadow p-4 overflow-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-4">ORDER ID</th>
                <th className="py-2 px-4">ORDER NUMBER</th>
                <th className="py-2 px-4">STATUS</th>
                <th className="py-2 px-4">ITEM</th>
                <th className="py-2 px-4">CUSTOMER NAME</th>
                <th className="py-2 px-4">SHIPPING SERVICE</th>
                <th className="py-2 px-4">TRACKING CODE</th>
                <th className="py-2 px-4">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{order.orderId}</td>
                  <td className="py-2 px-4">{order.orderNumber}</td>
                  <td className="py-2 px-4">
                    <span className={`bg-${order.color} text-white px-2 py-1 rounded text-xs`}>{order.status}</span>
                  </td>
                  <td className="py-2 px-4">{order.item}</td>
                  <td className="py-2 px-4">{order.name}</td>
                  <td className="py-2 px-4">{order.shipping}</td>
                  <td className="py-2 px-4">{order.tracking}</td>
                  <td className="py-2 px-4 text-blue-600 cursor-pointer">
                    <FaEdit />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4 text-sm">
            <span>Showing 1 to 10 of 97 results</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
                <button
                  key={page}
                  className="w-8 h-8 rounded border text-gray-700 hover:bg-red-500 hover:text-white"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;