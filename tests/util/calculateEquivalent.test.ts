import calculateEquivalent from "../../src/util/calculateEquivalent";

describe("calculateEquivalent", () => {
  it("should throw and error if user send empty array", () => {
    expect(() => calculateEquivalent([])).toThrowError(/provide/i);
  });

  it("should render the average of the grades", () => {
    const grades = calculateEquivalent([10, 20]);

    expect(grades).toBe(15);
  });
});
