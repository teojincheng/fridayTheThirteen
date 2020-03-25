const monthOffset = [0, 4, 4, 1, 6, 3, 1, 5, 2, 0, 4, 2];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function determineMonthsWithThirteen(dateOfFirstSundayInJan) {
  const arrOfMonthsWithThirteen = [];
  if (dateOfFirstSundayInJan === 1) {
    for (let i = 0; i < monthOffset.length; i++) {
      if (monthOffset[i] === 0) {
        arrOfMonthsWithThirteen.push(month[i]);
      }
    }
  } else {
    for (let j = 0; j < monthOffset.length; j++) {
      if (dateOfFirstSundayInJan + monthOffset[j] === 8) {
        arrOfMonthsWithThirteen.push(month[j]);
      }
    }
  }
  return arrOfMonthsWithThirteen;
}
function getFridayThirteenth(daysInYear, numberOfMonths, arrOfDaysInMonth) {
  const DATE_OF_FIRST_SUNDAY_IN_JAN = 1;
  const monthsWithThirteen = determineMonthsWithThirteen(
    DATE_OF_FIRST_SUNDAY_IN_JAN
  );
  let resultString = `${monthsWithThirteen.length} fridays the 13th`;
  return resultString;
}

module.exports = getFridayThirteenth;
