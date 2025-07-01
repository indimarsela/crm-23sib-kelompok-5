import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaEllipsisV, FaEye, FaEdit, FaTimes, FaCheckCircle,
  FaExclamationCircle, FaPrint, FaEnvelope, FaPhone, FaChevronLeft, FaPlus, FaArchive, FaTrash, FaChevronRight // Pastikan FaEllipsisV ada di sini
} from 'react-icons/fa';
// --- DATA DUMMY UNTUK PESANAN ---
const dummyOrders = [
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
    items: [
      { name: 'Nasi Putih', qty: 100, unitPrice: 5000, subtotal: 500000 },
      { name: 'Ayam Bakar Madu', qty: 100, unitPrice: 35000, subtotal: 3500000 },
      { name: 'Sapi Lada Hitam', qty: 100, unitPrice: 40000, subtotal: 4000000 },
      { name: 'Capcay Kuah Seafood', qty: 100, unitPrice: 25000, subtotal: 2500000 },
      { name: 'Sup Krim Jagung', qty: 100, unitPrice: 15000, subtotal: 1500000 },
      { name: 'Aneka Puding', qty: 100, unitPrice: 10000, subtotal: 1000000 },
      { name: 'Air Mineral Botol', qty: 100, unitPrice: 2000, subtotal: 200000 },
      { name: 'Buah Potong Segar', qty: 100, unitPrice: 18000, subtotal: 1800000 },
    ],
    log: [
      { action: 'Pesanan Dibuat', by: 'Pelanggan', timestamp: '2025-06-28 10:30' },
      { action: 'Status Diubah ke Dalam Proses', by: 'Admin A', timestamp: '2025-06-28 11:00' },
    ]
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
    items: [
      { name: 'Buffet Utama', qty: 1, unitPrice: 20000000, subtotal: 20000000 },
      { name: 'Pilihan Lauk Utama (Ayam Bakar, Daging Rendang)', qty: 300, unitPrice: 50000, subtotal: 15000000 },
    ],
    log: [
      { action: 'Pesanan Dibuat', by: 'Pelanggan', timestamp: '2025-06-25 14:15' },
    ]
  },
  {
    id: 'AA003',
    customerName: 'Budi Santoso',
    packageName: 'Nasi Kotak Harian',
    pax: 50,
    totalPrice: 1250000,
    orderDate: '2025-06-29 09:00',
    deliveryDate: '2025-07-01',
    deliveryTime: '08:00',
    status: 'Siap Dikirim',
    paymentMethod: 'Tunai',
    paymentStatus: 'Lunas',
    address: 'Kantor PT Jaya Abadi, Jl. Sudirman No. 123, Sukajadi, 28121',
    phone: '085678901234',
    email: 'budi.s@email.com',
    notes: 'Kirim ke meja resepsionis.',
    items: [
      { name: 'Nasi Ayam Geprek', qty: 50, unitPrice: 25000, subtotal: 1250000 },
    ],
    log: [
      { action: 'Pesanan Dibuat', by: 'Pelanggan', timestamp: '2025-06-29 09:00' },
      { action: 'Status Diubah ke Dalam Proses', by: 'Admin B', timestamp: '2025-06-29 09:30' },
      { action: 'Status Diubah ke Siap Dikirim', by: 'Admin B', timestamp: '2025-06-30 15:00' },
    ]
  },
  {
    id: 'AA004',
    customerName: 'Dewi Lestari',
    packageName: 'Paket Coffee Break',
    pax: 30,
    totalPrice: 750000,
    orderDate: '2025-06-20 11:00',
    deliveryDate: '2025-06-27',
    deliveryTime: '09:00',
    status: 'Terkirim',
    paymentMethod: 'Transfer Bank',
    paymentStatus: 'Lunas',
    address: 'Gedung Serbaguna Kota, Jl. Arifin Ahmad No. 50, Payung Sekaki, 28292',
    phone: '087812345678',
    email: 'dewi.l@email.com',
    notes: '-',
    items: [
      { name: 'Coffee Break Paket A', qty: 30, unitPrice: 25000, subtotal: 750000 },
    ],
    log: [
      { action: 'Pesanan Dibuat', by: 'Pelanggan', timestamp: '2025-06-20 11:00' },
      { action: 'Status Diubah ke Dalam Proses', by: 'Admin C', timestamp: '2025-06-20 11:30' },
      { action: 'Status Diubah ke Siap Dikirim', by: 'Admin C', timestamp: '2025-06-26 10:00' },
      { action: 'Status Diubah ke Terkirim', by: 'Kurir AA', timestamp: '2025-06-27 09:15' },
      { action: 'Status Diubah ke Selesai', by: 'Admin C', timestamp: '2025-06-27 10:00' },
    ]
  },
  {
    id: 'AA005',
    customerName: 'Eko Prasetyo',
    packageName: 'Paket Buffet Ultah',
    pax: 50,
    totalPrice: 7500000,
    orderDate: '2025-06-15 16:45',
    deliveryDate: '2025-07-05',
    deliveryTime: '19:00',
    status: 'Dibatalkan',
    paymentMethod: 'Transfer Bank',
    paymentStatus: 'Belum Lunas',
    address: 'Jl. Mangga No. 22, Tenayan Raya, 28287',
    phone: '081198765432',
    email: 'eko.p@email.com',
    notes: 'Dibatalkan karena perubahan tanggal acara.',
    items: [
      { name: 'Paket Buffet Ultah Anak', qty: 50, unitPrice: 150000, subtotal: 7500000 },
    ],
    log: [
      { action: 'Pesanan Dibuat', by: 'Pelanggan', timestamp: '2025-06-15 16:45' },
      { action: 'Status Diubah ke Dibatalkan', by: 'Admin B', timestamp: '2025-06-18 10:00' },
    ]
  },
];

