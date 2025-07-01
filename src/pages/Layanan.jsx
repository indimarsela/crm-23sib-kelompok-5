import { useEffect } from "react";
import { FaUtensils, FaBuilding, FaBoxOpen, FaCoffee } from "react-icons/fa";

export default function Layanan() {
  useEffect(() => {
    document.title = "Layanan - AA Catering";
  }, []);

  const services = [
    {
      icon: <FaUtensils className="text-red-600 text-4xl mb-3" />,
      title: "Catering Pernikahan",
      description:
        "Layanan catering mewah dan sederhana untuk pernikahan, lengkap dengan dekorasi dan layanan terbaik.",
    },
    {
      icon: <FaBuilding className="text-red-600 text-4xl mb-3" />,
      title: "Catering Korporat",
      description:
        "Paket khusus untuk kebutuhan kantor seperti meeting, seminar, hingga pelatihan dengan berbagai pilihan menu.",
    },
    {
      icon: <FaBoxOpen className="text-red-600 text-4xl mb-3" />,
      title: "Nasi Box Harian & Bulanan",
      description:
        "Paket praktis untuk kebutuhan makan harian instansi, sekolah, dan event – tersedia dalam berbagai varian.",
    },
    {
      icon: <FaCoffee className="text-red-600 text-4xl mb-3" />,
      title: "Prasmanan & Coffee Break",
      description:
        "Sajian prasmanan dan coffee break untuk acara formal dan santai, dengan presentasi menarik dan cita rasa unggul.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <section className="pt-40 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-12">
          Layanan Kami
        </h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center border border-red-100"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer yang sama seperti Tentang Kami */}
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

          {/* Google Maps Embed */}
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
          &copy; {new Date().getFullYear()} PT Angkasa Andalan Cita Rasa —{" "}
          <span className="text-white font-semibold">AA CATERING</span>. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
