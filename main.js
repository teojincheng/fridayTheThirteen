const getMonthsWithThirteen = require("./calendar");

const result = getMonthsWithThirteen(365, 12, [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
]);
console.log(result);
