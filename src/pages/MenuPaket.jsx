import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MenuPaket() {

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



  useEffect(() => {
    document.title = "AA Catering | Menu & Paket"; // Set judul halaman
    window.scrollTo(0, 0); // Gulir ke atas halaman saat dimuat
  }, []);

  const [activeTab, setActiveTab] = useState("paket-pernikahan"); // State untuk tab aktif

  const menuCategories = [
    { id: "paket-pernikahan", name: "Paket Pernikahan", description: "Wujudkan pernikahan impian Anda dengan pilihan paket katering lengkap kami, mulai dari yang sederhana hingga mewah.", icon: "💍" },
    { id: "paket-korporat", name: "Paket Korporat", description: "Solusi katering profesional untuk berbagai acara bisnis Anda: rapat, seminar, peluncuran produk, atau gala dinner.", icon: "🏢" },
    { id: "menu-harian", name: "Menu Harian & Nasi Box", description: "Pilihan praktis dan lezat untuk kebutuhan makan harian individu, kantor, atau acara kecil dengan nasi box berkualitas.", icon: "🍱" },
    { id: "prasmanan-spesial", name: "Prasmanan Spesial", description: "Hidangan prasmanan dengan cita rasa autentik dan variasi istimewa, cocok untuk perayaan keluarga atau acara komunitas.", icon: "🍽️" },
    { id: "paket-tambahan", name: "Paket Tambahan", description: "Lengkapi kemeriahan acara Anda dengan aneka gubukan, snack, dessert table, dan layanan katering khusus lainnya.", icon: "🍰" },
  ];

  // Data dummy untuk menu dan paket dengan 3 pilihan per kategori, lengkap dengan URL gambar dummy
  const packagesData = {
    "paket-pernikahan": [
      {
        id: 1,
        name: "Paket Pernikahan Silver Elegance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7dwiC79qxFUDUkIXXim22qFsBdxUKet6DA&s",
        description: "Paket pernikahan sederhana namun tetap berkesan, ideal untuk perayaan intim.",
        details: [
          "Buffet utama untuk 300 pax",
          "3 pilihan lauk utama, 1 sup, 1 sayur",
          "Nasi putih, kerupuk, buah potong",
          "1 Gubukan pilihan (mis: Bakso)",
          "Minuman: Air Mineral & Es Teh",
        ],
        price: "Mulai Rp 28.000.000",
        link: "/kontak",
      },
      {
        id: 2,
        name: "Paket Pernikahan Gold Harmony",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzNjyf6Y8qTAFqhlywh2VjBQV-zY3csucAA&s",
        description: "Pilihan terfavorit dengan variasi hidangan lengkap dan dekorasi menawan.",
        details: [
          "Buffet utama untuk 500 pax",
          "5 pilihan lauk utama, 2 sup, 2 sayur",
          "Nasi putih, nasi goreng, kerupuk, aneka buah",
          "3 Gubukan pilihan (mis: Siomay, Zuppa Soup, Sate Ayam)",
          "Minuman: Jus, Soft Drink, Es Teh, Air Mineral",
        ],
        price: "Mulai Rp 45.000.000",
        link: "/kontak",
      },
      {
        id: 3,
        name: "Paket Pernikahan Platinum Grandeur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3odVpI9QLtKJAt7GCtl6Bou-dHqpL4JYn0w&s",
        description: "Paket paling mewah dengan hidangan premium dan layanan personalisasi.",
        details: [
          "Buffet utama untuk 800 pax ke atas",
          "7 pilihan lauk utama premium, 3 sup, 3 sayur",
          "Nasi putih, nasi goreng, nasi kebuli, aneka salad",
          "5 Gubukan pilihan (mis: Dimsum, Pasta Station, Kambing Guling)",
          "Dessert Corner, Coffee Bar, Free flow minuman premium",
          "Personalized menu tasting & Chef on-site",
        ],
        price: "Mulai Rp 75.000.000",
        link: "/kontak",
      },
    ],
    "paket-korporat": [
      {
        id: 4,
        name: "Paket Meeting AA Express",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyGCU0fTN8QuJ-Dh3-EExdm3P4OIVp0H-kw&s",
        description: "Solusi cepat dan praktis untuk kebutuhan rapat atau presentasi singkat Anda.",
        details: [
          "1x Coffee Break (2 snack)",
          "1x Makan Siang Nasi Box/Buffet Sederhana (3 lauk)",
          "Minuman: Kopi, Teh, Air Mineral",
          "Minimal 20 pax",
        ],
        price: "Mulai Rp 45.000/pax",
        link: "/kontak",
      },
      {
        id: 5,
        name: "Paket Seminar Business Class",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC60-a8SvOTG9CTrA31Y1PZHfF3grs6BrIQ&s",
        description: "Paket lengkap untuk seminar atau pelatihan, memastikan peserta tetap fokus dan berenergi.",
        details: [
          "2x Coffee Break (3 snack per break)",
          "1x Makan Siang Buffet (4 lauk, 1 sup, 1 sayur)",
          "Aneka dessert, buah potong",
          "Minuman: Aneka Jus, Kopi, Teh, Air Mineral",
          "Minimal 50 pax",
        ],
        price: "Mulai Rp 90.000/pax",
        link: "/kontak",
      },
      {
        id: 6,
        name: "Paket Gala Dinner Executive",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdSDng4HKRdTr0sYvj7I1XQeB9py64wXKgQ&s",
        description: "Malam kebersamaan yang mewah dengan hidangan premium dan layanan bintang lima.",
        details: [
          "Buffet mewah dengan 6 pilihan hidangan utama premium",
          "Aneka Appetizer, Soup, dan Dessert Bar",
          "Live Cooking Station (opsional)",
          "Layanan waiter profesional & dekorasi meja eksklusif",
          "Minuman: Free flow Soft Drink, Jus, Kopi, Teh, Air Mineral",
          "Minimal 100 pax",
        ],
        price: "Mulai Rp 180.000/pax",
        link: "/kontak",
      },
    ],
    "menu-harian": [
      {
        id: 7,
        name: "Nasi Box Nusantara Spesial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7dwiC79qxFUDUkIXXim22qFsBdxUKet6DA&s", // Menggunakan kembali gambar pertama
        description: "Nasi box komplit dengan pilihan menu khas Indonesia favorit.",
        details: [
          "Nasi putih",
          "Lauk Utama (mis: Ayam Goreng Kremes, Empal Daging)",
          "Lauk Pendamping (mis: Perkedel, Tahu Tempe)",
          "Sayur (mis: Urap, Capcay)",
          "Sambal, Kerupuk, Buah",
          "Minimal 15 box",
        ],
        price: "Mulai Rp 30.000/box",
        link: "/kontak",
      },
      {
        id: 8,
        name: "Catering Harian Sehat Premium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzNjyf6Y8qTAFqhlywh2VjBQV-zY3csucAA&s", // Menggunakan kembali gambar kedua
        description: "Menu katering harian bergizi seimbang dengan pilihan rendah kalori dan organik.",
        details: [
          "Nasi merah/organik",
          "Protein (mis: Grilled Salmon, Dada Ayam Panggang)",
          "Sayuran hijau rebus/kukus",
          "Salad dengan dressing sehat",
          "Buah segar",
          "Pengiriman harian (minimal 5 hari)",
        ],
        price: "Mulai Rp 45.000/hari",
        link: "/kontak",
      },
      {
        id: 9,
        name: "Paket Prasmanan Mini",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3odVpI9QLtKJAt7GCtl6Bou-dHqpL4JYn0w&s", // Menggunakan kembali gambar ketiga
        description: "Pilihan prasmanan ringkas untuk acara keluarga atau pertemuan kecil di rumah.",
        details: [
          "Buffet untuk 20-30 pax",
          "3 pilihan lauk utama, 1 sayur",
          "Nasi putih, kerupuk, sambal",
          "Buah potong",
          "Peralatan saji dipinjamkan",
        ],
        price: "Mulai Rp 65.000/pax",
        link: "/kontak",
      },
    ],
    "prasmanan-spesial": [
      {
        id: 10,
        name: "Prasmanan Jawa Klasik",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyGCU0fTN8QuJ-Dh3-EExdm3P4OIVp0H-kw&s", // Menggunakan kembali gambar keempat
        description: "Nikmati kehangatan hidangan khas Jawa dengan cita rasa otentik yang melegenda.",
        details: [
          "Nasi Putih, Nasi Kuning",
          "Ayam Goreng Kalasan, Nasi Liwet Solo, Gudeg",
          "Sambal Goreng Kentang Ati, Telur Balado",
          "Sayur Lodeh, Acar Kuning",
          "Jajanan Pasar, Wedang Ronde",
          "Minimal 50 pax",
        ],
        price: "Mulai Rp 80.000/pax",
        link: "/kontak",
      },
      {
        id: 11,
        name: "Prasmanan Khas Minang",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC60-a8SvOTG9CTrA31Y1PZHfF3grs6BrIQ&s", // Menggunakan kembali gambar kelima
        description: "Sajian lengkap masakan Minang yang kaya rempah dan pedasnya menggigit.",
        details: [
          "Nasi Putih",
          "Rendang Daging Sapi, Ayam Pop/Gulai Ayam",
          "Gulai Ikan Kakap, Dendeng Balado",
          "Sayur Daun Singkong, Perkedel",
          "Sambal Ijo, Kerupuk Jangek",
          "Minimal 50 pax",
        ],
        price: "Mulai Rp 85.000/pax",
        link: "/kontak",
      },
      {
        id: 12,
        name: "Prasmanan BBQ & Grill",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdSDng4HKRdTr0sYvj7I1XQeB9py64wXKgQ&s", // Menggunakan kembali gambar keenam
        description: "Pengalaman makan prasmanan dengan aneka hidangan bakar dan panggang yang lezat.",
        details: [
          "Pilihan Daging (mis: Sate Ayam, Beef Bulgogi, Lamb Chops)",
          "Pilihan Seafood (mis: Ikan Bakar, Udang Bakar)",
          "Aneka Saus BBQ, Kentang Goreng, Salad Bar",
          "Live Grill Station (opsional)",
          "Minimal 70 pax",
        ],
        price: "Mulai Rp 120.000/pax",
        link: "/kontak",
      },
    ],
    "paket-tambahan": [
      {
        id: 13,
        name: "Gubukan Spesial Pilihan",
        image: "https://img.foodspot.co.id/restaurant//bogacatering2/boga-menu-dessert.jpg", // Menggunakan gambar ketujuh
        description: "Tambahkan gubukan favorit untuk pengalaman kuliner yang lebih seru di acara Anda.",
        details: [
          "Pilihan: Bakso Malang, Siomay Bandung, Pempek Palembang, Cireng Rujak, Es Doger",
          "Peralatan saji dan staf di lokasi",
          "Minimal order 100 porsi per gubukan",
        ],
        price: "Mulai Rp 25.000/porsi",
        link: "/kontak",
      },
      {
        id: 14,
        name: "Sweet Dessert Table",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65luTqLgwnTpflrEY_p3laIr7pR3sogH1KQ&s", // Menggunakan gambar kedelapan
        description: "Meja dessert yang cantik dan menggiurkan, cocok untuk melengkapi setiap perayaan.",
        details: [
          "Aneka Cupcakes, Macaroon, Mini Pastries",
          "Puding, Buah Potong Segar",
          "Cokelat Fountain (opsional)",
          "Dekorasi meja dessert tematik",
          "Minimal 50 pax",
        ],
        price: "Mulai Rp 40.000/pax",
        link: "/kontak",
      },
      {
        id: 15,
        name: "Paket Snack Box Komplit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7dwiC79qxFUDUkIXXim22qFsBdxUKet6DA&s", // Menggunakan kembali gambar pertama lagi untuk melengkapi
        description: "Snack box praktis dan lezat untuk rapat, study tour, atau acara santai.",
        details: [
          "3-4 jenis snack (mis: kue basah, gorengan, roti)",
          "Air mineral kemasan",
          "Tisu",
          "Minimal 20 box",
        ],
        price: "Mulai Rp 20.000/box",
        link: "/kontak",
      },
    ],
  };

  return (
    <>
      {/* Header */}
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

      <div className="pt-24 pb-20 bg-gray-100 min-h-screen"> {/* Adjusted padding-top */}
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-red-700 text-center mb-6">
            Menu & Paket Katering Terbaik Kami
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Temukan solusi katering yang sempurna untuk setiap acara Anda, mulai dari pernikahan, acara korporat, hingga kebutuhan harian. Kami siap menyajikan pengalaman kuliner tak terlupakan di Pekanbaru dan Padang.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md
                  ${activeTab === category.id
                    ? "bg-red-700 text-white transform scale-105" // Efek saat aktif
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:text-red-600" // Efek saat hover
                  }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <div className="text-center text-gray-700 mb-12 p-6 bg-white rounded-lg shadow-inner max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-600 mb-3">
              {menuCategories.find(cat => cat.id === activeTab)?.name}
            </h3>
            <p className="text-base leading-relaxed">
              {menuCategories.find(cat => cat.id === activeTab)?.description}
            </p>
          </div>

          {/* Content for Active Tab (Card Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {packagesData[activeTab]?.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 group">
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white leading-tight">{item.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1 text-sm">
                      {item.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="truncate">{detail}</li>
                      ))}
                      {item.details.length > 3 && (
                        <li className="text-xs text-gray-500 italic">...dan banyak lagi</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                    <span className="text-xl font-bold text-red-700">{item.price}</span>
                    <Link
                      to={item.link} // Ini akan mengarahkan ke halaman kontak atau detail, bisa diubah ke DetailPesanan jika ada logikanya.
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-colors duration-200"
                    >
                      Detail & Pesan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action di bawah daftar menu */}
          <div className="mt-20 text-center bg-red-800 text-white p-10 rounded-xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Belum Menemukan yang Tepat?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Kami juga melayani kustomisasi menu dan paket sesuai kebutuhan spesifik acara Anda. Jangan ragu untuk berdiskusi dengan tim kami di Pekanbaru atau Padang!
            </p>
            <Link
              to="/kontak"
              className="bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}