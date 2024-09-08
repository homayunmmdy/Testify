import calculateNeto from "../../src/util/calculateNeto";

describe("calculateNeto util", () => {
  it.each([
    { country: "Afghanistan", taxRate: 0.1, expected: 90 },
    { country: "Iran", taxRate: 0.05, expected: 95 },
    { country: "Turkey", taxRate: 0.2, expected: 80 },
    { country: "USA", taxRate: 0.3, expected: 70 },
    { country: "Germany", taxRate: 0.4, expected: 60 },
    { country: "Netherland", taxRate: 0.25, expected: 75 },
    { country: "Sweden", taxRate: 0.35, expected: 65 }
  ])(
    "should reduce $taxRate % as tax from $country ", ({ country, expected }) => {
      const result = calculateNeto(100, country);
      expect(result).toBe(expected);
    }
  );

  it('should throw an error if we give invalid country', () => {
    expect(() => calculateNeto(100, '!')).toThrowError()
  })

});
