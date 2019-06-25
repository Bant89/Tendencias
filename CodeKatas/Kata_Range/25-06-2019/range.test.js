const funcion = require("./range");

test("With [2,6) contains {2,4} should return true", () => {
  expect(funcion.containsInteger("[2,6)", "{2,4}")).toBe(true);
});

test("With [2,6) doesn’t contain {-1,1,6,10} should return false", () => {
  expect(funcion.containsInteger("[2,6)", "{-1,1,6,10}")).toBe(false);
});

test("With [2,6) allPoints = {2,3,4,5} should return [2, 3, 4, 5]", () => {
  expect(funcion.allPoints("[2,6)")).toEqual(
    expect.arrayContaining([2, 3, 4, 5])
  );
});

test("With [2,5) doesn’t contain [7,10) should return false", () => {
  expect(funcion.containsRange("[2,5)", "[7,10)")).toBe(false);
});
