"use client"
import { useState } from "react";

import {
  FaBars,
  FaHome,
  FaBookmark,
  FaClipboardList,
  FaList,
  FaBook,
  FaCog,
  FaPlusSquare,
  FaUserFriends,
  FaDollarSign,
  FaGift,
  FaTag,
  FaCreditCard,
  FaQuestionCircle,
  FaLightbulb,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function SidebarToggle() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  return (
    <>
      {/* Nút mở menu */}
      <button onClick={toggleMenu} className=" left-0 top-5 p-3 text-2xl z-50">
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-full left-0 overflow-y-auto w-80 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center space-x-4">
          <div>
            <p className="font-bold text-xl">Trần B.</p>
            <p className="text-sm text-gray-700">
              Instacart customer since June 2025
            </p>
          </div>
          <img
            src="/lemon.png"
            alt="avatar"
            className="w-12 my-4 h-12 rounded-full border-2 border-green-400 bg-green-100"
          />
        </div>
        {/* Cảnh báo Instacart+ */}
        <div className="bg-rose-50 border-l-4 my-4 border-rose-400 p-3 text-sm text-rose-900 font-semibold rounded">
          Instacart+ perk alert!
          <p className="font-normal text-gray-700 mt-1">
            $0 delivery fees on grocery and retail orders of $10+. Service fees
            apply. $35 min. for Costco.
          </p>
        </div>
        <div className="bg-fuchsia-900 text-white p-4 rounded-2xl ">
          <p className="text-2xl font-bold">Start your free trial today!</p>
          <p className="text-sm mt-1">You can cancel at any time.</p>
          <button className="mt-4 w-full bg-fuchsia-100 text-fuchsia-900 font-semibold py-2 px-3 rounded-full">
            Try Instacart+ for free
          </button>
          <p className="text-sm mt-3 font-semibold tracking-wide">
            instacart<sup className="text-fuchsia-300">+</sup>
          </p>
        </div>

        {/* Menu */}
        <div className="pt-4 border-t">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 bg-gray-800 text-white rounded-lg font-semibold"
              >
                <FaHome /> Stores
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg"
              >
                <FaClipboardList /> Your orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg"
              >
                <FaList /> Your lists
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg"
              >
                <FaBook /> Your recipes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg"
              >
                <FaCog /> Your account settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg text-fuchsia-800 font-semibold"
              >
                <FaPlusSquare /> Try Instacart+
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg"
              >
                <FaUserFriends /> Start a family account
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6 mt-8 text-sm text-gray-800">
          {/* Credits and promos */}
          <div>
            <h3 className="uppercase text-base font-semibold text-gray-500 mb-3">
              Credits and promos
            </h3>
            <ul className="space-y-7">
              <li className="flex items-center gap-3 text-pink-600 font-medium text-base">
                <FaDollarSign />
                <a href="#">Invite friends, earn money</a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <FaGift />
                <a href="#">Buy gift cards</a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <FaTag />
                <a href="#">Credits, promos, and gift cards</a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <FaCreditCard />
                <a href="#">Apply: Instacart Mastercard</a>
              </li>
            </ul>
          </div>

          <hr />

          {/* Support */}
          <div>
            <h3 className="uppercase text-base font-semibold text-gray-500 mb-3 ">
              Support
            </h3>
            <ul className="space-y-7 text-base ">
              <li className="flex items-center gap-3 text-base">
                <FaQuestionCircle />
                <a href="#">Help Center</a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <FaLightbulb />
                <a href="#">How Instacart works</a>
              </li>
            </ul>
          </div>

          <hr />

          {/* Our apps */}
          <div>
            <h3 className="uppercase text-base font-semibold text-gray-500 mb-3 text-base">
              Our apps
            </h3>
            <ul className="space-y-7">
              <li className="flex items-center gap-3 text-base">
                <FaApple />
                <a href="#">App Store</a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <FaGooglePlay />
                <a href="#">Google Play</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Backdrop - click ra ngoài để đóng */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 "
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
