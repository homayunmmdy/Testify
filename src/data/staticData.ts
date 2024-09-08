import { CarType, CountriesType } from "@/type/entities";

export const Cars: CarType[] = [
  { id: 1, name: "Mercedes" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Bentley" },
  { id: 4, name: "Mclaren" },
  { id: 5, name: "Tesla" },
];

export const Countries: CountriesType[] = [
  { id: 1, name: "Afghanistan", continents: "Asia", taxRate: 0.1 },
  { id: 2, name: "Iran", continents: "Asia", taxRate: 0.05 },
  { id: 3, name: "Turkey", continents: "Asia", taxRate: 0.2 },
  { id: 4, name: "USA", continents: "North America", taxRate: 0.3 },
  { id: 5, name: "Germany", continents: "Europe", taxRate: 0.4 },
  { id: 6, name: "Netherland", continents: "Europe", taxRate: 0.25 },
  { id: 7, name: "Sweden", continents: "Europe", taxRate: 0.35 },
];
