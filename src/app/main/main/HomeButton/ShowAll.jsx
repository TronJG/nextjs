export default function ShowAll({onClose}) {
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

  const showButton = (item, index) => (
  <div
    key={index}
    className="flex items-start space-x-3 p-4 max-w-md"
  >
    <img
      src={item.logo}
      alt={item.name}
      className="w-12 h-12 rounded object-contain"
    />

    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{item.name}</h2>
      </div>

      <div className="text-sm text-green-600 flex items-center space-x-1 mt-1">
        <span>⚡</span>
        <span>
          Delivery <span className="font-medium">{item.delivery?.time}</span>
        </span>
        <span className="text-black">
          • {item.distance} • {item.priceLevel}
        </span>
      </div>

      {item.pickupAvailable && (
        <div className="text-sm text-gray-700 flex items-center space-x-1 mt-0.5">
          <span>🚗</span>
          <span>
            Pickup ready <span className="font-medium">{item.delivery?.time}</span>
          </span>
          <span>• {item.pickupDistance}</span>
        </div>
      )}

      <div className=" text-sm text-gray-800 mt-1">
        {item.categories.join(" • ")}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-800 text-sm px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

  return (
    <div onClick={onClose} className=" fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black bg-opacity-30">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative border-b px-4 py-3">
          {/* Nút X */}
          <button onClick={onClose} className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
            <span className="text-xl font-light">×</span>
          </button>
          {/* Tiêu đề */}
          <h2 className="text-center text-lg font-semibold">
            Stores to help you save
          </h2>
        </div>

        {/* Nội dung cuộn được */}
        <div className="max-h-[70vh] overflow-y-auto px-4 py-3">
          {stores.map(showButton)}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3 flex justify-center">
          <button onClick={onClose} className="bg-gray-200 text-gray-800 w-full px-6 py-4 rounded-full hover:bg-gray-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
