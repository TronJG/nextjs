export default function Offers() {
  const stores = [
    {
      name: "Lowe's",
      
      delivery: "Delivery by 10:15am",
      distance: "7.9 mi",
      categories: ["Lawn & Garden", "Hardware", "Home Decor"],
      discount: "$15 off",
      tags: ["In-store prices"],
    },
    {
      name: "Walgreens",
      
      delivery: "Delivery by 11:00am",
      distance: "22.5 mi",
      categories: ["Health and Wellness", "Drugstore", "Convenience"],
      discount: "$5 off",
      tags: ["In-store prices", "EBT"],
    },
    {
      name: "Pet Supplies Plus",
      
      delivery: "Delivery by 10:30am",
      distance: "7.8 mi",
      categories: ["Pet Supplies"],
      discount: "$15 off",
      tags: ["In-store prices"],
    },
    {
      name: "Sally Beauty",
      
      delivery: "Delivery by 10:30am",
      distance: "7.9 mi",
      categories: ["Beauty", "Makeup", "Gift"],
      discount: "$10 off",
      tags: ["In-store prices"],
    },
    {
      name: "Fresh Thyme Market",
      
      pickup: "Pickup ready by 10:45am",
      distance: "39.8 mi",
      categories: ["Organic", "Produce", "Butcher Shop"],
      discount: "$10 off",
      tags: [],
    },
  ];
  const StoreCard = (store,index) => (
    <div key={index} className="flex gap-3 p-4 border rounded-lg shadow-sm w-full max-w-sm">
      {/* Logo */}
      <img
       
        alt={store.name}
        className="w-14 h-14 object-contain rounded"
      />

      {/* Nội dung */}
      <div className="flex-1">
        {/* Tên + Giao hàng */}
        <h2 className="text-lg font-semibold">{store.name}</h2>
        {store.delivery && (
          <p className="text-sm text-green-600">⚡ {store.delivery}</p>
        )}
        {store.pickup && (
          <p className="text-sm text-blue-600">🚗 {store.pickup}</p>
        )}

        {/* Khoảng cách */}
        <p className="text-sm text-black mt-0.5">• {store.distance}</p>

        {/* Danh mục */}
        <p className="text-sm text-gray-800 mt-1">
          {store.categories.join(" • ")}
        </p>

        {/* Ưu đãi + Tag */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-yellow-300 text-black text-sm px-2 py-0.5 rounded">
            {store.discount}
          </span>
          {store.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-yellow-300 text-black text-sm px-2 py-0.5 rounded"
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
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">{stores.map(StoreCard)}</div>
    </>
  );
}
