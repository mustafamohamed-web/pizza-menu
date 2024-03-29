export const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    category: "Classic",
    sizes: ["Small", "Medium", "Large"],
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    calories: 300,
  },
  {
    id: 2,
    name: "Margherita",
    ingredients: "Tomato and mozzarella",
    category: "Classic",
    sizes: ["Small", "Medium", "Large"],
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    calories: 450,
  },
  {
    id: 3,
    name: "Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    category: "Vegetarian",
    sizes: ["Small", "Medium", "Large"],
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    calories: 400,
  },
  {
    id: 4,
    name: "Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    category: "Vegetarian",
    sizes: ["Small", "Medium", "Large"],
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    calories: 380,
  },
  {
    id: 5,
    name: "Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    category: "Meat Lovers",
    sizes: ["Small", "Medium", "Large"],
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
    calories: 500,
  },
  {
    id: 6,
    name: "Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    category: "Gourmet",
    sizes: ["Small", "Medium", "Large"],
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    calories: 550,
  },
];

export const restaurantInfo = {
  name: "Pizza Delight",
  location: "123 Main St, Cityville",
  openingTime: "12:00 AM",
  closingTime: "10:00 PM",
  contactNumber: "+123 456 7890",
  website: "http://www.pizzadelight.com",
};

export const menu = {
  pizzaData: pizzaData,
  restaurantInfo: restaurantInfo,
};
