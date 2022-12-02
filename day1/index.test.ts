import {
  splitCaloriesByLine,
  stringToInt,
  sumCalories,
  findHighestCalories,
  sumOfHighestCalories,
} from "./index";

import { caloriesTestData } from "./input";

const sampleCalorieData = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test("Should calories split by line", () => {
  console.log(splitCaloriesByLine);
  const expectedOutput = [
    ["", "1000", "2000", "3000"],
    ["4000"],
    ["5000", "6000"],
    ["7000", "8000", "9000"],
    ["10000"],
  ];
  expect(splitCaloriesByLine(sampleCalorieData)).toEqual(expectedOutput);
});

test("Should sum calories by elf", () => {
  const elfCalories = [1000, 2000, 3000];
  expect(sumCalories(elfCalories)).toEqual(6000);
});

test("convert strings to int", () => {
  const elfCalories = [
    ["", "1000", "2000", "3000"],
    ["2000", "3000"],
  ];

  expect(stringToInt(elfCalories)).toEqual([
    [1000, 2000, 3000],
    [2000, 3000],
  ]);
});

test("Should return 24000 calories", () => {
  expect(findHighestCalories(sampleCalorieData)).toEqual(24000);
});

test("Should return sum of three top elves", () => {
  expect(sumOfHighestCalories(sampleCalorieData)).toEqual(45000);
});

test("Just a run for one", () => {
  expect(findHighestCalories(caloriesTestData)).toEqual(0);
});

test("Just a run for three", () => {
  expect(sumOfHighestCalories(caloriesTestData)).toEqual(0);
});
