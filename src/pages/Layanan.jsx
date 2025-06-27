import { useEffect } from "react";

export default function Layanan() {
  useEffect(() => {
    document.title = "Layanan - AA Catering";
  }, []);

  return (
    <section className="pt-40 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Layanan Kami</h1>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Catering pernikahan mewah dan sederhana</li>
        <li>Catering korporat untuk rapat, seminar, dan pelatihan</li>
        <li>Paket nasi box harian dan bulanan</li>
        <li>Prasmanan dan coffee break untuk berbagai event</li>
      </ul>
    </section>
  );
}
