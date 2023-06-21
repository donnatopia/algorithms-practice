/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */

module.exports = (nums, cost) => {
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let currentCost = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }

      let difference = Math.abs(nums[i] - nums[j]);
      currentCost += cost[j] * difference;

      if (currentCost > min) {
        break;
      }
    }
    min = Math.min(currentCost, min);
  }

  return min;
}