import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function TentangKami() {
  const [active, setActive] = useState("/tentang-kami");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Beranda", path: "/"},
    { label: "Tentang Kami", path: "/tentang-kami" },
    { label: "Menu & Paket", path: "/menu-paket" },
    { label: "Galeri", path: "/galeri" },
    { label: "Artikel", path: "/artikel" },
    { label: "Kontak", path: "/kontak" },
  ];

  useEffect(() => {
    document.title = "Tentang Kami - AA Catering";
  }, []);

  return (
    <div className="bg-white text-gray-800">
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

      <section className="pt-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <img
              src="/tentangkami.png"
              alt="Tim AA Catering"
              className="w-[300px] h-[300px] object-cover rounded-full"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-6 text-red-700">Tentang AA Catering</h1>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              <strong>AA Catering</strong> merupakan layanan katering profesional yang berdiri sejak <strong>2010</strong>, dan telah dipercaya untuk menangani berbagai jenis acara seperti pernikahan, corporate gathering, event kampus, dan kebutuhan harian instansi.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Dengan komitmen pada <strong>kualitas, cita rasa, dan pelayanan</strong>, kami menyajikan makanan terbaik dengan bahan baku segar dan tim berpengalaman. Kepercayaan pelanggan adalah prioritas kami dalam setiap sajian.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Visi kami adalah menjadi solusi catering terdepan yang <strong>“Selalu Di Depan”</strong> dalam rasa dan layanan.
            </p>
          </div>
        </div>

        <div className="bg-[#fef6f6] p-10 rounded-xl mb-20">
          <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Visi & Misi Kami</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="font-semibold text-red-600 mb-2">Visi</h3>
              <p>
                Menjadi penyedia jasa katering terbaik yang mengutamakan kualitas rasa, kebersihan, dan kepuasan pelanggan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-2">Misi</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Menggunakan bahan makanan segar dan berkualitas tinggi</li>
                <li>Memberikan pelayanan cepat, ramah, dan profesional</li>
                <li>Menghadirkan cita rasa nusantara yang otentik</li>
                <li>Terus berinovasi dalam variasi menu dan layanan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1b1b1b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-footer-pattern.png')] bg-repeat opacity-10 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <img src="/LOGO_AA.png" alt="Logo AA" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed text-gray-300">
              A.A CATERING berdiri sejak tahun 1998 di kota Padang dan membuka cabang di Pekanbaru pada 2010. Kami melayani kebutuhan catering untuk acara pernikahan, institusi, dan perkantoran dengan menu khas dan pelayanan profesional.
            </p>
          </div>

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
}
