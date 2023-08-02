/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

module.exports = (nums, k) => {
  let avgs = [];
  let sum = 0;
  const n = 2 * k + 1;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (i < k) {
      avgs.push(-1);
      if (avgs.length === nums.length) return avgs;
    }
  }

  for (let i = k; i < nums.length; i++) {
    if (i < nums.length - k) {
      avgs.push(Math.floor(sum / n));
      sum -= nums[i - k];
      sum += nums[i + k + 1];
    } else {
      avgs.push(-1);
    }
  }

  return avgs;
}