const ORDER_STATUSES = [
  'Menunggu Konfirmasi',
  'Dalam Proses',
  'Siap Dikirim',
  'Terkirim',
  'Dibatalkan',
  'Selesai'
];

// Helper untuk format harga IDR
const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

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
  const [view, setView] = useState('list'); // 'list', 'detail', 'add', 'edit'
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(dummyOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [openDropdownId, setOpenDropdownId] = useState(null); // State untuk dropdown aksi di tabel
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(null); // State untuk submenu Ubah Status
  const dropdownRef = useRef(null); // Ref untuk menutup dropdown saat klik di luar

  // Efek untuk menutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
        setIsSubMenuOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.packageName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'Semua' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setView('detail');
    setOpenDropdownId(null); // Tutup dropdown jika ada
    setIsSubMenuOpen(null);
  };

  const handleAddOrderClick = () => {
    setView('add');
    setSelectedOrder(null); // Pastikan tidak ada order yang terpilih saat menambah baru
  };

  const handleEditOrderClick = (order) => {
    setSelectedOrder(order);
    setView('edit');
    setOpenDropdownId(null);
    setIsSubMenuOpen(null);
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedOrder(null);
  };

  const handleChangeStatus = (orderId, newStatus) => {
    setOrders(prevOrders => prevOrders.map(order =>
      order.id === orderId
        ? {
            ...order,
            status: newStatus,
            log: [...order.log, { action: `Status Diubah ke ${newStatus}`, by: 'Admin', timestamp: new Date().toLocaleString('id-ID', { hour12: false }) }]
          }
        : order
    ));
    setOpenDropdownId(null); // Tutup dropdown setelah aksi
    setIsSubMenuOpen(null);
  };

  const handleArchiveOrder = (orderId) => {
    if (window.confirm(`Apakah Anda yakin ingin mengarsipkan pesanan ${orderId} (set status menjadi 'Selesai')?`)) {
      handleChangeStatus(orderId, 'Selesai');
    }
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus pesanan ${orderId}? Tindakan ini tidak dapat dibatalkan.`)) {
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
      if (selectedOrder && selectedOrder.id === orderId) {
        handleBackToList(); // Kembali ke daftar jika order yang dihapus sedang dilihat
      }
      setOpenDropdownId(null); // Tutup dropdown setelah aksi
      setIsSubMenuOpen(null);
    }
  };

  // --- KOMPONEN FORM TAMBAH/EDIT PESANAN BARU ---
  const OrderForm = ({ orderToEdit, onSave, onCancel }) => {
    const isEditing = !!orderToEdit;
    const [formData, setFormData] = useState(orderToEdit || {
      id: '',
      customerName: '',
      packageName: '',
      pax: '',
      totalPrice: '',
      orderDate: '',
      deliveryDate: '',
      deliveryTime: '',
      status: 'Menunggu Konfirmasi',
      paymentMethod: 'Transfer Bank',
      paymentStatus: 'Belum Lunas',
      address: '',
      phone: '',
      email: '',
      notes: '',
      items: [{ name: '', qty: '', unitPrice: '' }],
      log: [],
    });

    // Generate ID baru untuk pesanan baru
    useEffect(() => {
      if (!isEditing && !formData.id) {
        const newIdNum = orders.length > 0
          ? Math.max(...orders.map(o => parseInt(o.id.replace('AA', '')))) + 1
          : 1;
        const newId = `AA${String(newIdNum).padStart(3, '0')}`;
        setFormData(prev => ({ ...prev, id: newId, orderDate: new Date().toLocaleString('id-ID', { hour12: false }) }));
      }
    }, [isEditing, orders, formData.id]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleItemChange = (index, e) => {
      const { name, value } = e.target;
      const newItems = formData.items.map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        }
        return item;
      });

      // Hitung ulang subtotal dan total harga
      const updatedItems = newItems.map(item => {
        const qty = parseFloat(item.qty) || 0;
        const unitPrice = parseFloat(item.unitPrice) || 0;
        return { ...item, subtotal: qty * unitPrice };
      });
      const newTotalPrice = updatedItems.reduce((sum, item) => sum + item.subtotal, 0);

      setFormData({ ...formData, items: updatedItems, totalPrice: newTotalPrice });
    };

    const handleAddItem = () => {
      setFormData({
        ...formData,
        items: [...formData.items, { name: '', qty: '', unitPrice: '', subtotal: 0 }]
      });
    };

    const handleRemoveItem = (index) => {
      const newItems = formData.items.filter((_, i) => i !== index);
      const newTotalPrice = newItems.reduce((sum, item) => sum + item.subtotal, 0);
      setFormData({ ...formData, items: newItems, totalPrice: newTotalPrice });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Validasi sederhana
      if (!formData.customerName || !formData.packageName || !formData.deliveryDate || formData.pax <= 0) {
        alert('Mohon lengkapi semua data penting (Nama Pelanggan, Nama Paket, Tanggal Pengiriman, Jumlah Orang).');
        return;
      }

      const finalData = { ...formData };
      if (!isEditing) {
        finalData.log.push({ action: 'Pesanan Dibuat', by: 'Admin', timestamp: new Date().toLocaleString('id-ID', { hour12: false }) });
      } else {
        finalData.log.push({ action: 'Pesanan Diperbarui', by: 'Admin', timestamp: new Date().toLocaleString('id-ID', { hour12: false }) });
      }

      onSave(finalData);
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isEditing ? `Edit Pesanan #${formData.id}` : 'Tambah Pesanan Baru'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">Nama Pelanggan <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="customerName"
                id="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="packageName" className="block text-sm font-medium text-gray-700 mb-1">Nama Paket/Menu <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="packageName"
                id="packageName"
                value={formData.packageName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="pax" className="block text-sm font-medium text-gray-700 mb-1">Jumlah Orang/Porsi <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="pax"
                id="pax"
                value={formData.pax}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                min="1"
                required
              />
            </div>
            <div>
              <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pengiriman <span className="text-red-500">*</span></label>
              <input
                type="date"
                name="deliveryDate"
                id="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-1">Waktu Pengiriman</label>
              <input
                type="time"
                name="deliveryTime"
                id="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status Pesanan</label>
              <select
                name="status"
                id="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              >
                {ORDER_STATUSES.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Metode Pembayaran</label>
              <input
                type="text"
                name="paymentMethod"
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700 mb-1">Status Pembayaran</label>
              <select
                name="paymentStatus"
                id="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              >
                <option value="Lunas">Lunas</option>
                <option value="Belum Lunas">Belum Lunas</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Alamat Pengiriman</label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="2"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              ></textarea>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Catatan Pelanggan</label>
              <textarea
                name="notes"
                id="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="2"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
              ></textarea>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Detail Item Pesanan</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-3 border border-gray-200 rounded-md bg-gray-50 items-end">
              <div>
                <label htmlFor={`itemName-${index}`} className="block text-xs font-medium text-gray-700 mb-1">Nama Item</label>
                <input
                  type="text"
                  name="name"
                  id={`itemName-${index}`}
                  value={item.name}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                  placeholder="Ex: Nasi Putih"
                />
              </div>
              <div>
                <label htmlFor={`itemQty-${index}`} className="block text-xs font-medium text-gray-700 mb-1">Jumlah</label>
                <input
                  type="number"
                  name="qty"
                  id={`itemQty-${index}`}
                  value={item.qty}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                  min="1"
                  placeholder="Ex: 100"
                />
              </div>
              <div>
                <label htmlFor={`itemUnitPrice-${index}`} className="block text-xs font-medium text-gray-700 mb-1">Harga Satuan</label>
                <input
                  type="number"
                  name="unitPrice"
                  id={`itemUnitPrice-${index}`}
                  value={item.unitPrice}
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm"
                  min="0"
                  step="1000"
                  placeholder="Ex: 5000"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-800">Subtotal: {formatRupiah(item.subtotal || 0)}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors text-sm"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddItem}
            className="mt-2 mb-6 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm flex items-center"
          >
            <FaPlus className="mr-2" /> Tambah Item
          </button>

          <div className="text-right text-lg font-bold text-gray-900 mb-6">
            Total Harga Pesanan: {formatRupiah(formData.totalPrice || 0)}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors text-base"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors text-base"
            >
              {isEditing ? 'Simpan Perubahan' : 'Tambah Pesanan'}
            </button>
          </div>
        </form>
      </div>
    );
  };

  // --- RENDERING UTAMA ---
  if (view === 'detail' && selectedOrder) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 font-sans">
        <button
          onClick={handleBackToList}
          className="mb-6 flex items-center text-red-700 hover:text-red-800 transition-colors text-base"
        >
          <FaChevronLeft className="mr-2" /> Kembali ke Daftar Pesanan
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Detail Pesanan #{selectedOrder.id}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Ringkasan Pesanan */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Total Harga</p>
                <p className="text-lg font-bold text-gray-900">{formatRupiah(selectedOrder.totalPrice)}</p>
              </div>
              <div>
                <p className="text-gray-500">Status Pesanan</p>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadgeClass(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </span>
              </div>
              <div>
                <p className="text-gray-500">Metode Pembayaran</p>
                <p className="text-base text-gray-900">{selectedOrder.paymentMethod}</p>
              </div>
              <div>
                <p className="text-gray-500">Status Pembayaran</p>
                <p className={`text-base font-semibold ${selectedOrder.paymentStatus === 'Lunas' ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedOrder.paymentStatus}
                </p>
              </div>
            </div>
          </div>

          {/* Informasi Pelanggan */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Informasi Pelanggan</h2>
            <p className="text-sm text-gray-500">Nama Pelanggan</p>
            <p className="text-base font-medium text-gray-900 mb-2">{selectedOrder.customerName}</p>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-base text-gray-900 mb-2">{selectedOrder.email}</p>
            <p className="text-sm text-gray-500">Nomor Telepon</p>
            <p className="text-base text-gray-900 mb-2">{selectedOrder.phone}</p>
            <p className="text-sm text-gray-500">Alamat Pengiriman</p>
            <p className="text-base text-gray-900 mb-2">{selectedOrder.address}</p>
            <p className="text-sm text-gray-500">Catatan dari Pelanggan</p>
            <p className="text-base text-gray-900 italic">{selectedOrder.notes || '-'}</p>
          </div>

          {/* Detail Menu/Item Pesanan */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md lg:col-span-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Detail Menu Pesanan</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Item/Menu</th>
                    <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah/Porsi</th>
                    <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga Satuan</th>
                    <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedOrder.items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">{item.qty}</td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">{formatRupiah(item.unitPrice)}</td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">{formatRupiah(item.subtotal)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3" className="px-4 py-3 sm:px-6 sm:py-4 text-right text-base font-bold text-gray-900">Total Keseluruhan</td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-base font-bold text-gray-900">{formatRupiah(selectedOrder.totalPrice)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Log Aktivitas Pesanan */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md lg:col-span-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Riwayat Aktivitas</h2>
            <ul className="space-y-2">
              {selectedOrder.log.map((entry, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="font-semibold">{entry.timestamp}:</span> {entry.action} oleh <span className="font-medium">{entry.by}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Catatan Internal Admin (Area Input) */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md lg:col-span-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Catatan Internal Admin</h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
              rows="4"
              placeholder="Tambahkan catatan penting untuk pesanan ini..."
            ></textarea>
            <button className="mt-3 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm">
              Simpan Catatan
            </button>
          </div>

          {/* Aksi Cepat */}
          <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md lg:col-span-3 flex flex-wrap justify-end gap-3 sm:gap-4">
            <button
              onClick={() => window.print()}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors flex items-center text-sm"
            >
              <FaPrint className="mr-2" /> Cetak Faktur
            </button>
            <button
              onClick={() => alert(`Mengirim notifikasi untuk pesanan ${selectedOrder.id} (${selectedOrder.email})`)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center text-sm"
            >
              <FaEnvelope className="mr-2" /> Kirim Notifikasi
            </button>
            <a href={`tel:${selectedOrder.phone}`} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center text-sm">
              <FaPhone className="mr-2" /> Hubungi Pelanggan
            </a>
            <button
              onClick={() => handleEditOrderClick(selectedOrder)}
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors flex items-center text-sm"
            >
              <FaEdit className="mr-2" /> Edit Pesanan
            </button>
            <button
              onClick={() => handleDeleteOrder(selectedOrder.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center text-sm"
            >
              <FaTrash className="mr-2" /> Hapus Pesanan
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Tampilan Form Tambah/Edit Pesanan ---
  if (view === 'add' || view === 'edit') {
    const handleSaveOrder = (newOrderData) => {
      if (view === 'add') {
        // Cek duplikasi ID
        if (orders.some(order => order.id === newOrderData.id)) {
          alert('ID Pesanan sudah ada. Mohon coba lagi atau gunakan ID yang berbeda.');
          return;
        }
        setOrders(prevOrders => [...prevOrders, newOrderData]);
        alert(`Pesanan ${newOrderData.id} berhasil ditambahkan!`);
      } else { // view === 'edit'
        setOrders(prevOrders => prevOrders.map(order =>
          order.id === newOrderData.id ? newOrderData : order
        ));
        alert(`Pesanan ${newOrderData.id} berhasil diperbarui!`);
      }
      handleBackToList();
    };

    return (
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 font-sans">
        <button
          onClick={handleBackToList}
          className="mb-6 flex items-center text-red-700 hover:text-red-800 transition-colors text-base"
        >
          <FaChevronLeft className="mr-2" /> Kembali ke Daftar Pesanan
        </button>
        <OrderForm
          orderToEdit={view === 'edit' ? selectedOrder : null}
          onSave={handleSaveOrder}
          onCancel={handleBackToList}
        />
      </div>
    );
  }

  // --- Tampilan Daftar Pesanan (Default) ---
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Manajemen Pesanan</h1>

      {/* Filter, Pencarian, dan Tambah Pesanan */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full sm:w-auto">
          <input
            type="text"
            placeholder="Cari ID, Pelanggan, atau Paket..."
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-red-300 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        </div>
        <select
          className="border rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-red-300 text-sm w-full sm:w-auto"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="Semua">Semua Status</option>
          {ORDER_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <button
          onClick={handleAddOrderClick}
          className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors flex items-center justify-center w-full sm:w-auto text-sm"
        >
          <FaPlus className="mr-2" /> Tambah Pesanan Baru
        </button>
      </div>

      {/* Tabel Daftar Pesanan */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pesanan</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Pesanan</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Pelanggan</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paket/Menu</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Orang</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Harga</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-700">{order.orderDate}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-700">{order.customerName}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-700">{order.packageName}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-700">{order.pax}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900 font-bold">{formatRupiah(order.totalPrice)}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="relative inline-block text-left" ref={dropdownRef}>
                      <button
                        onClick={() => handleViewDetails(order)}
                        className="text-red-600 hover:text-red-900 mr-3 sm:mr-4 transition-colors p-1"
                        title="Lihat Detail"
                      >
                        <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button
                        className="text-gray-600 hover:text-gray-900 focus:outline-none transition-colors p-1"
                        onClick={() => {
                          setOpenDropdownId(openDropdownId === order.id ? null : order.id);
                          setIsSubMenuOpen(null); // Tutup submenu saat dropdown utama dibuka/ditutup
                        }}
                        title="Aksi Lain"
                      >
                        <FaEllipsisV className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>

                      {openDropdownId === order.id && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                          <div className="py-1">
                            <button
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                              onClick={() => handleEditOrderClick(order)}
                            >
                              <FaEdit className="mr-2" /> Edit Pesanan
                            </button>
                            <div className="relative">
                              <button
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center justify-between"
                                onClick={() => setIsSubMenuOpen(isSubMenuOpen === order.id ? null : order.id)}
                              >
                                <span><FaCheckCircle className="mr-2 inline" /> Ubah Status</span>
                                <FaChevronRight className="w-3 h-3" /> {/* Menggunakan FaChevronRight untuk submenu */}
                              </button>
                              {isSubMenuOpen === order.id && (
                                <div className="origin-top-left absolute left-full top-0 ml-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                                  <div className="py-1">
                                    {ORDER_STATUSES.map(status => (
                                      <button
                                        key={status}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        onClick={() => handleChangeStatus(order.id, status)}
                                      >
                                        {status}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                            <button
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                              onClick={() => handleArchiveOrder(order.id)}
                            >
                              <FaArchive className="mr-2" /> Arsip (Selesai)
                            </button>
                            <button
                              className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 w-full text-left flex items-center"
                              onClick={() => handleDeleteOrder(order.id)}
                            >
                              <FaTrash className="mr-2" /> Hapus
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-4 text-center text-gray-500 text-base">
                  Tidak ada pesanan yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginasi (opsional, bisa ditambahkan jika data banyak) */}
      <div className="mt-6 flex justify-center">
        {/* <button className="bg-white px-4 py-2 rounded-md border mr-2">Previous</button>
        <button className="bg-red-700 text-white px-4 py-2 rounded-md">1</button>
        <button className="bg-white px-4 py-2 rounded-md border ml-2">Next</button> */}
      </div>
    </div>
  );
};

export default OrderManagement;