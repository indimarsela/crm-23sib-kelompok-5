import React, { useState } from "react";

const initialReviews = [
  { id: 1, nama: "Andi", produk: "Paket Hemat 1", rating: 5, komentar: "Layanan cepat dan memuaskan." },
  { id: 2, nama: "Rina", produk: "Paket Diet", rating: 3, komentar: "Cukup oke, tapi bisa lebih baik." },
  { id: 3, nama: "Budi", produk: "Paket Protein", rating: 4, komentar: "Pengiriman cepat, mantap." },
  { id: 4, nama: "Siti", produk: "Paket Vegan", rating: 2, komentar: "Pelayanan kurang ramah." },
  { id: 5, nama: "Joko", produk: "Paket Hemat 2", rating: 5, komentar: "Luar biasa mantap sekali!" },
  { id: 6, nama: "Wulan", produk: "Paket Anak", rating: 4, komentar: "Baik, tapi packing perlu diperbaiki." },
  { id: 7, nama: "Doni", produk: "Paket Keluarga", rating: 3, komentar: "Waktu pengiriman cukup lama." },
];

const produkList = [
  "Paket Hemat 1",
  "Paket Hemat 2",
  "Paket Diet",
  "Paket Protein",
  "Paket Vegan",
  "Paket Anak",
  "Paket Keluarga",
];

const reviewsPerPage = 3;

const Feedback = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    produk: "",
    rating: 5,
    komentar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      ...formData,
    };
    setReviews([newReview, ...reviews]);
    setFormData({ nama: "", produk: "", rating: 5, komentar: "" });
    setCurrentPage(1);
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderStars = (count) => "⭐".repeat(count);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-[#800000] mb-6 text-center">📋 Daftar Feedback Pelanggan</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Nama Anda"
            required
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className="flex-1 min-w-[200px] px-4 py-3 border border-gray-300 rounded-md"
          />
          <select
            required
            value={formData.produk}
            onChange={(e) => setFormData({ ...formData, produk: e.target.value })}
            className="flex-1 min-w-[200px] px-4 py-3 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Pilih Produk</option>
            {produkList.map((produk) => (
              <option key={produk} value={produk}>{produk}</option>
            ))}
          </select>
          <select
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
            className="flex-1 min-w-[200px] px-4 py-3 border border-gray-300 rounded-md"
          >
            <option value={5}>5 - Sangat Baik</option>
            <option value={4}>4 - Baik</option>
            <option value={3}>3 - Cukup</option>
            <option value={2}>2 - Kurang</option>
            <option value={1}>1 - Buruk</option>
          </select>
        </div>
        <textarea
          placeholder="Komentar Anda"
          required
          value={formData.komentar}
          onChange={(e) => setFormData({ ...formData, komentar: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md h-28"
        />
        <button
          type="submit"
          className="w-full bg-[#800000] text-white font-semibold py-3 rounded-md hover:bg-red-800 transition"
        >
          Kirim Feedback
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-[#800000] text-white">
            <tr>
              <th className="p-3">No</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Produk</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Komentar</th>
            </tr>
          </thead>
          <tbody>
            {currentReviews.map((review, index) => (
              <tr key={review.id} className="odd:bg-white even:bg-gray-50">
                <td className="p-3">{indexOfFirstReview + index + 1}</td>
                <td className="p-3">{review.nama}</td>
                <td className="p-3">{review.produk}</td>
                <td className="p-3 text-yellow-500">
                  {renderStars(review.rating)}{" "}
                  <span className="text-gray-700">
                    ({["Buruk", "Kurang", "Cukup", "Baik", "Sangat Baik"][review.rating - 1]})
                  </span>
                </td>
                <td className="p-3">{review.komentar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentPage === i + 1
                ? "bg-[#800000] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
