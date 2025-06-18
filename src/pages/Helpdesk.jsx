import React, { useState } from "react";

const Helpdesk = () => {
  const [submitted, setSubmitted] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  // State untuk form input controlled
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    kritik: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simpan data kritik baru ke array feedbacks
    setFeedbacks((prev) => [
      {
        id: prev.length + 1,
        ...formData,
      },
      ...prev,
    ]);

    setSubmitted(true);

    // Reset form setelah submit
    setFormData({ nama: "", email: "", kritik: "" });

    // Sembunyikan pesan terima kasih setelah 3 detik
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📩 Pusat Bantuan</h2>

      <p style={styles.subtext}>
        Jika Anda memiliki pertanyaan, kritik, atau membutuhkan bantuan, silakan isi formulir di bawah atau hubungi kami langsung.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Nama</label>
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            required
            style={styles.input}
            value={formData.nama}
            onChange={handleChange}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Anda"
            required
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
          />

          <label style={styles.label}>Kritik / Keluhan</label>
          <textarea
            name="kritik"
            placeholder="Tulis kritik atau keluhan Anda di sini..."
            required
            style={styles.textarea}
            value={formData.kritik}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>
            Kirim
          </button>
        </form>
      ) : (
        <div style={styles.thankYou}>
          <h3>✅ Terima kasih!</h3>
          <p>Kritik atau keluhan Anda telah kami terima dan akan segera ditindaklanjuti.</p>
        </div>
      )}

      {/* Tabel kritik yang sudah masuk */}
      {feedbacks.length > 0 && (
        <>
          <h3 style={{ marginTop: 40, marginBottom: 15, color: "#333" }}>
            📝 Daftar Kritik & Keluhan
          </h3>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>No</th>
                  <th style={styles.th}>Nama</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Kritik / Keluhan</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((fb, idx) => (
                  <tr key={fb.id}>
                    <td style={styles.td}>{idx + 1}</td>
                    <td style={styles.td}>{fb.nama}</td>
                    <td style={styles.td}>{fb.email}</td>
                    <td style={styles.td}>{fb.kritik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div style={styles.contactBox}>
        <h4 style={styles.contactTitle}>📞 Kontak Person</h4>
        <p>
          📧 Email:{" "}
          <a href="mailto:support@yellowfit.com">support@yellowfit.com</a>
        </p>
        <p>
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            +62 812-3456-7890
          </a>
        </p>
        <p>🏢 Alamat: Jl. Sehat No.10, Jakarta</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "10px",
  },
  subtext: {
    textAlign: "center",
    fontSize: "15px",
    marginBottom: "20px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "6px",
    color: "#555",
  },
  input: {
    padding: "10px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    minHeight: "100px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#800000",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },
  thankYou: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#e6f4ea",
    borderRadius: "12px",
    color: "#2e7d32",
  },
  contactBox: {
    marginTop: "30px",
    padding: "20px",
    borderTop: "1px solid #eee",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },
  contactTitle: {
    marginBottom: "10px",
    fontSize: "17px",
    color: "#007BFF",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "500px",
  },
  th: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
    verticalAlign: "top",
  },
};

export default Helpdesk;
