export default function YourStore() {
  const stores = [
    { name: "Walgreens", offer: "$5 off" ,link: "https://www.target.com/"},
    { name: "CVS", offer: "$10 off",link: "https://www.target.com/" },
    { name: "Sam Club", offer: "By 10:45am",link: "https://www.target.com/" },
    { name: "Kroger", offer: "By 10:45am",link: "https://www.target.com/" },
    { name: "ALDI", offer: "By 10:45am" },
    { name: "Riesbeck's Food", offer: "By 10:45am",link: "https://www.target.com/" },
    { name: "Target", offer: "By 10:45am",link: "https://www.target.com/" },
  ];

  const storeCard = (store, index) => (
    <a href={store.link} key={index} className="flex flex-col items-center m-2">
      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow border">
        <img
          src={store.logo}
          alt={store.name}
          className="max-h-10 object-contain"
        />
      </div>
      <div className="text-sm font-semibold mt-2">{store.name}</div>
      <div
        className={`text-xs font-bold mt-1 ${
          store.offer.includes("$")
            ? "bg-yellow-300 px-1 rounded"
            : "text-gray-500"
        }`}
      >
        {store.offer}
      </div>
    </a>
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row space-x-10 p-4 ml-10">{stores.map(storeCard)}</div>
    </div>
  );
}
