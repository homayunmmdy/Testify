
const calculateEquivalent = (grades: number[]): number => {
  if (grades.length === 0) throw new Error("No Grades provided");

  const total = grades.reduce(
    (accumulateor, grades) => accumulateor + grades,
    0
  );

  const average = total / grades.length;

  return average;
};

export default calculateEquivalent