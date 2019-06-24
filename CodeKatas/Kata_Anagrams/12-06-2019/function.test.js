const functions = require('./function')

test("With pictures and cupitres should return true", () => {
    expect(functions.isAnagram("pictures", "cupitres")).toBe(true);
});

test("With prueba and abeurb should return false", () => {
    expect(functions.isAnagram("prueba", "abeurb")).toBe(false);
});

test("With Pictures and cupitres should return true", () => {
    expect(functions.isAnagram("Pictures", "cupitres")).toBe(true);
});

test("With '' and palabra should return false", () => {
    expect(functions.isAnagram("", "palabra")).toBe(false);
});

test("Using loadFile should return a non empty array", () => {
    expect(functions.loadFile("wordlist.txt")).not.toBeNull();
});

test("Complete Kata should return array of arrays with the solution of the kata", () => {
    expect(functions.completeKata()).not.toBeNull();
});

