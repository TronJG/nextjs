import { FaSearch } from "react-icons/fa";
export default function Seach() {
  return (
    <>
      <div className="flex flex-1 max-w-3xl mx-6">
        <div className="flex items-center bg-white rounded-full px-5 py-3 w-full shadow-inner">
          <FaSearch className="text-gray-500 text-xl mr-3" />
          <input
            type="text"
            placeholder="Search products, stores, and recipes"
            className="outline-none w-full bg-transparent placeholder-gray-500 text-lg"
          />
        </div>
      </div>
      
    </>
  );
}
