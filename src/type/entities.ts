export type CarType = {
  id: number;
  name: string;
};

export type CountriesType = {
  id: number;
  name: string;
  continents: string;
  taxRate: number;
};

export type CommentsType = {
  name : string,
  message: string
}

export type CardType = {
  link: string;
  title: string;
}