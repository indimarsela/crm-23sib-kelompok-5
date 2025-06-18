import React from "react";
import {
  FaSearch,
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Product = () => {
  const categories = [
    {
      name: "Healthy non veg",
      image: "https://source.unsplash.com/200x150/?chicken,healthy",
    },
    {
      name: "Sproutes",
      image: "https://source.unsplash.com/200x150/?sprouts,vegetables",
    },
    {
      name: "Break fast",
      image: "https://source.unsplash.com/200x150/?breakfast,food",
    },
    {
      name: "Kids special",
      image: "https://source.unsplash.com/200x150/?kids,meal",
    },
    {
      name: "Fresh Juices",
      image: "https://source.unsplash.com/200x150/?juice,fruit",
    },
    {
      name: "Lunch",
      image: "https://source.unsplash.com/200x150/?lunch,meal",
    },
    {
      name: "Dinner",
      image: "https://source.unsplash.com/200x150/?dinner,meal",
    },
    {
      name: "Salads",
      image: "https://source.unsplash.com/200x150/?salad,healthy",
    },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
      <div className="text-lg font-semibold mb-1">Hi, Indi Marsela</div>
      <div className="text-sm text-gray-500 mb-4">It’s looking like a slow day.</div>

      <div className="bg-black text-white p-3 rounded mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FaUserCircle size={24} />
          <span>Account</span>
          <span>Menu</span>
          <span>Payment history</span>
          <span>Tracking</span>
          <span>Subscription</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 rounded text-black"
          />
          <FaSearch className="absolute right-2 top-1.5 text-black" />
        </div>
      </div>

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Chef's special farm food for the day...</h2>
        <div className="grid grid-cols-4 gap-4">
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

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="text-md font-bold mb-2">Article</h3>
          <p className="text-sm text-gray-700">- - - - - - - - - - - - - - -</p>
        </div>

        <div className="bg-green-100 p-4 rounded shadow col-span-2">
          <h3 className="text-md font-bold mb-2">ABOUT US</h3>
          <p className="text-sm text-gray-700">- - - - - - - - - - - - - - -</p>
        </div>
      </div>

      <div className="mt-6 bg-gray-800 text-white p-3 rounded flex justify-between text-sm">
        <div className="flex gap-4">
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
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt /> Visit our nearby
        </div>
      </div>
    </div>
  );
};

export default Product;
