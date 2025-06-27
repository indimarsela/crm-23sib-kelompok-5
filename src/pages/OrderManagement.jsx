import React, { useState } from "react";

// SVG Icon Components to replace react-icons
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
  </svg>
);


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
];

const statusColor = {
  New: "bg-blue-100 text-blue-800",
  Inprogress: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
  Rejected: "bg-pink-100 text-pink-800",
  Draft: "bg-gray-100 text-gray-800",
};

// Style object for the modal overlay
const modalOverlayStyle = {
  backgroundColor: 'rgba(17, 24, 39, 0.4)', // This is a semi-transparent dark gray
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)', // For Safari compatibility
};


const OrderManagement = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({
    id: null,
    orderId: "",
    orderNumber: "",
    status: "New",
    item: 1,
    customer: "",
    shipping: "Standard",
    tracking: "",
  });

  const handleDelete = (id) => {
    if (true) { 
      setOrders(orders.filter((order) => order.id !== id));
    }
  };
  
  const resetCurrentOrder = () => {
    setCurrentOrder({
        id: null,
        orderId: "",
        orderNumber: "",
        status: "New",
        item: 1,
        customer: "",
        shipping: "Standard",
        tracking: "",
      });
  }

  const handleCreate = () => {
    const newId = orders.length ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    const newOrderEntry = { ...currentOrder, id: newId };
    setOrders([...orders, newOrderEntry]);
    setShowModal(false);
    resetCurrentOrder();
  };

  const handleEdit = (id) => {
    const orderToEdit = orders.find((order) => order.id === id);
    setCurrentOrder(orderToEdit);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    setOrders(orders.map(order => order.id === currentOrder.id ? currentOrder : order));
    setShowModal(false);
    setIsEditing(false);
    resetCurrentOrder();
  };
  
  const openCreateModal = () => {
    resetCurrentOrder();
    setIsEditing(false);
    setShowModal(true);
  }
  
  const handleCancel = () => {
    setShowModal(false);
    setIsEditing(false);
    resetCurrentOrder();
  }

  return (
    <div className="p-6 bg-white min-h-screen font-sans">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-[#a52a2a]">Hi, Indi Marsela</h1>
        <p className="text-sm text-gray-500">It’s looking like a slow day.</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#a52a2a]">Order</h2>
        <button
          onClick={openCreateModal}
          className="bg-[#a52a2a] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#922b2b] transition-colors duration-300 shadow-md"
        >
          <PlusIcon /> Create order
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#fdf3f3] text-[#a52a2a]">
            <tr>
              <th className="px-4 py-3 font-semibold">ORDER ID</th>
              <th className="px-4 py-3 font-semibold">ORDER NUMBER</th>
              <th className="px-4 py-3 font-semibold">STATUS</th>
              <th className="px-4 py-3 font-semibold">ITEM</th>
              <th className="px-4 py-3 font-semibold">CUSTOMER NAME</th>
              <th className="px-4 py-3 font-semibold">SHIPPING SERVICE</th>
              <th className="px-4 py-3 font-semibold">TRACKING CODE</th>
              <th className="px-4 py-3 font-semibold text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">{order.orderId}</td>
                <td className="px-4 py-3 text-gray-700">{order.orderNumber}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700">{order.item}</td>
                <td className="px-4 py-3 text-gray-700">{order.customer}</td>
                <td className="px-4 py-3 text-gray-700">{order.shipping}</td>
                <td className="px-4 py-3 text-gray-700">{order.tracking}</td>
                <td className="px-4 py-3 flex gap-3 justify-center">
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    onClick={() => handleEdit(order.id)}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 transition-colors"
                    onClick={() => handleDelete(order.id)}
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={modalOverlayStyle}
        >
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-[#a52a2a]">
              {isEditing ? "Edit Order" : "Create New Order"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Order ID"
                value={currentOrder.orderId}
                onChange={(e) => setCurrentOrder({ ...currentOrder, orderId: e.target.value })}
                className="p-2 border rounded-md focus:ring-2 focus:ring-[#a52a2a] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Order Number"
                value={currentOrder.orderNumber}
                onChange={(e) => setCurrentOrder({ ...currentOrder, orderNumber: e.target.value })}
                className="p-2 border rounded-md focus:ring-2 focus:ring-[#a52a2a] focus:border-transparent"
              />
              <select
                value={currentOrder.status}
                onChange={(e) => setCurrentOrder({ ...currentOrder, status: e.target.value })}
                className="p-2 border rounded-md focus:ring-2 focus:ring-[#a52a2a] focus:border-transparent"
              >
                {Object.keys(statusColor).map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Item"
                value={currentOrder.item}
                onChange={(e) => setCurrentOrder({ ...currentOrder, item: parseInt(e.target.value) || 0 })}
                className="p-2 border rounded-md focus:ring-2 focus:ring-[#a52a2a] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Customer Name"
                value={currentOrder.customer}
                onChange={(e) => setCurrentOrder({ ...currentOrder, customer: e.target.value })}
                className="p-2 border rounded-md sm:col-span-2 focus:ring-2 focus:ring-[#a52a2a] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Shipping Service"
                value={currentOrder.shipping}
                onChange={(e) => setCurrentOrder({ ...currentOrder, shipping: e.target.value })}
                className="p-2 border rounded-md sm:col-span-2 focus:ring-2 focus:ring-[#a52a2a] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Tracking Code"
                value={currentOrder.tracking}
                onChange={(e) => setCurrentOrder({ ...currentOrder, tracking: e.target.value })}
                className="p-2 border rounded-md sm:col-span-2 focus:ring-2 focus:ring-[#a52a2a] focus:border-transparent"
              />
            </div>

            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={isEditing ? handleSaveEdit : handleCreate}
                className="bg-[#a52a2a] text-white px-4 py-2 rounded-lg hover:bg-[#922b2b] transition-colors"
              >
                {isEditing ? "Save" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
