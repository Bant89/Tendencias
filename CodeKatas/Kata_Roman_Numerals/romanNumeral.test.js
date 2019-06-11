const romanNumeral = require("./romanNumeral");

test("With 1 should return I", () => {
  expect(romanNumeral.converter(1)).toBe("I");
});

test("With 5 should return V", () => {
  expect(romanNumeral.converter(5)).toBe("V");
});

test("With 10 should return X", () => {
  expect(romanNumeral.converter(10)).toBe("X");
});

test("With 50 should return L", () => {
  expect(romanNumeral.converter(50)).toBe("L");
});

test("With 100 should return C", () => {
  expect(romanNumeral.converter(100)).toBe("C");
});

test("With 500 should return D", () => {
  expect(romanNumeral.converter(500)).toBe("D");
});

test("With 1000 should return M", () => {
  expect(romanNumeral.converter(1000)).toBe("M");
});

test("With 55 should return LV", () => {
  expect(romanNumeral.converter(55)).toBe("LV");
});
