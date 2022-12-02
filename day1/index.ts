export const splitCaloriesByLine = (calories: string): Array<Array<string>> => {
  const pattern = /\n/g;
  return calories
    .split("\n\n")
    .map((string) => string.replace(pattern, " "))
    .map((string) => string.split(" "));
};

export const stringToInt = (
  calories: Array<Array<string>>
): Array<Array<number>> => {
  return calories.map((arrayOfCalories) =>
    arrayOfCalories.flatMap((calorie) => parseInt(calorie) || [])
  );
};

export const sumCalories = (calories: Array<number>): number => {
  return calories.reduce((a, b) => a + b);
};

export const mostCalorificElfs = (
  calorieTotals: Array<number>,
  range: number
): Array<number> => {
  const sortedCalorieTotals = calorieTotals.sort((a, b) => a - b).reverse();
  return sortedCalorieTotals.slice(0, range);
};

export const findHighestCalories = (calories: string): number => {
  const caloriesSplitByLine = stringToInt(splitCaloriesByLine(calories));
  const summedCalories = caloriesSplitByLine.map(sumCalories);
  const highestCalories = mostCalorificElfs(summedCalories, 1);
  return highestCalories[0];
};

export const sumOfHighestCalories = (calories: string) => {
  const caloriesSplitByLine = stringToInt(splitCaloriesByLine(calories));
  const summedCalories = caloriesSplitByLine.map(sumCalories);
  const highestCalories = mostCalorificElfs(summedCalories, 3);
  return sumCalories(highestCalories);
};
