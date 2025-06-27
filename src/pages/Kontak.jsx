import { useEffect } from "react";

export default function Kontak() {
  useEffect(() => {
    document.title = "Kontak - AA Catering";
  }, []);

  return (
    <section className="pt-40 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Hubungi Kami</h1>
      <p className="text-gray-700 mb-4">Silakan hubungi kami melalui:</p>
      <ul className="text-gray-700 space-y-2">
        <li>📞 Telepon: 0812-3456-7890</li>
        <li>📱 WhatsApp: <a href="https://wa.me/6281234567890" className="text-red-600 underline">Chat Sekarang</a></li>
        <li>✉️ Email: aacatering@gmail.com</li>
        <li>📍 Alamat: Jl. Nikmat Rasa No. 12, Jakarta</li>
      </ul>
    </section>
  );
}
