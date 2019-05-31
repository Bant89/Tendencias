const calculator = require("./stringCalculator");

test("Check if calculator exists", () => {
  expect(calculator).toBeDefined();
});

test("Check if has add method", () => {
  expect(calculator.add).toBeDefined();
});

test("Check if returns 0 with empty string", () => {
  expect(calculator.add("")).toBe("0");
});

test("Check if with 1 numbers it returns it", () => {
  expect(calculator.add("1")).toBe("1");
});

test("Check if with 2 numbers it returns the sum", () => {
  expect(calculator.add("1,2")).toBe("3");
});

test("Check if with floating points sum works", () => {
  expect(calculator.add("1.1, 1.2")).toBe("2.3");
});

test("Check if works with 3 numbers", () => {
  expect(calculator.add("1, 2, 3")).toBe("6");
});

test("Check if works with 10 numbers", () => {
  expect(
    calculator.add("1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1")
  ).toBe("56");
});
