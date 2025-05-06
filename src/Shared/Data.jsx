const CarMakes = [
  { id: 1, name: "Toyota" },
  { id: 2, name: "Honda" },
  { id: 3, name: "Ford" },
  { id: 4, name: "Chevrolet" },
  { id: 5, name: "Nissan" },
  { id: 6, name: "BMW" },
  { id: 7, name: "Mercedes-Benz" },
  { id: 8, name: "Audi" },
  { id: 9, name: "Volkswagen" },
  { id: 10, name: "Hyundai" },
  { id: 11, name: "Kia" },
  { id: 12, name: "Subaru" },
  { id: 13, name: "Mazda" },
  { id: 14, name: "Lexus" },
  { id: 15, name: "Porsche" },
  { id: 16, name: "Jaguar" },
];
const Pricing = [
  { id: 1, amount: "Under $10,000" },
  { id: 2, amount: "$10,000 - $20,000" },
  { id: 3, amount: "$20,000 - $30,000" },
  { id: 4, amount: "$30,000 - $40,000" },
  { id: 5, amount: "$40,000 - $50,000" },
  { id: 6, amount: "Over $50,000" },
];
const Category = [
  {
    id: 1,
    name: "SUV",
    icon: "https://cdn-icons-png.flaticon.com/128/13584/13584003.png", // Black SUV icon
  },
  {
    id: 2,
    name: "Sedan",
    icon: "https://cdn-icons-png.flaticon.com/128/3202/3202003.png", // Black Sedan icon
  },
  {
    id: 3,
    name: "Hatchback",
    icon: "https://cdn-icons-png.flaticon.com/128/5035/5035167.png", // Black Coupe icon
  },

  {
    id: 5,
    name: "Convertible",
    icon: "https://cdn-icons-png.flaticon.com/128/5035/5035202.png", // Black Hatchback icon
  },

  {
    id: 7,
    name: "Sports",
    icon: `${import.meta.env.BASE_URL}formula.png`, // Dynamic path for Sports icon
  },
  {
    id: 8,
    name: "Van",
    icon: `${import.meta.env.BASE_URL}van.png`, // Dynamic path for Van icon
  },
  {
    id: 9,
    name: "Truck",
    icon: `${import.meta.env.BASE_URL}pickup-truck.png`, // Dynamic path for Truck icon
  },
];

export default {
  CarMakes,
  Pricing,
  Category,
};
