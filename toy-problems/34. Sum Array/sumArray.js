/**
 * @param {Array} arr
 * @return {number}
 */

const sumArray = (arr) => {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
}

module.exports = sumArray;
