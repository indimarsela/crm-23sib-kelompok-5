import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Artikel = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
    document.title = "AA Catering | Artikel";
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

  const articles = [
    {
      id: 1,
      title:
        "Cita Rasa Kasih di Hari Bahagia Ikhsan & Mutia bersama A.A Catering Sajikan Hidangan Spesial untuk Ribuan Tamu",
      summary:
        "Pekanbaru, 20 Oktober 2024 – pasangan Ikhsan dan Mutia menggelar resepsi pernikahan yang meriah di New Hotel Hollywood, Pekanbaru. Acara",
      image: "https://aacatering.co.id/wp-content/uploads/2024/11/jgvh.jpg",
      link: "https://aacatering.co.id/cita-rasa-kasih-di-hari-bahagia-ikhsan-mutia-bersama-a-a-catering-sajikan-hidangan-spesial-untuk-ribuan-tamu/",
    },
    {
      id: 2,
      title:
        "A.A CATERING Sajikan Lezatnya Kebersamaan di Syukuran Bhayangkari ke-72 di Aula Menara Dang Merdu BRK Syariah",
      summary:
        "Pekanbaru, 19 Oktober 2024 – A.A CATERING dengan bangga berperan dalam suksesnya acara syukuran peringatan Hari Kesatuan Gerak Bhayangkari yang",
      image: "https://aacatering.co.id/wp-content/uploads/2024/10/fvdvd.jpg",
      link: "https://aacatering.co.id/a-a-catering-sajikan-lezatnya-kebersamaan-di-syukuran-bhayangkari-ke-72-di-aula-menara-dang-merdu-brk-syariah/",
    },
    {
      id: 3,
      title:
        "A.A Catering Menjadi Pilihan Katering Utama Syarifah Darmiati Ida Gelar Grand Opening Galeri Umi",
      summary:
        "Pada tanggal 2 dan 4 Oktober 2024, A.A CATERING mendapatkan kehormatan besar dengan dipercaya kembali oleh Syarifah Darmiati Ida, istri",
      image: "https://aacatering.co.id/wp-content/uploads/2024/10/Untitled-1.jpg",
      link: "https://aacatering.co.id/a-a-catering-menjadi-pilihan-katering-utama-syarifah-darmiati-ida-gelar-grand-opening-galeri-umi/",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12">
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
                  active === item.path
                    ? "text-red-700 border-b-2 border-red-700 pb-1"
                    : "text-gray-700"
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

        {/* Mobile menu */}
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

      {/* Artikel Content */}
      <div className="pt-32">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Artikel</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
                <a href={item.link} className="text-red-700 font-medium hover:underline" target="_blank" rel="noreferrer">
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1b1b1b] text-white relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('/bg-footer-pattern.png')] bg-repeat opacity-10 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          {/* Logo & Deskripsi */}
          <div>
            <img src="/LOGO_AA.png" alt="Logo AA" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed text-gray-300">
              A.A CATERING berdiri sejak tahun 1998 di kota Padang dan membuka cabang di Pekanbaru pada 2010. Kami melayani kebutuhan catering untuk acara pernikahan, institusi, dan perkantoran dengan menu khas dan pelayanan profesional.
            </p>
          </div>

          {/* Alamat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">ALAMAT A.A CATERING</h3>
            <div className="text-sm text-gray-300 space-y-3">
              <div>
                <p className="font-semibold text-white">PEKANBARU</p>
                <p>Jl. H. Imam Munandar No. 88, Tangkerang Tengah, Marpoyan Damai, Pekanbaru, Riau</p>
                <p>📞 0853-6336-8882</p>
              </div>
              <div>
                <p className="font-semibold text-white mt-4">PADANG</p>
                <p>Jl. Suriname No. 28, Lubuk Begalung, Padang Utara, Padang</p>
                <p>📞 0853-6336-8882</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <iframe
              title="Lokasi AA Catering"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.692898636272!2d101.42762057496564!3d0.5119468637429456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aed3f8b3cd0d%3A0xf04cf3b3bc02c1a1!2sAA%20Catering!5e0!3m2!1sid!2sid!4v1719506743495!5m2!1sid!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md shadow"
            ></iframe>
          </div>
        </div>

        <div className="bg-[#111] text-center py-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} PT Angkasa Andalan Cita Rasa — <span className="text-white font-semibold">AA CATERING</span>. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Artikel;
