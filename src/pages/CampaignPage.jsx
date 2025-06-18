import React, { useState } from 'react';

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [form, setForm] = useState({
    namaPromo: '',
    deskripsi: '',
    tipePromo: 'Diskon Persen',
    besarDiskon: '',
    mulai: '',
    selesai: '',
    status: 'Aktif',
    jenisPelanggan: [],
    lokasi: '',
    kebutuhan: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setForm((prevForm) => {
        const updatedJenis = checked
          ? [...prevForm.jenisPelanggan, value]
          : prevForm.jenisPelanggan.filter((item) => item !== value);
        return { ...prevForm, jenisPelanggan: updatedJenis };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCampaigns([...campaigns, { ...form, id: Date.now() }]);
    setForm({
      namaPromo: '',
      deskripsi: '',
      tipePromo: 'Diskon Persen',
      besarDiskon: '',
      mulai: '',
      selesai: '',
      status: 'Aktif',
      jenisPelanggan: [],
      lokasi: '',
      kebutuhan: '',
    });
  };

  const handleDelete = (id) => {
    setCampaigns(campaigns.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">Manajemen Promo AA Catering</h1>

      {/* Form Tambah Promo */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">

        <input type="text" name="namaPromo" value={form.namaPromo} onChange={handleChange} placeholder="Nama Promo" className="w-full p-2 border rounded" required />
        <textarea name="deskripsi" value={form.deskripsi} onChange={handleChange} placeholder="Deskripsi" className="w-full p-2 border rounded" required />
        
        <div className="flex gap-4">
          <select name="tipePromo" value={form.tipePromo} onChange={handleChange} className="w-full p-2 border rounded">
            <option>Diskon Persen</option>
            <option>Potongan Harga</option>
            <option>Bundling</option>
          </select>

          <input type="number" name="besarDiskon" value={form.besarDiskon} onChange={handleChange} placeholder="Besar Diskon" className="w-full p-2 border rounded" required />
        </div>

        <div className="flex gap-4">
          <input type="date" name="mulai" value={form.mulai} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="date" name="selesai" value={form.selesai} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <select name="status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded">
          <option>Aktif</option>
          <option>Nonaktif</option>
        </select>

        {/* Segmentasi Pelanggan */}
        <div className="border p-3 rounded bg-gray-50">
          <h3 className="font-semibold mb-2">Target Segmentasi</h3>

          <div className="mb-2">
            <label className="font-medium">Jenis Pelanggan:</label>
            <div className="flex gap-4 mt-1">
              <label><input type="checkbox" value="Perorangan" onChange={handleChange} checked={form.jenisPelanggan.includes('Perorangan')} /> Perorangan</label>
              <label><input type="checkbox" value="Instansi" onChange={handleChange} checked={form.jenisPelanggan.includes('Instansi')} /> Instansi</label>
              <label><input type="checkbox" value="Vendor" onChange={handleChange} checked={form.jenisPelanggan.includes('Vendor')} /> Vendor Event</label>
            </div>
          </div>

          <div className="mb-2">
            <label className="font-medium">Lokasi:</label>
            <input type="text" name="lokasi" value={form.lokasi} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Contoh: Jakarta, Bandung"/>
          </div>

          <div>
            <label className="font-medium">Kebutuhan:</label>
            <input type="text" name="kebutuhan" value={form.kebutuhan} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Contoh: Wedding, Office Catering"/>
          </div>
        </div>

        <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">Simpan Promo</button>
      </form>

      {/* Tabel List Promo */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Daftar Promo</h2>
        {campaigns.length === 0 ? (
          <p>Belum ada promo.</p>
        ) : (
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Tipe</th>
                <th className="p-2 border">Diskon</th>
                <th className="p-2 border">Segmentasi</th>
                <th className="p-2 border">Periode</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id}>
                  <td className="p-2 border">{c.namaPromo}</td>
                  <td className="p-2 border">{c.tipePromo}</td>
                  <td className="p-2 border">{c.besarDiskon}</td>
                  <td className="p-2 border">
                    {c.jenisPelanggan.join(", ")}<br />
                    {c.lokasi} | {c.kebutuhan}
                  </td>
                  <td className="p-2 border">{c.mulai} s/d {c.selesai}</td>
                  <td className="p-2 border">{c.status}</td>
                  <td className="p-2 border">
                    <button onClick={() => handleDelete(c.id)} className="text-red-500">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CampaignPage;
