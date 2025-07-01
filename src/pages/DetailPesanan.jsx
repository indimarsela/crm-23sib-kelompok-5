import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation untuk mengambil data dari Link

export default function DetailPesanan() {
  const location = useLocation();
  // Contoh pengambilan data dari Link (jika Anda melewatkan data dari halaman sebelumnya)
  // const orderData = location.state?.order || {
  //   packageName: "Paket Pernikahan Gold Harmony",
  //   price: "Rp 45.000.000",
  //   pax: "500 pax",
  //   date: "20 Agustus 2025",
  //   location: "Gedung Serbaguna Puri Indah, Pekanbaru",
  //   customRequests: "Tambahan dekorasi bunga segar, menu vegetarian 50 porsi.",
  //   totalAmount: "48.500.000", // Contoh total setelah tambahan
  // };

  // Data dummy untuk contoh detail pesanan jika tidak ada data dari state
  const orderData = {
    packageName: "Paket Pernikahan Gold Harmony",
    price: "Rp 45.000.000",
    pax: "500 pax",
    date: "20 Agustus 2025",
    location: "Gedung Serbaguna Puri Indah, Pekanbaru",
    customRequests: "Tambahan dekorasi bunga segar, menu vegetarian 50 porsi. (Total setelah tambahan: Rp 48.500.000)",
    subTotal: "45.000.000",
    additionalCost: "3.500.000",
    totalAmount: "48.500.000",
  };

  useEffect(() => {
    document.title = "AA Catering | Detail Pesanan";
    window.scrollTo(0, 0);
  }, []);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePayment = () => {
    if (selectedPaymentMethod) {
      alert(`Anda akan membayar Rp ${orderData.totalAmount} menggunakan ${selectedPaymentMethod}. Proses pembayaran akan dilanjutkan.`);
      // Di sini Anda akan mengintegrasikan logika pembayaran sesungguhnya
      // Misalnya, redirect ke halaman gateway pembayaran
      // window.location.href = "/payment-gateway?orderId=123";
    } else {
      alert("Mohon pilih metode pembayaran terlebih dahulu.");
    }
  };

  return (
    <>
      {/* Header (Bisa diimpor dari komponen terpisah jika Anda punya Header global) */}
      <header className="fixed top-0 left-0 w-full bg-red-800 text-white shadow-lg z-50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            AA Catering
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-red-200 transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/menu-paket" className="hover:text-red-200 transition-colors duration-200">
                  Menu & Paket
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-red-200 transition-colors duration-200">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-red-200 transition-colors duration-200">
                  Kontak
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="pt-24 pb-20 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-extrabold text-red-700 text-center mb-8">
            Detail Pesanan Anda
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-gray-700">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-red-600 mb-2">Informasi Paket</h2>
              <p><strong className="font-medium">Paket:</strong> {orderData.packageName}</p>
              <p><strong className="font-medium">Jumlah Pax:</strong> {orderData.pax}</p>
              <p><strong className="font-medium">Harga Awal:</strong> {orderData.price}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-red-600 mb-2">Detail Acara</h2>
              <p><strong className="font-medium">Tanggal Acara:</strong> {orderData.date}</p>
              <p><strong className="font-medium">Lokasi:</strong> {orderData.location}</p>
              <p><strong className="font-medium">Permintaan Tambahan:</strong> {orderData.customRequests || "Tidak ada"}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Ringkasan Pembayaran</h2>
            <div className="flex justify-between items-center text-lg text-gray-800 mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">Rp {orderData.subTotal}</span>
            </div>
            <div className="flex justify-between items-center text-lg text-gray-800 mb-4">
              <span>Biaya Tambahan:</span>
              <span className="font-semibold">Rp {orderData.additionalCost}</span>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold text-red-800 border-t-2 border-red-200 pt-4">
              <span>Total Pembayaran:</span>
              <span>Rp {orderData.totalAmount}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Pilih Metode Pembayaran</h2>
            <div className="space-y-4">
              <label className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Bank Transfer"
                  checked={selectedPaymentMethod === "Bank Transfer"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="form-radio h-5 w-5 text-red-600"
                />
                <span className="ml-3 text-lg font-medium text-gray-800">Bank Transfer (BCA, Mandiri)</span>
              </label>
              <label className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Virtual Account"
                  checked={selectedPaymentMethod === "Virtual Account"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="form-radio h-5 w-5 text-red-600"
                />
                <span className="ml-3 text-lg font-medium text-gray-800">Virtual Account (BNI, BRI)</span>
              </label>
              <label className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Kartu Kredit/Debit"
                  checked={selectedPaymentMethod === "Kartu Kredit/Debit"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="form-radio h-5 w-5 text-red-600"
                />
                <span className="ml-3 text-lg font-medium text-gray-800">Kartu Kredit/Debit</span>
              </label>
            </div>

            <button
              onClick={handlePayment}
              className={`w-full mt-8 py-4 rounded-lg text-xl font-bold transition-colors duration-300 ${
                selectedPaymentMethod
                  ? "bg-red-700 hover:bg-red-800 text-white shadow-md"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!selectedPaymentMethod}
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
}