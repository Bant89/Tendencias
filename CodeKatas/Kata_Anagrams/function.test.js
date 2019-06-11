const functions = require('./function');

test("With pictures and cupitres should return true", () => {
    expect(functions.isAnagram("pictures", "cupitres")).toBe(true);
});

test("With Pictures and cupitres should return true", () => {
    expect(functions.isAnagram("Pictures", "cupitres")).toBe(true);
});

test("With pictures and cupitre should return false", () => {
    expect(functions.isAnagram("pictures", "cupitre")).toBe(false);
});

test("with ' ' and proof should return false", () => {
    expect(functions.isAnagram(" ", "proof")).toBe(false);
});

