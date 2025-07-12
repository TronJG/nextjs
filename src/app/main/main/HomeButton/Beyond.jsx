export default function BeyondGrocery() {
  const stores = [
    { name: "Lowe's", offer: "$15 off" },
    { name: "Dollar Tree", offer: "In-store prices" },
    { name: "Five Below", offer: "In-store prices" },
    { name: "Family Dollar", offer: "By 10:30am" },
    { name: "Michaels", offer: "$10 off" },
    { name: "Staples", offer: "In-store prices" },
    { name: "Ulta Beauty", offer: "$15 off" },
    { name: "Pet Supplies Plus", offer: "$15 off" },
  ];

  const storeCard = (store, index) => (
    <div key={index} className="flex flex-col items-center m-2">
      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow border">
        <img
          src={store.logo}
          alt={store.name}
          className="max-h-10 object-contain"
        />
      </div>

      <div className="text-sm font-semibold mt-2 text-center truncate max-w-[80px]">{store.name}</div>

      <div
        className={`text-xs font-bold mt-1 ${
          store.offer.includes("$") || store.offer.includes("In-store")
            ? "bg-yellow-300 px-1 rounded"
            : "text-gray-500"
        }`}
      >
        {store.offer}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-row space-x-10 p-4 ml-10 ">{stores.map(storeCard)}</div>
    </>
  );
}
