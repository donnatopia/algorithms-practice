/**
 * @param {number[]} nums
 * @return {string[]}
 */

module.exports = (nums) => {
  let ranges = [];
  let index = 0;

  while(index < nums.length) {
    let start = nums[index];
    while (nums[index + 1] === nums[index] + 1) {
      index++;
    }

    if (nums[index] !== start) {
      ranges.push(`${start}->${nums[index]}`);
    } else {
      ranges.push(`${start}`);
    }

    index++;
  }

  return ranges;
}