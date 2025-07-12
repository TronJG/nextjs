import Image from "next/image";

export default function Slide() {
  const promotion = [
    {
      highlight: "Earn $10",
      bottittle: "on health orders of $25+",
      img: "",
      smalltext: "Elig. items only. Exp. 14 days. Cart Cash valid 14 days.",
    },
    {
      highlight: "Get $10 off",
      tittle: "on meat and seafood",
      bottittle: "",
      img: "",
      smalltext: "When you spend $30+.  Terms apply.",
    },
  ];

    const showSlide = (item, index) => (
  <div
    key={index}
    className="flex flex-col md:flex-row items-center justify-between rounded-xl shadow-md p-6 w-full md:w-[48%] bg-white"
  >
    {/* Nội dung bên trái */}
    <div className="flex-1">
      <p className="text-yellow-500 font-bold text-lg">{item.highlight}</p>
      <h2 className="text-xl font-semibold text-gray-900 ">{item.tittle}</h2>
      {item.bottittle && (
        <p className="text-gray-700 mt-1">{item.bottittle}</p>
      )}
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-full text-sm">
        Shop now
      </button>

    </div>

  </div>
);


  return (
    <div className="flex flex-wrap justify-between gap-4 px-4 p-4 md:px-12">
      {promotion.map(showSlide)}
    </div>
  );
}
