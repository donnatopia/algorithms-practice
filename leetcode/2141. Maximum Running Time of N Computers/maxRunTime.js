/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */

module.exports = (n, batteries) => {
  batteries.sort((a, b) => a - b);
  let total = batteries.reduce((a, b) => a + b, 0);

  while (batteries.at(-1) > total / n) {
    n--;
    total -= batteries.pop();
  }

  return Math.floor(total / n);
}