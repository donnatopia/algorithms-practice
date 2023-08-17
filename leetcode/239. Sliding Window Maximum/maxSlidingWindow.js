/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

module.exports = (nums, k) => {
  const findMaxIndex = (start, end) => {
    let maxIndex = start;
    for (let i = start; i <= end; i++) {
      if (nums[i] >= nums[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  let maxIndex = findMaxIndex(0, k - 1);
  let maxValues = [nums[maxIndex]];

  for (let i = k; i < nums.length; i++) {
    if (maxIndex < i - k + 1) {
      maxIndex = findMaxIndex(i - k + 1, i);
    } else if (nums[maxIndex] <= nums[i]) {
      maxIndex = i;
    }
    maxValues.push(nums[maxIndex]);
  }

  return maxValues;
}

