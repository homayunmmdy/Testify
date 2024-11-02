import {
  CardType,
  CarType,
  CommentsType,
  CountriesType,
} from "@/type/entities";

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

export const Comments: CommentsType[] = [
  { name: "John", message: "This is the first comment." },
  { name: "John", message: "Second comment is here." },
  { name: "John", message: "Third comment is here." },
  { name: "John", message: "Fourth comment is here." },
  { name: "John", message: "Fifth comment is here." },
  { name: "John", message: "Sixth comment is here." },
  { name: "John", message: "Seventh comment is here." },
  { name: "John", message: "Eight comment is here." },
  { name: "John", message: "Ninth comment is here." },
  { name: "John", message: "Tenth comment is here." },
  { name: "John", message: "Eleventh comment is here." },
  { name: "John", message: "Twelfth comment is here." },
];

export const CardsData: CardType[] = [
  { title: "Car List", link: "/car-list" },
  { title: "Tool Tip", link: "/tool-tip" },
  { title: "Greet", link: "/greet" },
  { title: "Counter", link: "/counter" },
  { title: "Even ODD", link: "/even-odd" },
  { title: "Comment List", link: "/comment-list" },
  { title: "Form", link: "/form" },
];
