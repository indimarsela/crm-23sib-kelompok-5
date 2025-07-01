import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFacebookF, // Untuk ikon Facebook
  FaInstagram, // Untuk ikon Instagram
  FaWhatsapp   // Untuk ikon WhatsApp
} from 'react-icons/fa'; // Pastikan Anda sudah menginstal react-icons: npm install react-icons

export default function HomeCustomer() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [slide, setSlide] = useState(0);
  const [testiSlide, setTestiSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mobile menu

  // Memastikan gambar-gambar ini ada di folder public Anda
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"]; 

  const testimonials = [
    {
      quote: "AA Catering membuat acara pernikahan kami sempurna! Makanan super lezat dan pelayanan timnya sangat ramah serta profesional. Sangat direkomendasikan!",
      author: "Bapak & Ibu Susanto",
      title: "Klien Pernikahan",
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Testi1" // Link gambar dummy unik 1
    },
    {
      quote: "Untuk acara korporat kami, AA Catering selalu menjadi pilihan utama. Mereka selalu tepat waktu, porsi pas, dan variasi menunya selalu inovatif.",
      author: "Ibu Rahma Dewi",
      title: "Manager Event, PT. Maju Jaya",
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Testi2" // Link gambar dummy unik 2
    },
    {
      quote: "Pesan katering untuk pengajian di rumah, rasanya otentik dan harganya sangat bersahabat. Semua tamu memuji masakannya!",
      author: "Bapak Ahmad",
      title: "Pelanggan Individual",
      image: "https://via.placeholder.com/150/5733FF/FFFFFF?text=Testi3" // Link gambar dummy unik 3
    },
  ];

  // Data dummy untuk paket favorit
  const featuredPackages = [
    {
      id: 1,
      name: "Paket Pernikahan Gold Harmony",
      description: "Pilihan terfavorit dengan variasi hidangan lengkap dan dekorasi menawan.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzNjyf6Y8qTAFqhlywh2VjBQV-zY3csucAA&s", // Contoh gambar dari URL eksternal
      link: "/menu-paket"
    },
    {
      id: 2,
      name: "Paket Gala Dinner Executive",
      description: "Malam kebersamaan yang mewah dengan hidangan premium dan layanan bintang lima.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdSDng4HKRdTr0sYvj7I1XQeB9py64wXKgQ&s", // Contoh gambar dari URL eksternal
      link: "/menu-paket"
    },
    {
      id: 3,
      name: "Nasi Box Nusantara Spesial",
      description: "Nasi box komplit dengan pilihan menu khas Indonesia favorit, praktis & lezat.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7dwiC79qxFUDUkIXXim22qFsBdxUKet6DA&s", // Contoh gambar dari URL eksternal
      link: "/menu-paket"
    },
  ];


  useEffect(() => {
    document.title = "AA Catering | Beranda";

    const heroInterval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Ganti slide setiap 5 detik

    const testiInterval = setInterval(() => {
      setTestiSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Ganti testimoni setiap 6 detik

    return () => {
      clearInterval(heroInterval);
      clearInterval(testiInterval);
    };
  }, [images.length, testimonials.length]);

  // Data untuk bagian "Mengapa Pilih Kami" dengan link gambar
  const whyChooseUsItems = [
    { 
      image: "https://via.placeholder.com/100/FF0000/FFFFFF?text=Quality", // Link gambar dummy unik 1
      title: "Kualitas & Halal Terjamin", 
      desc: "Komitmen pada bahan baku segar pilihan, diolah oleh koki berpengalaman dengan sertifikasi MUI dan ISO 22000 untuk standar tertinggi." 
    },
    { 
      image: "https://via.placeholder.com/100/00FF00/FFFFFF?text=Delivery", // Link gambar dummy unik 2
      title: "Distribusi Tepat Waktu", 
      desc: "Jaringan logistik yang kuat dan armada modern menjamin pesanan Anda tiba tepat waktu dan dalam kondisi prima, di seluruh area Pekanbaru dan Padang." 
    },
    { 
      image: "https://via.placeholder.com/100/0000FF/FFFFFF?text=Pro", // Link gambar dummy unik 3
      title: "Pelayanan Berpengalaman", 
      desc: "Tim profesional kami siap melayani setiap kebutuhan katering Anda dari perencanaan hingga pelaksanaan, dengan pengalaman lebih dari 45 tahun sejak 1978." 
    },
  ];

  // Data untuk bagian "Spesialisasi Kami" dengan link gambar
  const specializationItems = [
    { 
      image: "https://via.placeholder.com/100/FFFF00/000000?text=Wedding", // Link gambar dummy unik 4
      title: "Pernikahan Impian", 
      desc: "Wujudkan hari bahagia Anda dengan pilihan menu prasmanan, gubukan, dan layanan lengkap yang berkesan untuk setiap tamu." 
    },
    { 
      image: "https://via.placeholder.com/100/00FFFF/000000?text=Corporate", // Link gambar dummy unik 5
      title: "Acara Korporat Profesional", 
      desc: "Solusi katering untuk rapat, seminar, peluncuran produk, hingga gala dinner. Fleksibel dan menyesuaikan kebutuhan bisnis Anda." 
    },
    { 
      image: "https://via.placeholder.com/100/FF00FF/000000?text=Social", // Link gambar dummy unik 6
      title: "Acara Sosial & Harian", 
      desc: "Dari syukuran keluarga, arisan, hingga kebutuhan nasi box harian kantor. Praktis, lezat, dan selalu tepat porsi." 
    },
  ];


  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Tentang Kami", path: "/tentang" },
    { label: "Menu & Paket", path: "/menu-paket" },
    { label: "Galeri", path: "/galeri" },
    { label: "Artikel", path: "/artikel" },
    { label: "Kontak", path: "/kontak" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
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

          {/* Mobile Menu Button */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg pb-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center gap-4 text-base font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setActive(item.path);
                    setIsMobileMenuOpen(false); // Tutup menu setelah klik
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

      {/* HERO SLIDER (HANYA GAMBAR, TIDAK ADA OVERLAY TEKS) */}
      <section className="pt-32 relative w-full h-[450px] md:h-[550px] overflow-hidden">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Latar Belakang AA Catering ${idx+1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              slide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </section>

      <main className="flex-grow">
        {/* MENGAPA PILIH KAMI - Menggunakan Gambar dari Link Eksternal */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-12">Mengapa Pilih AA Catering?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUsItems.map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <img src={item.image} alt={item.title} className="w-16 h-16 mx-auto mb-4 object-contain" /> {/* Ukuran disesuaikan */}
                  <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPESIALISASI KAMI - Menggunakan Gambar dari Link Eksternal */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-12">Spesialisasi Kami</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              AA Catering hadir untuk melengkapi berbagai jenis acara Anda dengan kelezatan dan pelayanan terbaik.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializationItems.map((item, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <img src={item.image} alt={item.title} className="w-16 h-16 mx-auto mb-4 object-contain" /> {/* Ukuran disesuaikan */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAKET FAVORIT KAMI */}
        <section className="py-20 bg-red-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-12">Paket Pilihan Favorit Pelanggan</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              Lihat beberapa paket katering terpopuler kami yang paling sering dipilih dan disukai oleh pelanggan setia AA Catering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 group">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <Link
                      to={pkg.link}
                      className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-colors duration-200"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/menu-paket" className="mt-12 inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
              Lihat Semua Menu & Paket
            </Link>
          </div>
        </section>


        {/* TESTIMONI PELANGGAN - Gambar Berbeda dan Bisa di Slide */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-12">Kata Mereka Tentang Kami</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              Testimoni jujur dari para pelanggan yang telah merasakan kelezatan dan pelayanan terbaik dari AA Catering.
            </p>
            <div className="relative w-full max-w-3xl mx-auto">
              {testimonials.map((testi, idx) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-1000 p-8 rounded-lg shadow-lg bg-white ${
                    testiSlide === idx ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <img
                    src={testi.image} // Menggunakan gambar dari data testimoni (link eksternal unik)
                    alt={testi.author}
                    className="mx-auto rounded-full w-24 h-24 object-cover mb-4 shadow-md border-2 border-red-300"
                  />
                  <p className="text-xl italic text-gray-800 mb-3 leading-relaxed">
                    “{testi.quote}”
                  </p>
                  <p className="mt-2 font-bold text-red-700">-- {testi.author}</p>
                  <p className="text-sm text-gray-500">{testi.title}</p>
                </div>
              ))}
              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestiSlide(idx)}
                    aria-label={`Lihat testimoni ${idx + 1}`}
                    className={`w-3 h-3 rounded-full ${testiSlide === idx ? "bg-red-600 scale-125" : "bg-gray-400"} transition-all duration-200`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Akhir */}
        <section className="bg-red-800 text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Siap Wujudkan Acara Impian Anda?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran katering terbaik yang disesuaikan dengan kebutuhan Anda!
            </p>
            <Link
              to="/kontak"
              className="bg-white text-red-700 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Hubungi Tim Kami
            </Link>
          </div>
        </section>


        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1b1b1b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-footer-pattern.png')] bg-repeat opacity-10 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
          <div>
            <img src="/LOGO_AA.png" alt="Logo AA Catering" className="h-14 mb-4" />
            <p className="text-sm leading-relaxed text-gray-300">
              AA Catering, penyedia solusi katering terkemuka sejak 1978. Kami berkomitmen menyajikan hidangan berkualitas terbaik untuk setiap momen spesial Anda.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/AACatering" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://instagram.com/AACatering" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://wa.me/6285363368882" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-gray-300 hover:text-red-500 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ALAMAT KAMI</h3>
            <div className="text-sm text-gray-300 space-y-4">
              <div>
                <p className="font-semibold text-white">PEKANBARU</p>
                <p>Jl. H. Imam Munandar No. 88, Tangkerang Tengah, Marpoyan Damai, Pekanbaru, Riau</p>
                <p>📞 <a href="tel:+6285363368882" className="hover:text-red-500">0853-6336-8882</a></p>
                <p>📧 <a href="mailto:info.pku@aacatering.com" className="hover:text-red-500">info.pku@aacatering.com</a></p>
              </div>
              <div>
                <p className="font-semibold text-white mt-4">PADANG</p>
                <p>Jl. Suriname No. 28, Lubuk Begalung, Padang Utara, Padang</p>
                <p>📞 <a href="tel:+6285363368882" className="hover:text-red-500">0853-6336-8882</a></p>
                <p>📧 <a href="mailto:info.pdg@aacatering.com" className="hover:text-red-500">info.pdg@aacatering.com</a></p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Peta Lokasi Kami</h3>
            {/* Ganti dengan embed map yang valid dari Google Maps untuk lokasi Pekanbaru Anda */}
            {/* Cara mendapatkan embed map: Buka Google Maps, cari lokasi, klik 'Bagikan', pilih 'Sematkan peta', copy kode iframe */}
            <iframe
              title="Lokasi AA Catering Pekanbaru"
              // Gunakan placeholder yang lebih generik. Anda perlu menggantinya dengan embed code spesifik dari Google Maps Anda.
              src="https://www.google.com/maps/embed/v1/place?q=Pekanbaru,Riau"
              width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-lg"
            ></iframe>
            <p className="text-xs text-gray-500 mt-2">
                *Silakan ganti URL `src` iframe ini dengan embed code asli dari Google Maps lokasi Anda.
            </p>
          </div>
        </div>
        <div className="bg-[#111] text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} PT Angkasa Andalan Cita Rasa — <span className="text-white font-semibold">AA CATERING</span>. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}