/**
 * @param {number[]} nums
 * @return {boolean}
 */

const find132pattern = (nums) => {
  let second = [];
  let third = Number.MIN_SAFE_INTEGER;

  for (let i = nums.length - 1; i >=0; i--) {
    if (nums[i] < third) return true;
    while (second.length && second[second.length - 1] < nums[i]) {
      third = second.pop();
    }
    second.push(nums[i]);
  }

  return false;
}

module.exports = find132pattern;