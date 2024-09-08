import { Countries } from "../data/staticData";

const calculateNeto = (
  amount: number,
  countryName: string) => {
  const country = Countries.find(
    (c) => c.name.toLowerCase() === countryName?.toLowerCase()
  );

  if (!country) {
    throw new Error("Country not found");

  }
  const netAmount = amount * (1 - country.taxRate);
  return netAmount;
};

export default calculateNeto;
