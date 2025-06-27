import { useEffect } from "react";

export default function Artikel() {
  useEffect(() => {
    document.title = "Artikel - AA Catering";
  }, []);

  return (
    <section className="pt-40 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Artikel Terkini</h1>
      <article className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Tips Memilih Menu Catering Pernikahan</h2>
        <p className="text-gray-700">
          Memilih menu catering yang tepat sangat penting untuk kesuksesan acara Anda. Simak tips-tipsnya di sini.
        </p>
      </article>
      <article className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Catering Kantoran: Praktis dan Lezat</h2>
        <p className="text-gray-700">
          Temukan solusi konsumsi sehat dan nikmat untuk tim Anda setiap hari dengan layanan AA Catering.
        </p>
      </article>
    </section>
  );
}
