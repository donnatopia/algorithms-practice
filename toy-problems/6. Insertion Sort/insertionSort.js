/**
 * @param {number[]}
 * @return {number[]}
 */

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let currentElement = nums[i];
        nums.splice(i, 1);
        nums.splice(j, 0, currentElement);
        break;
      }
    }
  }

  return nums;
}

module.exports = insertionSort;

// Hack Reactor Solution:

// const insertionSort = (nums) => {
//   for (let i = 1; i < nums.length; i++) {
//     let val = nums[i];
//     let hole = i;
//     while (hole && val < nums[hole - 1]) {
//       nums[hole] = nums[hole - 1];
//       hole--;
//     }

//     nums[hole] = val;
//   }

//   return nums;
// }
