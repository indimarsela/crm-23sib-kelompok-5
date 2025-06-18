import React from "react";

const SelfService = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center p-8 bg-gray-100 min-h-screen">
      {/* Banner 1 - Ukuran besar */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center 
          bg-gradient-to-br from-red-900/30 via-gray-200 to-red-900/30
          text-red-900 rounded-2xl p-10 shadow-2xl min-h-[300px]">
        <div className="mb-6 md:mb-0 md:w-2/3">
          <h2 className="text-4xl font-extrabold mb-4">Grow Your Knowledge</h2>
          <p className="text-lg mb-6">ABOUT OUR MENU</p>
          <a
            href="https://aacatering.co.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-900 text-white hover:bg-red-800 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            📘 Download Guidebook
          </a>
        </div>
        <img
          src="https://dummyimage.com/150x200/7b1e1e/ffffff&text=GUIDE+BOOK"
          alt="Guidebook"
          className="w-36 h-auto object-contain"
        />
      </div>

      {/* Banner 2 - Ukuran besar */}
      <div className="w-full max-w-6xl bg-gradient-to-tr from-red-900/40 via-white to-gray-200 
          text-red-900 rounded-2xl p-12 shadow-2xl flex flex-col items-center text-center min-h-[250px]">
        <p className="text-lg mb-2">You dream it.</p>
        <h2 className="text-4xl font-bold mb-6">We build it!</h2>
        <button className="bg-red-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-800 transition">
          ESTIMATE YOUR ORDER
        </button>
      </div>
    </div>
  );
};

export default SelfService;
