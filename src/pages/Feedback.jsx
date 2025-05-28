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
    <div style={styles.container}>
      <h2 style={styles.title}>📋 Daftar Feedback Pelanggan</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nama Anda"
          required
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          style={styles.input}
        />
        <select
          required
          value={formData.produk}
          onChange={(e) => setFormData({ ...formData, produk: e.target.value })}
          style={styles.select}
        >
          <option value="" disabled>
            Pilih Produk
          </option>
          {produkList.map((produk) => (
            <option key={produk} value={produk}>
              {produk}
            </option>
          ))}
        </select>
        <select
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
          style={styles.select}
        >
          <option value={5}>5 - Sangat Baik</option>
          <option value={4}>4 - Baik</option>
          <option value={3}>3 - Cukup</option>
          <option value={2}>2 - Kurang</option>
          <option value={1}>1 - Buruk</option>
        </select>
        <textarea
          placeholder="Komentar Anda"
          required
          value={formData.komentar}
          onChange={(e) => setFormData({ ...formData, komentar: e.target.value })}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Kirim Feedback
        </button>
      </form>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama</th>
              <th style={styles.th}>Produk</th>
              <th style={styles.th}>Rating</th>
              <th style={styles.th}>Komentar</th>
            </tr>
          </thead>
          <tbody>
            {currentReviews.map((review, index) => (
              <tr key={review.id}>
                <td style={styles.td}>{indexOfFirstReview + index + 1}</td>
                <td style={styles.td}>{review.nama}</td>
                <td style={styles.td}>{review.produk}</td>
                <td style={styles.td}>
                  <span style={{ color: "#f1c40f" }}>{renderStars(review.rating)}</span>{" "}
                  {review.rating === 5
                    ? "Sangat Baik"
                    : review.rating === 4
                    ? "Baik"
                    : review.rating === 3
                    ? "Cukup"
                    : review.rating === 2
                    ? "Kurang"
                    : "Buruk"}
                </td>
                <td style={styles.td}>{review.komentar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            style={{
              ...styles.pageButton,
              backgroundColor: currentPage === i + 1 ? "#007BFF" : "#f0f0f0",
              color: currentPage === i + 1 ? "#fff" : "#000",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    width: "100%",
    margin: "40px auto",
    padding: "30px 20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', sans-serif",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#c0392b",
  },
  form: {
    marginBottom: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  input: {
    flex: "1 1 200px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minWidth: "0",
  },
  select: {
    flex: "1 1 200px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minWidth: "0",
  },
  textarea: {
    flex: "1 1 100%",
    padding: "10px",
    minHeight: "80px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minWidth: "0",
  },
  button: {
    flex: "1 1 100%",
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "600px",
  },
  th: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    whiteSpace: "nowrap",
  },
  pagination: {
    marginTop: "20px",
    textAlign: "center",
  },
  pageButton: {
    padding: "8px 12px",
    margin: "0 5px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Feedback;
