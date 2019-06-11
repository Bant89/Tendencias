const calculator = require("./calculator");

test("Check if calculator has add method", () => {
  expect(calculator.add).toBeDefined();
});

test("Check if with null returns 0", () => {
  expect(calculator.add("")).toBe("0");
});

test("Check if can add 2 numbers", () => {
  expect(calculator.add("1.1,1.2")).toBe("2.3");
});

test("Check if return the same number if is just one", () => {
  expect(calculator.add("1")).toBe("1");
});

test("Check when input ends with a separator", () => {
  expect(calculator.add("1,2,")).toBe("Number expected but EOF.");
});

test("Check if can handle newline separator", () => {
  expect(calculator.add("1\n2,3")).toBe("6");
});
