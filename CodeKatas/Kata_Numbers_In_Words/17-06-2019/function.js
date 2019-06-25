const funcion = {
  convertNumberToWord: number => {
    let firstNumbers = {
      90: "ninety",
      80: "eighty",
      70: "seventy",
      60: "sixty",
      50: "fifty",
      40: "forty",
      30: "thirthy",
      20: "twenty",
      19: "nineteen",
      18: "eighteen",
      17: "seventeen",
      16: "sixteen",
      15: "fifteen",
      14: "fourteen",
      13: "thirtheen",
      12: "twelve",
      11: "eleven",
      10: "ten",
      9: "nine",
      8: "eight",
      7: "seven",
      6: "six",
      5: "five",
      4: "four",
      3: "three",
      2: "two",
      1: "one",
      0: "zero"
    };
    if (number < 21) return firstNumbers[number];
    else {
      let first = true;
      let ans = "";
      Object.keys(firstNumbers).forEach((key, value) => {
        console.log("Llave: " + key);
        if (number - key == 0) {
          ans = firstNumbers[key];
          first = false;
        } else if (number - key > 0 && number - key < 10 && first) {
          ans = `${firstNumbers[key]}-${firstNumbers[number - key]}`;
          first = false;
        }
      });
      return ans;
    }
  }
};

module.exports = funcion;
