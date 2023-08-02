/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = (nums) => {
  if (nums.length === 0) {
    return [[]];
  }

  let permutations = [];

  for (let i = 0; i < nums.length; i++) {
    let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1))
    let remainingPerm = permute(remainingNums);
    for (let j = 0; j < remainingPerm.length; j++) {
      remainingPerm[j].unshift(nums[i]);
      permutations.push(remainingPerm[j]);
    }
  }

  return permutations;
}

module.exports = permute;