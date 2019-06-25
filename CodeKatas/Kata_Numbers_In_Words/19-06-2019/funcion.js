const funcion = {
  convertNumberToWord: number => {
    let firstNumbers = {
      900: "nine hundred",
      800: "eight hundred",
      700: "seven hundred",
      600: "six hundred",
      500: "five hundred",
      400: "four hundred",
      300: "three hundred",
      200: "two hundred",
      100: "one hundred",
      90: "ninety",
      80: "eighty",
      70: "seventy",
      60: "sixty",
      50: "fifty",
      40: "forty",
      30: "thirty",
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
    let ans = "";
    if (number < 21) return firstNumbers[number];
    else if (number < 101) {
      Object.keys(firstNumbers).forEach(key => {
        if (number - key > 0 && number - key < 10) {
          ans = `${firstNumbers[key]}-${firstNumbers[number - key]}`;
        } else if (number - key == 0) {
          ans = firstNumbers[key];
        }
      });
      return ans;
    } else {
      let id = 100;
      while (number - id > 100) id += 100;
      let hundreds = firstNumbers[id];
      number -= id;
      Object.keys(firstNumbers).forEach(key => {
        if (number - key > 0 && number - key < 10) {
          ans = `${firstNumbers[key]}-${firstNumbers[number - key]}`;
        } else if (number - key == 0) {
          ans = firstNumbers[key];
        }
      });
      return `${hundreds} and ${ans}`;
    }
  }
};

module.exports = funcion;
