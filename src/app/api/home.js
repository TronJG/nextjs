export default function handler(req, res) {
  res.status(200).json({
    yourStores: [
      {
        id: 1,
        name: "Walgreens",
        discount: "$5 off",
        icon: "/icons/walgreens.png",
        cart: 3
      },
      {
        id: 2,
        name: "CVS®",
        discount: "$10 off",
        icon: "/icons/cvs.png"
      },
      {
        id: 3,
        name: "Sam's Club",
        deliveryTime: "By 10:00am",
        icon: "/icons/samsclub.png"
      },
      {
        id: 4,
        name: "Kroger",
        deliveryTime: "By 9:30am",
        icon: "/icons/kroger.png"
      },
      {
        id: 5,
        name: "ALDI",
        deliveryTime: "By 10:00am",
        icon: "/icons/aldi.png"
      },
      {
        id: 6,
        name: "Riesbeck's",
        deliveryTime: "By 9:30am",
        icon: "/icons/riesbecks.png"
      },
      {
        id: 7,
        name: "Dollar Tree",
        deliveryTime: "By 9:45am",
        icon: "/icons/dollartree.png"
      },
      {
        id: 99,
        name: "Show all",
        icon: "/icons/showall.png",
        totalStores: 26
      }
    ],
    beyondGrocery: [
      {
        id: 8,
        name: "Lowe's",
        discount: "$15 off",
        icon: "/icons/lowes.png"
      },
      {
        id: 9,
        name: "Five Below",
        deliveryTime: "By 9:45am",
        icon: "/icons/fivebelow.png"
      },
      {
        id: 10,
        name: "Family Dollar",
        deliveryTime: "By 9:45am",
        icon: "/icons/familydollar.png"
      },
      {
        id: 11,
        name: "Michaels",
        discount: "$10 off",
        icon: "/icons/michaels.png"
      },
      {
        id: 12,
        name: "Staples",
        deliveryTime: "By 10:00am",
        icon: "/icons/staples.png"
      },
      {
        id: 13,
        name: "Ulta Beauty",
        discount: "$15 off",
        icon: "/icons/ulta.png"
      },
      {
        id: 14,
        name: "Pet Supplies Plus",
        discount: "$15 off",
        icon: "/icons/petsupplies.png"
      },
      {
        id: 15,
        name: "Office Depot",
        deliveryTime: "By 10:30am",
        icon: "/icons/officedepot.png"
      }
    ]
  });
}
