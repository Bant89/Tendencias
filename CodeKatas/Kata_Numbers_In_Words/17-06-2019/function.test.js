const funcion = require("./function");

test("Convert number to word with 0 should return zero", () => {
  expect(funcion.convertNumberToWord(0)).toBe("zero");
});

test("Convert number to word with 5 should return five", () => {
  expect(funcion.convertNumberToWord(5)).toBe("five");
});

test("Convert number to word with 10 should return ten", () => {
  expect(funcion.convertNumberToWord(10)).toBe("ten");
});

test("Convert number to word with 18 should return eigtheen", () => {
  expect(funcion.convertNumberToWord(18)).toBe("eighteen");
});

test("Convert number to word with 21 should return twenty-one", () => {
  expect(funcion.convertNumberToWord(21)).toBe("twenty-one");
});
