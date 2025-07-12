export default function Save() {
  const stores = [
    {
      name: "Kroger",
      logo: "/logos/kroger.png",
      delivery: {
        time: "by 8:30am",
        day: "tomorrow",
      },
      distance: "2.4 mi",
      priceLevel: "$",
      pickupAvailable: true,
      pickupDistance: "2.4 mi",
      categories: ["Groceries", "Organic", "Deli"],
      tags: ["Low prices", "Loyalty savings"],
    },
    {
      name: "ALDI",
      logo: "/logos/aldi.png",
      delivery: {
        time: "by 10:45am",
        day: "tomorrow",
      },
      distance: "7.7 mi",
      priceLevel: "$",
      pickupAvailable: true,
      pickupDistance: "7.7 mi",
      categories: ["Groceries", "Produce", "Organic"],
      tags: ["Low prices"],
    },
    {
      name: "Shop 'n Save",
      logo: "/logos/shopnsave.png",
      delivery: {
        time: "by 11:30am",
        day: "tomorrow",
      },
      distance: "26.7 mi",
      priceLevel: "$$",
      pickupAvailable: false,
      pickupDistance: null,
      categories: ["Groceries", "Produce", "Butcher Shop"],
      tags: ["Lots of deals"],
    },
    {
      name: "ALDI Express",
      logo: "/logos/aldi-express.png",
      delivery: {
        time: "by 10:15am",
        day: "tomorrow",
      },
      distance: "7.7 mi",
      priceLevel: "$",
      pickupAvailable: false,
      pickupDistance: null,
      categories: ["Groceries"],
      tags: ["Low prices"],
    },
    {
      name: "Food Lion",
      logo: "/logos/foodlion.png",
      delivery: null,
      distance: "49.5 mi",
      priceLevel: "$",
      pickupAvailable: true,
      pickupDistance: "49.5 mi",
      categories: ["Groceries", "Bakery", "Deli"],
      tags: ["In-store prices", "Low prices", "Loyalty savings"],
    },
  ];

  const show = (store, index) => (
    <div
      key={index}
      className="border rounded-xl p-4 shadow-sm flex flex-row gap-4"
    >
      {/* Logo bên trái */}
      <img
        src={store.logo}
        alt={store.name}
        className="w-14 h-14 object-contain mt-16"
      />

      {/* Nội dung bên phải */}
      <div className="flex flex-col gap-2">
        {/* Tên + giao hàng */}
        <div>
          <h2 className="text-lg font-semibold">{store.name}</h2>
          {store.delivery && (
            <p className="text-green-600 font-medium text-sm leading-tight">
              ⚡ Delivery {store.delivery.time} <br /> {store.delivery.day}
            </p>
          )}
        </div>

        {/* Khoảng cách + pickup */}
        <div className="text-sm text-gray-800 leading-tight">
          <p>
            • {store.distance} • {store.priceLevel}
          </p>
          {store.pickupAvailable && (
            <p className="font-bold">
              🚗 Pickup available • {store.pickupDistance}
            </p>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 text-sm text-gray-700">
          {store.categories.map((cat, i) => (
            <span key={i}>• {cat}</span>
          ))}
        </div>

        {/* Tags nổi bật */}
        <div className="flex flex-wrap gap-2 mt-1">
          {store.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-sm px-2 py-0.5 rounded shadow-sm ${
                tag === "In-store prices"
                  ? "bg-yellow-300 font-semibold text-black"
                  : "bg-gray-100"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stores.map(show)}
      </div>
    </>
  );
}
