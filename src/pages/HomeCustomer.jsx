// src/pages/HomeCustomer.jsx
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomeCustomer() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [slide, setSlide] = useState(0);
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  useEffect(() => {
    document.title = "AA Catering | Home";
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Tentang Kami", path: "/tentang" },
    { label: "Layanan", path: "/layanan" },
    { label: "Galeri", path: "/galeri" },
    { label: "Artikel", path: "/artikel" },
    { label: "Kontak", path: "/kontak" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/LOGO_AA.png" alt="Logo AA" className="h-16" />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-red-700">AA Catering</h1>
              <p className="text-xs text-gray-500">Always Ahead Catering</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setActive(item.path)}
                className={`hover:text-red-600 transition ${
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
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-1 rounded-md transition"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      <section className="pt-32 relative w-full h-[600px] overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              slide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Solusi Catering Profesional & Lezat
          </h2>
          <p className="text-white text-lg max-w-2xl mb-6">
            Kami hadir untuk melengkapi momen istimewa Anda dengan cita rasa terbaik dan layanan terpercaya.
          </p>
          <a
            href="/layanan"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Jelajahi Layanan Kami
          </a>
        </div>
      </section>

      <Outlet />
    </div>
  );
}
