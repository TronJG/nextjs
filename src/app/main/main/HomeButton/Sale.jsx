export default function Sale() {
  const stores = [
    {
      img: "",
      sale: "$15 off",
      title: "orders $100+",
      small: "At Lower's",
      baner: "",
    },
    {
      img: "",
      sale: "$15 off",
      title: "orders $100+",
      small: "At Lower's",
      baner: "",
    },
  ];
  const showBaner = (item, index) => (
    <div
      key={index}
      className="w-full max-w-md bg-white rounded-xl shadow overflow-hidden"
    >
      <div className="flex items-start justify-between p-4">
        <div className="flex items-start space-x-2">
          <img
            src={item.img}
            alt="logo"
            className="w-8 h-8 rounded object-contain"
          />

          {/* Thông tin text */}
          <div>
            <div className="text-lg font-bold">
              <span className="bg-yellow-300 px-1">{item.sale}</span>{" "}
              <span className="font-normal text-gray-900">{item.title}</span>
            </div>
            <div className="text-sm text-gray-500">
              {item.small} • Expires Aug 19
            </div>
          </div>
        </div>

        {/* Nút Shop */}
        <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-300">
          Shop
        </button>
      </div>

      {/* Ảnh banner */}
      <div>
        <img    
          src={item.baner}
          alt="banner"
          className="w-full h-48 object-cover rounded-b-xl"
        />
      </div>
    </div>
  );
  return( <div className="flex flex-row space-x-8">
    {stores.map(showBaner)}
  </div>);
}
