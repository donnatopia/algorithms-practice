/**
 * @param {number[]} stones
 * @return {number}
 */

module.exports = (stones) => {
  var sorted = stones.sort((a, b) => b - a);

  while (sorted.length > 1) {
    var difference = sorted[0] - sorted[1];
    sorted.splice(0, 2);
    if (difference > 0) {
      if ((sorted.length === 0) || (difference <= sorted[sorted.length - 1])) {
        sorted.push(difference);
      } else if (difference >= sorted[0]){
        sorted.unshift(difference);
      } else {
        for (var i = 1; i < sorted.length; i++) {
          if (difference >= sorted[i]) {
            sorted.splice(i, 0, difference);
            break;
          }
        }
      }
    }
  }

  return sorted[0] || 0;
}