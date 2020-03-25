const getMonthsWithThirteen = require("./calendar");

describe("getMonthsWithThirteen()", () => {
  it("should return '2 fridays the 13th' when first sunday in falls on the 1st ", () => {
    expect(
      getMonthsWithThirteen(365, 12, [
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
      ])
    ).toEqual("2 fridays the 13th");
  });
});
