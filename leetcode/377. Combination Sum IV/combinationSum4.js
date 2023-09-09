/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const combinationSum4 = (nums, target) => {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let total = 1; total <= target; total++) {
    for (let j = 0; j < nums.length; j++) {
      let remainder = total - nums[j];

      if (remainder >= 0) {
        dp[total] += dp[remainder];
      }
    }
  }

  return dp[target];
}

module.exports = combinationSum4;