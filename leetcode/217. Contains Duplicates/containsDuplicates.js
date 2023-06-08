/**
 * @param {number[]} nums
 * @return {boolean}
 */

module.exports = (nums) => {
  return new Set(nums).size !== nums.length;
}