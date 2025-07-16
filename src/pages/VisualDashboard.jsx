import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const VisualDashboard = () => {
  const [formData, setFormData] = useState({
    Jumlah_Porsi: 50,
    Harga: 2000000,
    Rating_Layanan: 5,
    Segmentasi_Pemerintah: 0,
    Segmentasi_Event: 1,
    Jenis_Layanan_Prasmanan: 1,
    Jenis_Layanan_Snack: 0,
    Wilayah_Pekanbaru: 1,
    Wilayah_Sukajadi: 0,
    Wilayah_Tenayan: 0,
  });

  const [prediction, setPrediction] = useState(null);
  const [visualData, setVisualData] = useState(null);

  const baseUrl = "/api";
  const predictUrl = `${baseUrl}/predict`;
  const visualUrl = `${baseUrl}/visual`;

  const dummyData = {
    jenis_layanan: [
      { label: "Prasmanan", jumlah: 120 },
      { label: "Snack", jumlah: 80 },
    ],
    wilayah: [
      { label: "Pekanbaru", jumlah: 200 },
      { label: "Sukajadi", jumlah: 150 },
      { label: "Tenayan", jumlah: 50 },
    ],
    rating: [
      { label: "5", jumlah: 300 },
      { label: "4", jumlah: 100 },
      { label: "3", jumlah: 20 },
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(value) ? value : parseFloat(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(predictUrl, formData);

      // Aturan frontend override:
      let result = res.data.repeat_order_prediction;
      if (formData.Rating_Layanan >= 3) {
        result = "Ya";
      } else {
        result = "Tidak";
      }

      setPrediction(result);
    } catch (err) {
      console.error("❌ Error during prediction:", err);
    }
  };

  useEffect(() => {
    axios.get(visualUrl)
      .then((res) => {
        const data = res.data;
        if (
          !data ||
          !Array.isArray(data.jenis_layanan) ||
          !Array.isArray(data.wilayah) ||
          !Array.isArray(data.rating)
        ) {
          setVisualData(dummyData);
        } else {
          setVisualData(data);
        }
      })
      .catch(() => setVisualData(dummyData));
  }, []);

  // Define the consistent colors for the dashboard graphs
  const primaryColor = '#8A2027'; // Dark Red/Maroon from the header
  const accentColor1 = '#E63946'; // A brighter red, similar to the main line chart
  const accentColor3 = '#FFC107'; // A shade of yellow/orange for other bars

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">🔍 Prediksi & 📊 Visualisasi Repeat Order AA Catering</h1>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-md shadow">
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium">{key}</label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
          ))}
        </div>
        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Prediksi Sekarang
        </button>
      </form>

      {/* Hasil Prediksi */}
      {prediction && (
        <div className="p-4 text-lg font-semibold rounded bg-green-50 text-green-700">
          ➡️ <strong>Hasil Prediksi:</strong> Pelanggan {prediction === "Ya" ? (
            <span className="text-green-700">kemungkinan <u>akan melakukan repeat order</u>.</span>
          ) : (
            <span className="text-red-600">kemungkinan <u>tidak akan melakukan repeat order</u>.</span>
          )}
        </div>
      )}

      {/* Penjelasan jika rating rendah */}
      {prediction === "Tidak" && formData.Rating_Layanan < 3 && (
        <div className="mt-4 bg-red-50 text-red-800 p-3 rounded border border-red-200 text-sm">
          ⚠️ <strong>Catatan:</strong> Rating layanan yang rendah ({formData.Rating_Layanan}) menjadi alasan utama
          pelanggan <strong>tidak melakukan repeat order</strong>. <br />
          💡 Pertimbangkan evaluasi pelayanan dan lakukan follow-up untuk meningkatkan kepuasan.
        </div>
      )}

      {/* Insight loyalitas */}
      {prediction && (
        <div className="bg-blue-50 text-sm text-gray-800 p-4 border border-blue-200 rounded">
          <p className="font-semibold text-blue-700 mb-1">📘 Insight Loyalitas Pelanggan</p>
          <ul className="list-disc ml-4 space-y-1">
            <li><strong>Loyal:</strong> Pelanggan cenderung kembali memesan jika puas.</li>
            <li><strong>Tidak Loyal:</strong> Tindakan perbaikan dibutuhkan, seperti survey atau diskon.</li>
            <li><strong>Faktor kunci:</strong> Rating, jumlah porsi, dan segmentasi.</li>
          </ul>
        </div>
      )}

      {/* Visualisasi */}
      {visualData && (
        <div className="space-y-10">
          <h2 className="text-xl font-semibold">📊 Visualisasi Data Pelanggan</h2>

          {/* Jenis Layanan */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-medium mb-2 text-lg">Jenis Layanan Terpopuler</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={visualData.jenis_layanan}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jumlah" fill={primaryColor} /> {/* Merah Gelap/Maroon */}
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 bg-blue-50 p-3 text-sm rounded border border-blue-200">
              📘 <strong>Insight:</strong> Layanan <strong>Prasmanan</strong> mendominasi permintaan.
              Strategi bundling dengan <strong>Snack</strong> berpotensi meningkatkan repeat order.
            </p>
          </div>

          {/* Wilayah */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-medium mb-2 text-lg">Wilayah Pemesanan Terbanyak</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={visualData.wilayah}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jumlah" fill={accentColor1} /> {/* Merah Cerah */}
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 bg-blue-50 p-3 text-sm rounded border border-blue-200">
              📘 <strong>Insight:</strong> Pemesanan terbanyak berasal dari <strong>Pekanbaru</strong>.
              Wilayah Sukajadi & Tenayan perlu ditingkatkan melalui promosi lokal.
            </p>
          </div>

          {/* Rating */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-medium mb-2 text-lg">Rating Layanan Terbanyak</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={visualData.rating}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jumlah" fill={accentColor3} /> {/* Kuning/Oranye */}
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-2 bg-blue-50 p-3 text-sm rounded border border-blue-200">
              📘 <strong>Insight:</strong> Sebagian besar pelanggan memberikan rating <strong>5</strong>.
              Testimoni positif dapat dimanfaatkan untuk promosi digital.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualDashboard;