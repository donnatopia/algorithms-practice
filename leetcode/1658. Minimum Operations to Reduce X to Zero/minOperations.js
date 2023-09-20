/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

const minOperations = (nums, x) => {
  const n = nums.length
  const target = nums.reduce((a, b) => a + b) - x;
  let maxLength = 0;
  let sum = 0;
  let left = 0;

  if (target === 0) return n;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (left <= right && sum > target) {
      sum -= nums[left];
      left++;
    }

    if (sum === target) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }

  return maxLength ? n - maxLength : -1;
}

module.exports = minOperations;