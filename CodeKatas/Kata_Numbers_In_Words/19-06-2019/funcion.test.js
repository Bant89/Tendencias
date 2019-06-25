const funcion = require("./funcion");

test("convert number to word with 1 should return one", () => {
  expect(funcion.convertNumberToWord(1)).toBe("one");
});

test("Convert number to word with 15 should return fifteen", () => {
  expect(funcion.convertNumberToWord(15)).toBe("fifteen");
});

test("Convert number to word with 21 should return twenty-one", () => {
  expect(funcion.convertNumberToWord(21)).toBe("twenty-one");
});

test("Convert number to word with 55 should return fifty-five", () => {
  expect(funcion.convertNumberToWord(55)).toBe("fifty-five");
});

test("Convert number to word with 60 should return sixty", () => {
  expect(funcion.convertNumberToWord(60)).toBe("sixty");
});

test("Convert number to word with 100 should return one hundred", () => {
  expect(funcion.convertNumberToWord(100)).toBe("one hundred");
});

test("Convert number to word with 154 should return one hundred and fifty-four", () => {
  expect(funcion.convertNumberToWord(154)).toBe("one hundred and fifty-four");
});

test("Convert number to word with 236 should return two hundred and thirty-six", () => {
  expect(funcion.convertNumberToWord(236)).toBe("two hundred and thirty-six");
});

test("Convert number to word with 999 should return nine hundred and ninety-nine", () => {
  expect(funcion.convertNumberToWord(999)).toBe("nine hundred and ninety-nine");
});
