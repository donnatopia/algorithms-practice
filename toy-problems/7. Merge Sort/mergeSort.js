/**
 * @param {number[]}
 * @return {number[]}
 */

const mergeSort = (nums) => {
  if (nums.length === 1) {
    return nums;
  }

  if (nums.length === 2) {
    if (nums[0] <= nums[1]) {
      return nums;
    } else {
      nums.unshift(nums.pop());
      return nums;
    }
  }

  let left = nums.slice(0, Math.floor(nums.length / 2));
  let right = nums.slice(Math.floor(nums.length / 2));

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  let sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (sorted.length !== nums.length) {
    if (!sortedRight[rightIndex] || sortedLeft[leftIndex] <= sortedRight[rightIndex]) {
      sorted.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  return sorted;
}

module.exports = mergeSort;