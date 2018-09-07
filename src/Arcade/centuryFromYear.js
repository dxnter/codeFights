/*
Given a year, return the century it is in.
The first century spans from the year 1 up to and including the year 100,
the second - from the year 101 up to and including the year 200, etc.
*/

const centuryFromYear = year => {
  const newYear = year.toString().length;
  let stYear;
  if (newYear >= 4) {
    stYear = year.toString().substring(0, 2);
    if (year % 100 !== 0) {
      return parseInt(stYear) + 1;
    }
    return parseInt(stYear);
  } else if (newYear >= 3) {
    stYear = year.toString().substring(0, 1);
    if (year % 100 !== 0) {
      return parseInt(stYear) + 1;
    }
    return parseInt(stYear);
  } else if (newYear < 3) {
    return 1;
  }
};
