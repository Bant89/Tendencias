const romanNumeral = {
  converter: num => {
    let numerals = {
      1000: "M",
      500: "D",
      100: "C",
      50: "L",
      10: "X",
      5: "V",
      1: "I"
    };
    if (numerals[num] != undefined) return numerals[num];
    Object.keys(numerals).forEach((key, val) => {
      console.log(`key: ${key}, val: ${val}`);
    });
  }
};
romanNumeral.converter(55);
module.exports = romanNumeral;
