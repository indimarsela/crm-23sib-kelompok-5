// src/pages/Dashboard.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar, AreaChart, Area, Legend,
} from 'recharts';
import { FaSearch, FaBell, FaShoppingCart, FaUser, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- DATA DUMMY UNTUK GRAFIK DAN KOMPONEN LAINNYA ---

// Data KPI Atas
const kpiDataTop = {
  newOrders: 78,
  totalDelivered: 459,
  totalCanceled: 21,
};

// Data Ringkasan Pesanan Harian
const dailyOrdersData = [
  { name: 'Sen', 'Total Pesanan': 120, 'Pesanan Dibatalkan': 10 },
  { name: 'Sel', 'Total Pesanan': 150, 'Pesanan Dibatalkan': 5 },
  { name: 'Rab', 'Total Pesanan': 130, 'Pesanan Dibatalkan': 8 },
  { name: 'Kam', 'Total Pesanan': 180, 'Pesanan Dibatalkan': 12 },
  { name: 'Jum', 'Total Pesanan': 160, 'Pesanan Dibatalkan': 7 },
  { name: 'Sab', 'Total Pesanan': 200, 'Pesanan Dibatalkan': 15 },
  { name: 'Min', 'Total Pesanan': 100, 'Pesanan Dibatalkan': 3 },
];

// Data Pesanan Terkirim (Area Chart)
const ordersDeliveredData = [
  { name: 'Jan', 'Terkirim': 3000 },
  { name: 'Feb', 'Terkirim': 2800 },
  { name: 'Mar', 'Terkirim': 3500 },
  { name: 'Apr', 'Terkirim': 3200 },
  { name: 'Mei', 'Terkirim': 4125 },
  { name: 'Jun', 'Terkirim': 3800 },
  { name: 'Jul', 'Terkirim': 4500 },
  { name: 'Agu', 'Terkirim': 4200 },
  { name: 'Sep', 'Terkirim': 4800 },
  { name: 'Okt', 'Terkirim': 4600 },
  { name: 'Nov', 'Terkirim': 5000 },
  { name: 'Des', 'Terkirim': 4900 },
];

// Data Alur Pelanggan (Bar Chart)
const customerFlowData = [
  { name: '1 Des', 'Pesanan Daring': 150, 'Pesanan Langsung': 100 },
  { name: '2 Des', 'Pesanan Daring': 180, 'Pesanan Langsung': 120 },
  { name: '3 Des', 'Pesanan Daring': 220, 'Pesanan Langsung': 90 },
  { name: '4 Des', 'Pesanan Daring': 190, 'Pesanan Langsung': 110 },
  { name: '5 Des', 'Pesanan Daring': 250, 'Pesanan Langsung': 130 },
  { name: '6 Des', 'Pesanan Daring': 230, 'Pesanan Langsung': 100 },
  { name: '7 Des', 'Pesanan Daring': 280, 'Pesanan Langsung': 150 },
];

// Data Pertumbuhan Penjualan (Area Chart)
const salesGrowthData = [
  { name: 'Minggu 1', 'Penjualan': 5000 },
  { name: 'Minggu 2', 'Penjualan': 5500 },
  { name: 'Minggu 3', 'Penjualan': 6154 },
  { name: 'Minggu 4', 'Penjualan': 6500 },
];

// Data Total Pendapatan (Bar Chart)
const totalEarningsData = [
  { name: 'Mei', 'Tahun Ini': 35000, 'Tahun Lalu': 30000 },
  { name: 'Jun', 'Tahun Ini': 40000, 'Tahun Lalu': 32000 },
  { name: 'Jul', 'Tahun Ini': 44126, 'Tahun Lalu': 38000 },
  { name: 'Agu', 'Tahun Ini': 42000, 'Tahun Lalu': 39000 },
  { name: 'Sep', 'Tahun Ini': 48000, 'Tahun Lalu': 40000 },
];

// Data Ulasan Pelanggan (untuk simulasi review cards)
const customerReviews = [
  {
    id: 1,
    name: "Rizky Firmansyah",
    avatar: "https://st4.depositphotos.com/6462898/28590/i/450/depositphotos_285905634-stock-photo-smiling-asian-man-standing-hands.jpg", // Gambar Rizky
    text: "Pesanannya tiba tepat waktu dan makanannya sangat lezat! Salmon panggangnya juara.",
    rating: 4.5,
    foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0e27Jfz7MT3vKT7HfzmVIDC1SUGsMEnzTcg&s", // Gambar Salmon
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZV0o9JhfzRl4MlPRyPdqTwBHJIvpx4qqhSA&s", // Gambar Siti
    text: "Pelayanan sangat baik, tim katering profesional dan responsif. Cocok untuk acara besar!",
    rating: 5.0,
    foodImage: "https://dimsimlim.com/wp-content/uploads/2024/12/Spicy-Nasi-Goreng-1.jpg", // Gambar Nasi Goreng
  },
  {
    id: 3,
    name: "Budi Santoso",
    avatar: "https://via.placeholder.com/40/008000/FFFFFF?text=BS",
    text: "Sop Buntutnya mantap! Tapi sedikit terlambat pengirimannya.",
    rating: 3.5,
    foodImage: "https://www.hotelborobudur.com/wp-content/uploads/2021/09/oxtail_soup.jpg", // Gambar Sop Buntut
  },
];

// Data Pesanan Terbaru (Tabel)
const recentlyPlacedOrders = [
  { id: 1, orderName: "Paket Nasi Kuning", customerName: "Justin Mason", location: "Bandar Raya", status: "Dalam Proses", deliveredTime: "10:35", price: 150000 },
  { id: 2, orderName: "Paket Prasmanan B", customerName: "Indi Marsela", location: "Pekanbaru Kota", status: "Terkirim", deliveredTime: "11:20", price: 2500000 },
  { id: 3, orderName: "Kotak Makan Siang", customerName: "Aulia Putri", location: "Tampan", status: "Tertunda", deliveredTime: "12:00", price: 75000 },
  { id: 4, orderName: "Paket Pernikahan", customerName: "Rizky Adityo", location: "Rumbai", status: "Dalam Proses", deliveredTime: "13:45", price: 35000000 },
  { id: 5, orderName: "Buffet Seminar", customerName: "PT. Maju Jaya", location: "Gobah", status: "Terkirim", deliveredTime: "09:30", price: 15000000 },
  { id: 6, orderName: "Acara Ulang Tahun", customerName: "Siti Nurhaliza", location: "Sudirman", status: "Dibatalkan", deliveredTime: "16:00", price: 5000000 },
];

// Data Menu Unggulan (Favourite Items)
const favouriteItems = [
  { id: 1, name: "Nasi Goreng Spesial", image: "https://dimsimlim.com/wp-content/uploads/2024/12/Spicy-Nasi-Goreng-1.jpg" },
  { id: 2, name: "Salmon Panggang Madu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0e27Jfz7MT3vKT7HfzmVIDC1SUGsMEnzTcg&s" },
  { id: 3, name: "Sop Buntut", image: "https://www.hotelborobudur.com/wp-content/uploads/2021/09/oxtail_soup.jpg" },
  { id: 4, name: "Nasi Tumpeng", image: "https://rajominang.id/blog/uploads/images/202407/image_750x_66854feaeddf4.jpg" },
  { id: 5, name: "Opor Ayam", image: "https://aslimasako.com/storage/post/new-title-23012024-055012.jpg" },
];

// Helper untuk format harga IDR
const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Navigation Bar */}
      <nav className="bg-white p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-red-700">AA Catering</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <FaUser className="text-gray-600 hover:text-red-700 cursor-pointer text-lg" />
          <FaBell className="text-gray-600 hover:text-red-700 cursor-pointer text-lg" />
          <FaShoppingCart className="text-gray-600 hover:text-red-700 cursor-pointer text-lg" />
          <FaGlobe className="text-gray-600 hover:text-red-700 cursor-pointer text-lg" />
          <button className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors">
            Menu
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI Cards (Ukuran diperkecil dan ditambahkan hover animasi) */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border-b-4 border-red-600
                    transform transition duration-300 hover:scale-105 hover:shadow-lg"> {/* Animasi hover */}
          <div>
            <div className="text-sm text-gray-500">Pesanan Baru</div>
            <div className="text-2xl font-bold text-gray-800">{kpiDataTop.newOrders}</div> {/* Ukuran font diperkecil */}
          </div>
          <div className="bg-red-100 p-2 rounded-full"> {/* Ukuran padding diperkecil */}
            {/* Icon untuk Pesanan Baru */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-700"> {/* Ukuran icon diperkecil */}
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0v3.75a2.25 2.25 0 0 1-2.25 2.25H9.75A2.25 2.25 0 0 1 7.5 9.75V6ZM12 12.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6 6.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 6.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM6 9.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 9.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM6 13.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 13.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM6 16.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 16.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" />
            </svg>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border-b-4 border-green-600
                    transform transition duration-300 hover:scale-105 hover:shadow-lg"> {/* Animasi hover */}
          <div>
            <div className="text-sm text-gray-500">Pesanan Terkirim</div>
            <div className="text-2xl font-bold text-gray-800">{kpiDataTop.totalDelivered}</div> {/* Ukuran font diperkecil */}
          </div>
          <div className="bg-green-100 p-2 rounded-full"> {/* Ukuran padding diperkecil */}
            {/* Icon untuk Pesanan Terkirim */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-700"> {/* Ukuran icon diperkecil */}
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V10.5a.75.75 0 0 1 .75-.75h7.5Z" clipRule="evenodd" />
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6 6.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 6.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM6 9.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 9.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM6 13.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 13.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM6 16.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM17.25 16.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Z" />
            </svg>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border-b-4 border-red-400
                    transform transition duration-300 hover:scale-105 hover:shadow-lg"> {/* Animasi hover */}
          <div>
            <div className="text-sm text-gray-500">Pesanan Dibatalkan</div>
            <div className="text-2xl font-bold text-gray-800">{kpiDataTop.totalCanceled}</div> {/* Ukuran font diperkecil */}
          </div>
          <div className="bg-red-50 p-2 rounded-full"> {/* Ukuran padding diperkecil */}
            {/* Icon untuk Pesanan Dibatalkan */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500"> {/* Ukuran icon diperkecil */}
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Daily Orders Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pesanan Harian</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dailyOrdersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{ fill: 'rgba(255, 99, 71, 0.1)' }} />
              <Legend />
              <Bar dataKey="Total Pesanan" fill="#a52a2a" radius={[5, 5, 0, 0]} />
              <Bar dataKey="Pesanan Dibatalkan" fill="#FF6347" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Delivered Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Pesanan Terkirim</h2>
              <p className="text-3xl font-bold text-gray-800">{ordersDeliveredData[4]['Terkirim'].toLocaleString('id-ID')} <span className="text-sm text-gray-500">Bulan Ini</span></p>
            </div>
            <select className="border rounded-md px-3 py-1 text-sm bg-gray-50">
              <option>Bulan Ini</option>
              <option>Tahun Ini</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={ordersDeliveredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value.toLocaleString('id-ID')} Pesanan`, 'Terkirim']} />
              <Area type="monotone" dataKey="Terkirim" stroke="#a52a2a" fill="#FFCCCC" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Flow */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Alur Pelanggan</h2>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-xl font-bold text-gray-800">{formatRupiah(276000000)} <span className="text-sm text-gray-500">Pesanan Langsung</span></p>
              <p className="text-xl font-bold text-gray-800">{formatRupiah(141000000)} <span className="text-sm text-gray-500">Pesanan Daring</span></p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={customerFlowData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value.toLocaleString('id-ID')}`} />
              <Tooltip formatter={(value, name) => [`${value.toLocaleString('id-ID')}`, name]} />
              <Legend />
              <Bar dataKey="Pesanan Daring" fill="#a52a2a" radius={[5, 5, 0, 0]} />
              <Bar dataKey="Pesanan Langsung" fill="#ce5656" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Growth */}
        <div className="bg-white p-6 rounded-lg shadow-md relative lg:col-span-1">
          <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full flex items-center">
            <span className="mr-1">▲</span> +5.0%
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Pertumbuhan Penjualan</h2>
          <p className="text-3xl font-bold text-gray-800">{formatRupiah(615400000)}</p>
          <div className="text-sm text-gray-500 mb-4">Total Penjualan</div>

          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={salesGrowthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" hide />
              <YAxis hide domain={[4000, 7000]} />
              <Tooltip formatter={(value) => [formatRupiah(value * 100000), 'Penjualan']} />
              <Area type="monotone" dataKey="Penjualan" stroke="#a52a2a" fill="#FFCCCC" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="text-sm text-gray-500 mt-2">
            Pelanggan Aktif: <span className="font-bold text-gray-800">7,485</span>
          </div>
        </div>

        {/* Total Earnings Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Total Pendapatan</h2>
            <select className="border rounded-md px-3 py-1 text-sm bg-gray-50">
              <option>Tahun Ini</option>
              <option>Tahun Lalu</option>
            </select>
          </div>
          <p className="text-3xl font-bold text-gray-800">{formatRupiah(totalEarningsData[2]['Tahun Ini'] * 1000)} <span className="text-sm text-gray-500">Bulan Ini</span></p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={totalEarningsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${formatRupiah(value * 1000)}`} />
              <Tooltip formatter={(value, name) => [`${formatRupiah(value * 1000)}`, name]} />
              <Legend />
              <Bar dataKey="Tahun Ini" fill="#a52a2a" radius={[5, 5, 0, 0]} />
              <Bar dataKey="Tahun Lalu" fill="#ce5656" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Review Section */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Ulasan Pelanggan</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-200">
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customerReviews.slice(0, 2).map((review) => (
              <div key={review.id} className="p-4 border border-gray-200 rounded-lg flex flex-col items-start bg-gray-50">
                <div className="flex items-center mb-3">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <div className="text-sm text-yellow-500">
                      {'★'.repeat(Math.floor(review.rating))}{'☆'.repeat(5 - Math.floor(review.rating))} ({review.rating})
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{review.text}</p>
                <img src={review.foodImage} alt="Makanan yang diulas" className="w-20 h-20 rounded-md object-cover self-end" />
              </div>
            ))}
          </div>
        </div>

        {/* Recently Placed Orders Table */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Pesanan Terbaru</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pesanan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Pesanan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Pelanggan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status Pesanan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu Terkirim</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentlyPlacedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.orderName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customerName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${order.status === 'Dalam Proses' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${order.status === 'Terkirim' ? 'bg-green-100 text-green-800' : ''}
                        ${order.status === 'Tertunda' ? 'bg-blue-100 text-blue-800' : ''}
                        ${order.status === 'Dibatalkan' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.deliveredTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatRupiah(order.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Favourite Items */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {favouriteItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={item.image} alt={item.name} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">Terjual: {Math.floor(Math.random() * 500) + 500} porsi</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;