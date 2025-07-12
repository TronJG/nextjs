"use client";
import { useState } from "react";
import { FaShoppingCart, FaMapMarkerAlt, FaChevronDown,FaTimes  } from "react-icons/fa";
export default function Location() {
  const [openMenu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!openMenu);
  return (
    <>
      <div className="flex items-center space-x-6 relative">
        <div className="flex items-center text-lg text-gray-700 cursor-pointer">
          <FaMapMarkerAlt className="mr-2 text-2xl" />
          <button onClick={toggleMenu}><span>9384</span></button>
          <FaChevronDown onClick={toggleMenu} className="text-sm ml-1" />

          {openMenu && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40  p-6">
              <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-2xl h-[80vh] p-6 relative">
                {/* Nút đóng */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 left-4 text-xl text-gray-700 hover:text-black"
                >
                  <FaTimes className="text-xl text-gray-700 hover:text-black" /> 
                </button>

                {/* Tiêu đề */}
                <h2 className="text-xl font-semibold text-center mb-6">
                  Choose address
                </h2>

                {/* Input tìm kiếm */}
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                  <input
                    type="text"
                    placeholder="Add a new address"
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                  />
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <FaShoppingCart className="text-3xl text-white bg-green-600 rounded-full p-2" />
          <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-white text-green-700 text-sm font-bold rounded-full px-2 shadow">
            3
          </span>
        </div>
      </div>
    </>
  );
}
