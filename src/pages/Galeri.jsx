import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Galeri() {

  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
    document.title = "AA Catering | Menu & Paket";
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Kami", path: "/tentang" },
    { label: "Menu & Paket", path: "/menu-paket" },
    { label: "Galeri", path: "/galeri" },
    { label: "Artikel", path: "/artikel" },
    { label: "Kontak", path: "/kontak" },
  ];

  const [activeTab, setActiveTab] = useState("paket-pernikahan");


  useEffect(() => {
    document.title = "Galeri - AA Catering";
  }, []);

  const daftarMenu = [
    { id: 1, nama: "Zupa Sup", harga: 25000, gambar: "/menu1.jpg" },
    { id: 2, nama: "Sup Jagung", harga: 30000, gambar: "/menu2.jpg" },
    { id: 3, nama: "Sup Daging", harga: 28000, gambar: "/menu3.jpg" },
    { id: 4, nama: "Sup Iga", harga: 150000, gambar: "/menu4.jpg" },
    { id: 5, nama: "Sambal Goreng", harga: 20000, gambar: "/menu5.jpg" },
    { id: 6, nama: "Rolade Daging", harga: 35000, gambar: "/menu6.jpg" },
    { id: 7, nama: "Rendang", harga: 27000, gambar: "/menu7.jpg" },
    { id: 8, nama: "Rawon", harga: 1000000, gambar: "/menu8.jpg" },
    { id: 9, nama: "Pindang Iga", harga: 50000, gambar: "/menu9.jpg" },
  ];

  // State
  const [keranjang, setKeranjang] = useState([]);
  const [lihatKeranjang, setLihatKeranjang] = useState(false);
  const [bankPilihan, setBankPilihan] = useState("");
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [struk, setStruk] = useState(null); // Data struk (object)
  const [history, setHistory] = useState([]); // Semua transaksi sukses
  const [modalInfo, setModalInfo] = useState(null); // Untuk popup poin & member

  const keranjangRef = useRef(null);

  // Fungsi tambah ke keranjang + animasi
  const tambahKeKeranjang = (menu, e) => {
    setKeranjang((prev) => {
      const idx = prev.findIndex((i) => i.id === menu.id);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx].jumlah += 1;
        return updated;
      }
      return [...prev, { ...menu, jumlah: 1 }];
    });
    animateFlyToCart(e);
  };

  const animateFlyToCart = (e) => {
    const img = e.currentTarget.closest(".card").querySelector("img");
    const cartIcon = keranjangRef.current;
    if (!img || !cartIcon) return;
    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
    const clone = img.cloneNode();
    Object.assign(clone.style, {
      position: "fixed",
      left: `${imgRect.left}px`,
      top: `${imgRect.top}px`,
      width: `${imgRect.width}px`,
      height: `${imgRect.height}px`,
      zIndex: 1000,
      transition: "all 0.8s ease-in-out",
    });
    document.body.appendChild(clone);
    requestAnimationFrame(() => {
      Object.assign(clone.style, {
        left: `${cartRect.left + cartRect.width / 2 - 25}px`,
        top: `${cartRect.top + cartRect.height / 2 - 25}px`,
        width: "40px",
        height: "40px",
        opacity: 0.5,
      });
    });
    setTimeout(() => document.body.removeChild(clone), 800);
  };

  // Manipulasi keranjang
  const hapusDariKeranjang = (id) => {
    setKeranjang((prev) => prev.filter((item) => item.id !== id));
    setCheckoutItems((prev) => prev.filter((item) => item !== id));
  };
  const toggleCheckoutItem = (id) => {
    setCheckoutItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const tambahJumlah = (id) => {
    setKeranjang((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, jumlah: item.jumlah + 1 } : item
      )
    );
  };
  const kurangJumlah = (id) => {
    setKeranjang((prev) =>
      prev.map((item) =>
        item.id === id && item.jumlah > 1
          ? { ...item, jumlah: item.jumlah - 1 }
          : item
      )
    );
  };

  // Total harga yg dipilih untuk checkout
  const totalHarga = keranjang
    .filter((item) => checkoutItems.includes(item.id))
    .reduce((sum, item) => sum + item.harga * item.jumlah, 0);

  // Tentukan membership berdasarkan total belanja kumulatif dan transaksi
  const getMembership = (totalCum, transaksiCount) => {
    if (totalCum >= 2000000 && transaksiCount >= 8) return "Platinum";
    if (totalCum >= 1000000 && transaksiCount >= 5) return "Gold";
    if (totalCum >= 500000 && transaksiCount >= 3) return "Silver";
    return "Bronze";
  };

  // Proses checkout & generate struk dinamis + update history + modal
  const prosesPembayaran = () => {
    if (!bankPilihan || checkoutItems.length === 0) return;

    // Data detail transaksi sekarang
    const itemsCheckout = keranjang.filter((item) => checkoutItems.includes(item.id));
    const totalTransaksi = totalHarga;
    const poinDiperoleh = Math.floor(totalTransaksi / 10000);

    // Update history transaksi (simulate integrasi CRM)
    const newHistory = [...history, { items: itemsCheckout, total: totalTransaksi, poin: poinDiperoleh }];
    setHistory(newHistory);

    // Hitung akumulasi total dan transaksi
    const totalCum = newHistory.reduce((acc, t) => acc + t.total, 0);
    const transaksiCount = newHistory.length;
    const membershipLevel = getMembership(totalCum, transaksiCount);

    // Generate data struk untuk ditampilkan (dinamis)
    setStruk({
      items: itemsCheckout,
      total: totalTransaksi,
      poin: poinDiperoleh,
      membership: membershipLevel,
      totalCum,
      transaksiCount,
    });

    // Hapus item yg dibayar dari keranjang
    setKeranjang((prev) => prev.filter((item) => !checkoutItems.includes(item.id)));
    setCheckoutItems([]);
    setBankPilihan("");

    // Tampilkan modal info poin & membership
    setModalInfo({
      poin: poinDiperoleh,
      membership: membershipLevel,
    });
  };

  return (
    <div className="bg-white text-gray-800 relative w-full min-h-screen pb-20">

    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center" onClick={() => setActive("/")}> 
            <img src="/LOGO_AA.png" alt="Logo AA Catering" className="h-16" />
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-semibold items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setActive(item.path)}
                className={`hover:text-red-600 transition-all duration-200 ${
                  active === item.path ? "text-red-700 border-b-2 border-red-700 pb-1" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-4 text-white bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full shadow font-medium transition-all duration-200"
            >
              Login
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg pb-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center gap-4 text-base font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setActive(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 w-full text-center hover:bg-gray-100 ${
                    active === item.path ? "text-red-700 font-bold" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 text-white bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full shadow font-medium transition-all duration-200"
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Tombol keranjang */}
      {!lihatKeranjang && (
        <button
          onClick={() => setLihatKeranjang(true)}
          ref={keranjangRef}
          className="fixed top-6 right-6 z-50 text-red-600 text-4xl hover:scale-110 transition"
        >
          🛒
          {keranjang.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {keranjang.reduce((sum, item) => sum + item.jumlah, 0)}
            </span>
          )}
        </button>
      )}

      {/* Tombol kembali */}
      {lihatKeranjang && (
        <button
          onClick={() => {
            setLihatKeranjang(false);
            setStruk(null);
            setModalInfo(null);
          }}
          className="fixed top-6 left-6 z-50 bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
        >
          ⬅ Kembali
        </button>
      )}

      {/* Judul */}
      <div className="pt-8 text-center">
        <h1 className="text-3xl font-bold text-red-700 tracking-wide">AA Catering</h1>
      </div>

      <section className="pt-10 px-4 md:px-8 max-w-7xl mx-auto w-full min-h-screen">
        {!lihatKeranjang ? (
          <>
            <h1 className="text-4xl font-bold mb-4 text-red-700 text-center">Galeri Kegiatan & Menu</h1>
            <p className="text-lg text-gray-600 text-center mb-10">Pilih menu yang kamu suka dari AA Catering.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {daftarMenu.map((menu) => (
                <div key={menu.id} className="card border rounded-xl shadow hover:shadow-lg transition p-4">
                  <img src={menu.gambar} alt={menu.nama} className="w-full h-60 object-cover rounded-lg mb-3" />
                  <h3 className="text-xl font-semibold text-red-700">{menu.nama}</h3>
                  <p className="text-gray-700 mb-2">Rp {menu.harga.toLocaleString()}</p>
                  <button
                    onClick={(e) => tambahKeKeranjang(menu, e)}
                    className="bg-red-600 text-white text-xl px-4 py-2 rounded-full hover:bg-red-700 transition"
                  >
                    🛒
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto min-h-screen">
            {/* Jika ada struk tampilkan struk */}
            {struk ? (
              <div className="bg-white rounded shadow-md p-6 border text-center space-y-6">
                <h2 className="text-2xl font-bold text-red-700">Struk Pembayaran</h2>

                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-red-100">
                      <th className="border px-4 py-2">Nama Menu</th>
                      <th className="border px-4 py-2">Harga</th>
                      <th className="border px-4 py-2">Jumlah</th>
                      <th className="border px-4 py-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {struk.items.map((item) => (
                      <tr key={item.id} className="text-center">
                        <td className="border px-4 py-2">{item.nama}</td>
                        <td className="border px-4 py-2">Rp {item.harga.toLocaleString()}</td>
                        <td className="border px-4 py-2">{item.jumlah}</td>
                        <td className="border px-4 py-2">Rp {(item.harga * item.jumlah).toLocaleString()}</td>
                      </tr>
                    ))}
                    <tr className="font-bold text-red-700 text-lg">
                      <td colSpan={3} className="border px-4 py-2 text-right">Total</td>
                      <td className="border px-4 py-2">Rp {struk.total.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>

                <button
                  onClick={() => {
                    setModalInfo({
                      poin: struk.poin,
                      membership: struk.membership,
                    });
                    setStruk(null);
                    setLihatKeranjang(false);
                  }}
                  className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold"
                >
                  Selesai
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-red-700 text-center mb-6">🛒 Keranjang Saya</h2>
                {keranjang.length === 0 ? (
                  <p className="text-center text-gray-500">Keranjang masih kosong.</p>
                ) : (
                  <div className="space-y-4">
                    {keranjang.map((item) => (
                      <div key={item.id} className="flex items-center justify-between border p-4 rounded shadow-sm">
                        <input
                          type="checkbox"
                          checked={checkoutItems.includes(item.id)}
                          onChange={() => toggleCheckoutItem(item.id)}
                          className="mr-3"
                        />
                        <img src={item.gambar} alt={item.nama} className="w-20 h-20 object-cover rounded mr-4" />
                        <div className="flex-1">
                          <h4 className="font-bold text-red-700">{item.nama}</h4>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => kurangJumlah(item.id)}
                              disabled={item.jumlah <= 1}
                              className={`px-2 py-1 rounded-full text-white transition ${
                                item.jumlah <= 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
                              }`}
                            >
                              -
                            </button>
                            <span className="px-3">{item.jumlah}</span>
                            <button
                              onClick={() => tambahJumlah(item.id)}
                              className="px-2 py-1 rounded-full bg-green-600 hover:bg-green-700 text-white transition"
                            >
                              +
                            </button>
                          </div>
                          <p className="mt-1">Total: Rp {(item.harga * item.jumlah).toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => hapusDariKeranjang(item.id)}
                          className="text-red-500 hover:text-red-700 transition text-xl"
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {checkoutItems.length > 0 && (
                  <div className="bg-white rounded shadow-md p-6 border space-y-4 mt-6">
                    <div className="text-xl font-semibold text-center text-red-700">
                      Total: Rp {totalHarga.toLocaleString()}
                    </div>
                    <select
                      value={bankPilihan}
                      onChange={(e) => setBankPilihan(e.target.value)}
                      className="w-full border px-4 py-2 rounded focus:outline-none"
                    >
                      <option value="">-- Pilih Bank Pembayaran --</option>
                      <option value="BCA - 1234567890 a.n AA CATERING">BCA</option>
                      <option value="Mandiri - 9876543210 a.n AA CATERING">Mandiri</option>
                      <option value="BRI - 1122334455 a.n AA CATERING">BRI</option>
                      <option value="Kartu Kredit - Visa / MasterCard">Kartu Kredit</option>
                    </select>
                    <button
                      onClick={prosesPembayaran}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition"
                    >
                      Checkout Sekarang
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </section>

      {/* Modal info poin dan membership */}
      {modalInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 text-center shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Transaksi Berhasil!</h2>
            <p className="mb-2 text-lg">
              🎉 Anda mendapatkan <strong>{modalInfo.poin}</strong> poin dari pembelian ini.
            </p>
            <p className="mb-4 text-lg">
              Status membership Anda sekarang adalah: <strong>{modalInfo.membership}</strong>
            </p>
            <button
              onClick={() => setModalInfo(null)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Styles animasi sederhana */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}
