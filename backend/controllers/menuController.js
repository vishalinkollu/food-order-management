const getMenu = (req, res) => {
  const menu = [
    {
      id: 1,
      name: "Pizza",
      description:
        "Loaded cheese pizza with toppings",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },

    {
      id: 2,
      name: "Burger",
      description:
        "Juicy chicken burger",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },

    {
      id: 3,
      name: "Pasta",
      description:
        "Creamy white sauce pasta",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },

    {
      id: 4,
      name: "Fries",
      description:
        "Crispy french fries",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    },
  ];

  res.json(menu);
};

module.exports = {
  getMenu,
};