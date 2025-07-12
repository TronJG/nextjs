import HomeContent from './HomeContent';
import { useState } from "react";
import Offer from './Offer';

export default function App() {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    "Home", "Restaurants", "EBT", "Offers", "Grocery",
    "Convenience", "Alcohol", "Retail", "Show More"
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-60 fixed h-screen bg-white flex flex-col pt-3">
        <div className="flex-1 overflow-y-auto pr-2">
          <ul className="flex flex-col space-y-2 px-2">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveItem(item)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full w-full font-semibold
                    ${activeItem === item
                      ? "bg-green-900 text-white"
                      : "text-black hover:bg-gray-100"}`}
                >
                  <span>{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t px-4 pt-4 pb-6 space-y-4 shrink-0 h-60">
          <h2 className="text-gray-700 font-semibold text-lg">You</h2>
          <div className="flex items-center gap-2">
            <span>Flyers</span>
            <span className="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              New
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Account</span>
          </div>
        </div>
      </div>

      {/* Main Content scrollable */}
      <div className="ml-60 w-full flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto">
          {activeItem === "Home" && <HomeContent />}
          {activeItem === "Offers" && <Offer />}
        </div>
      </div>
    </div>
  );
}
