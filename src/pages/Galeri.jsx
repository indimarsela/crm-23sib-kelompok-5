import { useEffect } from "react";

export default function Galeri() {
  useEffect(() => {
    document.title = "Galeri - AA Catering";
  }, []);

  return (
    <section className="pt-40 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-red-700 text-center">
        Galeri Kegiatan & Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <img
            key={i}
            src={`/menu${i}.jpg`}
            alt={`Menu ${i}`}
            className="w-full h-60 object-cover rounded shadow"
          />
        ))}
      </div>
    </section>
  );
}
