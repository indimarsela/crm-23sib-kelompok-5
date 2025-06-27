import React, { useEffect, useState } from 'react';

const TriggerMarketing = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000); // auto close after 5 sec
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative">
        <button onClick={() => setShow(false)} className="absolute top-2 right-2 text-sm text-gray-500 hover:text-red-500">✕</button>
        <h2 className="text-lg font-bold text-[#7b241c] mb-2">Promo Terbatas!</h2>
        <p className="text-sm text-gray-700">Dapatkan diskon 30% untuk semua pelanggan baru. Berlaku hari ini saja!</p>
        <button className="mt-4 bg-[#7b241c] hover:bg-[#922b21] text-white px-4 py-2 rounded w-full">Lihat Promo</button>
      </div>
    </div>
  );
};

export default TriggerMarketing;
