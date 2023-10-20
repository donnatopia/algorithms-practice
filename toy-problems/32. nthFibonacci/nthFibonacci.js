/**
 * @param {number} num
 * @return {number}
 */

const nthFibonacci = (num) => {
  if (num < 0) return null;
  if (num === 0) return 0;

  let index = 1;
  let prev = 0;
  let curr = 1;

  while (index < num) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
    index++;
  }

  return curr;
}

module.exports = nthFibonacci;
