/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

const canFormPairs = (nums, p, mid) => {
  let count = 0;
  let i = 0;

  while (i < nums.length - 1 && count < p) {
    if (nums[i + 1] - nums[i] <= mid) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }

  return count >= p;
}

var minimizeMax = (nums, p) => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canFormPairs(nums, p, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

module.exports = minimizeMax;