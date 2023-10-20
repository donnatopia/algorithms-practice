/**
 * @param {number[]} nums
 * @return {number}
 */

const largestProductOfThree = (nums) => {
  var n = nums.length;
  if (n < 3) return null;

  nums.sort((a, b) => b - a);

  const firstThree = nums[0] * nums[1] * nums[2];
  const firstAndLastTwo = nums[0] * nums[n - 1] * nums[n - 2];

  return Math.max(firstThree, firstAndLastTwo);
}

module.exports = largestProductOfThree;
