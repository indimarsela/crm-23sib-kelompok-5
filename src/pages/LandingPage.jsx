import React from "react";
import { Button } from "@/components/ui/button";
import { FaUtensils, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <img
          src="/LOGO_AA.png"
          alt="AA Catering Logo"
          className="h-12 w-auto"
        />
        <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <section className="bg-red-50 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-red-700"
        >
          Selamat Datang di AA Catering
        </motion.h1>
        <p className="text-lg text-gray-600 mb-6">
          Solusi Catering Terbaik untuk Segala Acara Anda
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
          Pesan Sekarang
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-10 text-red-600">Kenapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-lg">
            <FaUtensils className="text-3xl text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Menu Lezat & Variatif</h3>
            <p className="text-sm text-gray-500">
              Menu masakan rumahan dan modern sesuai selera Anda.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg">
            <FaPhoneAlt className="text-3xl text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Pelayanan Responsif</h3>
            <p className="text-sm text-gray-500">
              Tim kami siap melayani Anda dengan cepat dan ramah.
            </p>
          </div>
          <div className="p-6 shadow rounded-lg">
            <FaMapMarkerAlt className="text-3xl text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Cakupan Luas</h3>
            <p className="text-sm text-gray-500">
              Layanan kami menjangkau berbagai wilayah di kota Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-10 text-red-600">Galeri Makanan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/200x150/?food,catering,${i}`}
              alt={`Gallery ${i}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-10 text-red-600">Testimoni Pelanggan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 shadow rounded-lg bg-gray-50">
            <p className="italic text-sm text-gray-700 mb-2">
              “Makanannya enak dan pengirimannya tepat waktu. Terima kasih AA Catering!”
            </p>
            <div className="font-semibold">– Rina, Pekanbaru</div>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-50">
            <p className="italic text-sm text-gray-700 mb-2">
              “Kami puas dengan pelayanannya. Cocok untuk acara kantor!”
            </p>
            <div className="font-semibold">– Budi, Rumbai</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white py-6 text-center">
        <p className="text-sm">© 2025 AA Catering. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;