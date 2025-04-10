import { faker } from "@faker-js/faker";

function createRandomeCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600",
    miles: 1000,
    gearType: "Automatic",
    price: faker.finance.amount(10000, 100000, 0),
  };
}

// Generate exactly 7 cars
const carList = faker.helpers.multiple(createRandomeCarList, { count: 150 });

export default { carList };
