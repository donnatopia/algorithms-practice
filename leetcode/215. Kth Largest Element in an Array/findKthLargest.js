/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

module.exports = (nums, k) => {
  const indexToSearch = k - 1;

  const quickSelect = (left, right) => {
    const pivotValue = nums[right];
    let pivotIndex = left;

    for (let i = left; i < right; i++) {
      if (nums[i] > pivotValue) {
        [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
        pivotIndex++;
      }
    }

    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    if (pivotIndex === indexToSearch) {
      return nums[pivotIndex];
    } else if (pivotIndex < indexToSearch) {
      return quickSelect(pivotIndex + 1, right);
    } else {
      return quickSelect(left, pivotIndex - 1);
    }
  }

  return quickSelect(0, nums.length - 1);
}