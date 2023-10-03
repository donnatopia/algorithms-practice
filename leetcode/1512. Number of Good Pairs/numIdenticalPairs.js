/**
 * @param {number[]} nums
 * @return {number}
 */

const numIdenticalPairs = (nums) => {
  let freq = {};
  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      pairs += freq[nums[i]];
    }

    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }

  return pairs;
}

module.exports = numIdenticalPairs;