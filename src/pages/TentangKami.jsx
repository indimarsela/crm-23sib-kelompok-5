import { useEffect } from "react";

export default function TentangKami() {
  useEffect(() => {
    document.title = "Tentang Kami - AA Catering";
  }, []);

  return (
    <section className="pt-40 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Tentang Kami</h1>
      <p className="text-gray-700 leading-relaxed">
        AA Catering adalah penyedia jasa catering profesional sejak 2010 yang telah
        melayani ratusan acara, mulai dari pernikahan, korporat, hingga kebutuhan harian.
        Kami berkomitmen memberikan pelayanan terbaik dengan cita rasa yang konsisten dan menggugah selera.
      </p>
    </section>
  );
}
