import React, { useState, useEffect } from 'react';

const daftarMenu = [
  { nama: 'Nasi Kotak Ayam', harga: 25000 },
  { nama: 'Nasi Kotak Rendang', harga: 30000 },
  { nama: 'Snack Box', harga: 20000 },
  { nama: 'Tumpeng Mini', harga: 150000 },
  { nama: 'Paket Prasmanan', harga: 500000 },
];

const daftarJumlah = Array.from({ length: 10 }, (_, i) => i + 1);

const metodePembayaranOptions = [
  'Bank BCA',
  'Bank Mandiri',
  'Bank BNI',
  'GoPay',
  'OVO',
  'Dana',
  'Cash',
];

const OrderForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    noHP: '',
    alamat: '',
    catatan: '',
    metodePembayaran: '',
  });

  // Array menu pesanan, tiap item: {menu, jumlah, harga}
  const [menus, setMenus] = useState([{ menu: '', jumlah: '', harga: 0 }]);

  const [pesanan, setPesanan] = useState([]);
  const [notifikasi, setNotifikasi] = useState('');
  const [totalBayar, setTotalBayar] = useState(0);

  // Update formData biasa
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Update menu/ jumlah, dan otomatis set harga dari menu terpilih
  const handleMenuChange = (index, field, value) => {
    const updatedMenus = [...menus];
    if (field === 'menu') {
      const menuObj = daftarMenu.find(m => m.nama === value);
      updatedMenus[index].menu = value;
      updatedMenus[index].harga = menuObj ? menuObj.harga : 0;
    } else if (field === 'jumlah') {
      updatedMenus[index].jumlah = value;
    }
    setMenus(updatedMenus);
  };

  // Tambah baris menu baru
  const addMenuRow = () => {
    setMenus([...menus, { menu: '', jumlah: '', harga: 0 }]);
  };

  // Hapus baris menu
  const removeMenuRow = (index) => {
    if (menus.length === 1) return;
    const updatedMenus = menus.filter((_, i) => i !== index);
    setMenus(updatedMenus);
  };

  // Hitung total bayar ketika menus berubah
  useEffect(() => {
    const total = menus.reduce((acc, item) => {
      const qty = parseInt(item.jumlah, 10);
      const harga = parseInt(item.harga, 10);
      if (!isNaN(qty) && !isNaN(harga)) {
        return acc + (qty * harga);
      }
      return acc;
    }, 0);
    setTotalBayar(total);
  }, [menus]);

  // Submit validasi & simpan
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.metodePembayaran) {
      alert('Mohon pilih metode pembayaran.');
      return;
    }

    for (let i = 0; i < menus.length; i++) {
      if (!menus[i].menu || !menus[i].jumlah) {
        alert(`Menu dan jumlah harus diisi pada baris ke-${i + 1}`);
        return;
      }
    }

    setPesanan(prev => [...prev, { ...formData, menus, totalBayar }]);

    setFormData({ nama: '', noHP: '', alamat: '', catatan: '', metodePembayaran: '' });
    setMenus([{ menu: '', jumlah: '', harga: 0 }]);
    setTotalBayar(0);
    setNotifikasi('✅ Pesanan berhasil dicatat!');
    setTimeout(() => setNotifikasi(''), 3500);
  };

  // Styling (sama seperti sebelumnya, bisa disesuaikan)
  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '32px 24px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: 'border-box',
  };

  const labelStyle = {
    fontWeight: '600',
    fontSize: '1rem',
    marginBottom: '6px',
    display: 'block',
    color: '#222',
  };

  const inputStyle = {
    padding: '14px 16px',
    marginBottom: '20px',
    width: '100%',
    fontSize: '1rem',
    borderRadius: '12px',
    border: '1.5px solid #ccc',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '14px 26px',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '14px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    width: '100%',
    marginTop: '12px',
  };

  const addButtonStyle = {
    ...buttonStyle,
    width: 'auto',
    padding: '10px 18px',
    fontSize: '1rem',
    marginTop: '0',
    backgroundColor: '#28a745',
    marginLeft: '8px',
  };

  const removeButtonStyle = {
    padding: '6px 12px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    cursor: 'pointer',
    marginLeft: '8px',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '28px', textAlign: 'center', color: '#003d80', fontWeight: '700', letterSpacing: '1.2px' }}>
        Pencatatan Otomatis Pemesanan
      </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nama" style={labelStyle}>Nama</label>
        <input
          id="nama"
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
          placeholder="Masukkan nama lengkap"
          style={inputStyle}
        />

        <label htmlFor="noHP" style={labelStyle}>No. HP</label>
        <input
          id="noHP"
          type="tel"
          name="noHP"
          value={formData.noHP}
          onChange={handleChange}
          required
          placeholder="0812xxxxxxx"
          style={inputStyle}
        />

        <label htmlFor="alamat" style={labelStyle}>Alamat</label>
        <input
          id="alamat"
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          required
          placeholder="Alamat lengkap pengiriman"
          style={inputStyle}
        />

        <label style={labelStyle}>Menu & Jumlah</label>

        {menus.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '18px', gap: '12px' }}>
            <select
              value={item.menu}
              onChange={(e) => handleMenuChange(index, 'menu', e.target.value)}
              required
              style={{ ...selectStyle, flex: '3' }}
            >
              <option value="">-- Pilih Menu --</option>
              {daftarMenu.map((menu, i) => (
                <option key={i} value={menu.nama}>
                  {menu.nama} (Rp {menu.harga.toLocaleString('id-ID')})
                </option>
              ))}
            </select>

            <select
              value={item.jumlah}
              onChange={(e) => handleMenuChange(index, 'jumlah', e.target.value)}
              required
              style={{ ...selectStyle, flex: '1' }}
            >
              <option value="">-- Jumlah --</option>
              {daftarJumlah.map(jml => (
                <option key={jml} value={jml}>{jml}</option>
              ))}
            </select>

            <input
              readOnly
              value={item.harga ? `Rp ${item.harga.toLocaleString('id-ID')}` : ''}
              style={{
                flex: '2',
                padding: '14px 16px',
                fontSize: '1rem',
                borderRadius: '12px',
                border: '1.5px solid #ccc',
                backgroundColor: '#f5f5f5',
                color: '#555',
                textAlign: 'center',
                cursor: 'default',
              }}
              placeholder="Harga"
            />

            {menus.length > 1 && (
              <button
                type="button"
                onClick={() => removeMenuRow(index)}
                style={removeButtonStyle}
                title="Hapus menu ini"
              >
                ×
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addMenuRow} style={addButtonStyle}>+ Tambah Menu</button>

        <label htmlFor="catatan" style={{ ...labelStyle, marginTop: '28px' }}>Catatan Tambahan</label>
        <input
          id="catatan"
          type="text"
          name="catatan"
          value={formData.catatan}
          onChange={handleChange}
          placeholder="Misal: jangan pakai sambal"
          style={inputStyle}
        />

        <label htmlFor="metodePembayaran" style={labelStyle}>Metode Pembayaran</label>
        <select
          id="metodePembayaran"
          name="metodePembayaran"
          value={formData.metodePembayaran}
          onChange={handleChange}
          required
          style={selectStyle}
        >
          <option value="">-- Pilih Metode Pembayaran --</option>
          {metodePembayaranOptions.map((metode, i) => (
            <option key={i} value={metode}>{metode}</option>
          ))}
        </select>

        <div
          style={{
            marginTop: '24px',
            fontWeight: '700',
            fontSize: '1.2rem',
            color: '#0056b3',
            textAlign: 'right',
          }}
        >
          Total Pembayaran: Rp {totalBayar.toLocaleString('id-ID')}
        </div>

        <button type="submit" style={buttonStyle}>Simpan Pesanan</button>
      </form>

      {notifikasi && (
        <p
          style={{
            marginTop: '24px',
            padding: '14px',
            backgroundColor: '#d4edda',
            borderRadius: '10px',
            color: '#155724',
            fontWeight: '700',
            textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          {notifikasi}
        </p>
      )}

      {pesanan.length > 0 && (
        <div
          style={{
            marginTop: '48px',
            overflowX: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0 8px',
              fontSize: '0.95rem',
              minWidth: '750px',
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                    borderTopLeftRadius: '12px',
                  }}
                >
                  No
                </th>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                  }}
                >
                  Nama
                </th>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                  }}
                >
                  No. HP
                </th>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                  }}
                >
                  Alamat
                </th>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                  }}
                >
                  Menu & Jumlah
                </th>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                  }}
                >
                  Total Harga
                </th>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                  }}
                >
                  Metode Pembayaran
                </th>
                <th
                  style={{
                    backgroundColor: '#0056b3',
                    color: 'white',
                    padding: '14px 12px',
                    textAlign: 'left',
                    fontWeight: '700',
                    borderTopRightRadius: '12px',
                  }}
                >
                  Catatan
                </th>
              </tr>
            </thead>
            <tbody>
              {pesanan.map((item, index) => (
                <tr
                  key={index}
                  style={{ backgroundColor: '#f9faff', borderRadius: '10px' }}
                >
                  <td style={{ padding: '14px 12px', fontWeight: '600', color: '#0056b3' }}>
                    {index + 1}
                  </td>
                  <td style={{ padding: '14px 12px' }}>{item.nama}</td>
                  <td style={{ padding: '14px 12px' }}>{item.noHP}</td>
                  <td style={{ padding: '14px 12px' }}>{item.alamat}</td>
                  <td style={{ padding: '14px 12px' }}>
                    <ul style={{ margin: 0, paddingLeft: '18px' }}>
                      {item.menus.map((m, i) => (
                        <li key={i}>
                          {m.menu} x {m.jumlah} (Rp {(m.harga * m.jumlah).toLocaleString('id-ID')})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ padding: '14px 12px', fontWeight: '700', color: '#0056b3' }}>
                    Rp {item.totalBayar.toLocaleString('id-ID')}
                  </td>
                  <td style={{ padding: '14px 12px' }}>{item.metodePembayaran}</td>
                  <td style={{ padding: '14px 12px' }}>{item.catatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
