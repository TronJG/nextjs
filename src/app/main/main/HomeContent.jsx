import { useState } from "react";
import BeyondGrocery from "./HomeButton/Beyond";
import Save from "./HomeButton/Save";
import ShowAll from "./HomeButton/ShowAll";
import Slide from "./HomeButton/Slide";
import PromoSlider from "./HomeButton/Slide";
import YourStore from "./HomeButton/YourStore";
import Sale from "./HomeButton/Sale";

export default function HomeContent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className=" bg-white">
          <h2 className="text-3xl font-bold mt-6 ml-10 ">Your stores</h2>
          <YourStore />
        </div>
        <div className=" bg-white">
          <h2 className="text-3xl font-bold mt-6 ml-10 ">Beyond Grocery</h2>
          <BeyondGrocery />
        </div>
        <div>
          <Slide />
        </div>
        <div>
          <div className="flex justify-between ">
            <h3 className="text-3xl font-bold mt-6 ml-10">
              Stores to help you save
            </h3>
            <button
              onClick={() => setOpen(true)}
              className="underline  mt-10 mr-10"
            >
              Show all
            </button>
            {open && <ShowAll onClose={() => setOpen(false)} />}
          </div>
          <div className="mt-6 ml-10">
            <Save />
          </div>
        </div>

        <div className="mt-6 ml-10 pt-4 pb-6">
          <Sale />
        </div>
      </div>

      {/* phần About */}
      <div className="flex flex-col items-center justify-center text-center py-12 bg-[#FAF8F3]">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          There&apos;s more to explore
        </h2>

        <p className="text-gray-700 mt-2 text-base">
          Shop 29 stores (and counting) in Bellaire.
        </p>

        <button className="mt-6 px-6 py-2 bg-green-700 hover:bg-green-800 text-white text-base font-semibold rounded-full">
          View all stores
        </button>
      </div>
    </>
  );
}
