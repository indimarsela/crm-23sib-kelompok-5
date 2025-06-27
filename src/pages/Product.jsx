import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Product = () => {
  const categories = [
    {
      name: "Healthy non veg",
      image: "https://images.unsplash.com/photo-1606756791981-02d0ae7c5311",
    },
    {
      name: "Sproutes",
      image: "https://images.unsplash.com/photo-1593170033256-8e5f6a3cd49c",
    },
    {
      name: "Break fast",
      image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d",
    },
    {
      name: "Kids special",
      image: "https://images.unsplash.com/photo-1604909052881-8bff4d15bfa4",
    },
    {
      name: "Fresh Juices",
      image: "https://images.unsplash.com/photo-1571687949920-b634f9f193d9",
    },
    {
      name: "Lunch",
      image: "https://images.unsplash.com/photo-1608747544885-8f2fcae6aa94",
    },
    {
      name: "Dinner",
      image: "https://images.unsplash.com/photo-1613145998132-dc438ca1ba03",
    },
    {
      name: "Salads",
      image: "https://images.unsplash.com/photo-1556911073-52527ac437f5",
    },
  ];

  return (
    <div className="flex-1 p-6 bg-gradient-to-br from-slate-100 via-[#a52a2a] to-white overflow-y-auto">
      <div className="text-lg font-semibold mb-1 text-white">Hi, Indi Marsela</div>
      <div className="text-sm text-gray-200 mb-4">It’s looking like a slow day.</div>

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-lg font-bold mb-2 text-[#a52a2a]">
          Chef's special farm food for the day...
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((item) => (
            <div
              key={item.name}
              className="border rounded shadow hover:shadow-lg cursor-pointer text-center p-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-full object-cover rounded mb-2"
              />
              <div className="text-sm font-medium">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-100 p-4 rounded shadow">
          <h3 className="text-md font-bold mb-2 text-[#a52a2a]">Article</h3>
          <p className="text-sm text-gray-700">- - - - - - - - - - - - - - -</p>
        </div>

        <div className="bg-red-100 p-4 rounded shadow md:col-span-2">
          <h3 className="text-md font-bold mb-2 text-[#a52a2a]">ABOUT US</h3>
          <p className="text-sm text-gray-700">- - - - - - - - - - - - - - -</p>
        </div>
      </div>

      <div className="mt-6 bg-[#922b2b] text-white p-3 rounded flex flex-col md:flex-row justify-between text-sm">
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <FaPhoneAlt /> ContactUs
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope /> Email
          </div>
          <div className="flex items-center gap-1">
            <FaStar /> Complaints
          </div>
          <div className="flex items-center gap-1">
            <FaStar /> Feedback
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2 md:mt-0">
          <FaMapMarkerAlt /> Visit our nearby
        </div>
      </div>
    </div>
  );
};

export default Product;
