import { CarType, CountriesType } from "@/type/entities";

export const Cars: CarType[] = [
  { id: 1, name: "Mercedes" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Bentley" },
  { id: 4, name: "Mclaren" },
  { id: 5, name: "Tesla" },
];

export const Countries: CountriesType[] = [
  { id: 1, name: "Afghanistan", continents: "Asia" },
  { id: 2, name: "Iran", continents: "Asia" },
  { id: 3, name: "Turkey", continents: "Asia" },
  { id: 4, name: "USA", continents: "North America" },
  { id: 5, name: "Germany", continents: "Europe" },
  { id: 6, name: "Netherland", continents: "Europe" },
  { id: 7, name: "Sweden", continents: "Europe" },
];
