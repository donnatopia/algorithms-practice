/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

module.exports = (coordinates) => {
  let slope;

  for (var i = 1; i < coordinates.length; i++) {
    let rise = coordinates[i - 1][1] - coordinates[i][1];
    let run = coordinates[i - 1][0] - coordinates[i][0];
    let currentSlope = run !== 0 ? rise/run : Number.POSITIVE_INFINITY;

    if (slope === undefined) {
      slope = currentSlope;
    }

    if (slope !== currentSlope) {
      return false;
    }
  }

  return true;
}