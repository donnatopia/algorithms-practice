/**
 * @param {number[]}
 * @return {number[]}
 */

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  const left = nums.slice(0, Math.floor(nums.length / 2));
  const right = nums.slice(Math.floor(nums.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  return l === left.length ? result.concat(right.slice(r)) : result.concat(left.slice(l));
}

module.exports = mergeSort;

// Attempt 1:

// const mergeSort = (nums) => {
//   if (nums.length === 1) {
//     return nums;
//   }

//   if (nums.length === 2) {
//     if (nums[0] <= nums[1]) {
//       return nums;
//     } else {
//       nums.unshift(nums.pop());
//       return nums;
//     }
//   }

//   let left = nums.slice(0, Math.floor(nums.length / 2));
//   let right = nums.slice(Math.floor(nums.length / 2));

//   let sortedLeft = mergeSort(left);
//   let sortedRight = mergeSort(right);

//   let sorted = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (sorted.length !== nums.length) {
//     if (!sortedRight[rightIndex] || sortedLeft[leftIndex] <= sortedRight[rightIndex]) {
//       sorted.push(sortedLeft[leftIndex]);
//       leftIndex++;
//     } else {
//       sorted.push(sortedRight[rightIndex]);
//       rightIndex++;
//     }
//   }

//   return sorted;
// }
