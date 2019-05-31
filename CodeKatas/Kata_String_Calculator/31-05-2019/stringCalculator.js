const calculator = {
  add: num => {
    if (!num) {
      return "0";
    }
    if (num.indexOf(",") == -1) return num;
    else {
      let numbers = num
        .split(",")
        .map(x => parseFloat(x))
        .reduce((prev, cur) => {
          return prev + cur;
        }, 0);

      let answer = numbers.toString();
      let checkIfHasToRound = answer.split(".");
      if (checkIfHasToRound.length > 1 && checkIfHasToRound[1][0] == "0")
        answer = parseInt(answer).toString();

      return answer;
    }
  }
};
module.exports = calculator;
