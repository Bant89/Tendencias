const funcion = require("./range");

test("Check with [2,6) contains {2,4}", () => {
  expect(funcion.rangeContains("[2,6)", "{2,4}")).toBe(true);
});

test("Check with [2,6) doesn’t contain {-1,1,6,10}", () => {
  expect(funcion.rangeContains("[2,6)", "{-1,1,6,10}")).toBe(false);
});
