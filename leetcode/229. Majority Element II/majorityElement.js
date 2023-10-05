/**
 * @param {number[]} nums
 * @return {number[]}
 */

const majorityElement = (nums) => {
  let threshold = nums.length / 3;
  let freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let validElements = [];

  for (let num in freq) {
    if (freq[num] > threshold) validElements.push(Number(num));
  }

  return validElements;
}

module.exports = majorityElement;