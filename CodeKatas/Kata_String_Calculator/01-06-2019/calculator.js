const calculator = {
  add: num => {
    if (num == "") return "0";
    if (isNaN(parseInt(num[num.length - 1]))) return "Number expected but EOF.";

    let numbers = num
      .split(",")
      .join("")
      .split("\n")
      .map(x => parseFloat(x))
      .reduce((prev, cur) => {
        return prev + cur;
      }, 0)
      .toString();
    return numbers;
  }
};

module.exports = calculator;
