const convertToCelsius = function (num) {
  numBeforeRoundingc = ((num - 32) * (5 / 9));
  return Math.round(numBeforeRoundingc * 10) / 10;
};

const convertToFahrenheit = function (num) {
  numBeforeRoundingf = (num * (9 / 5) + 32);
  return Math.round(numBeforeRoundingf * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
