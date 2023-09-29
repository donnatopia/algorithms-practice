/**
 * @param {number[]} nums
 * @return {boolean}
 */

const isMonotonic = (nums) => {
  let change = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if (change === 0) {
      num2 > num1 ? change = 1 : null;
      num2 < num1 ? change = -1 : null;
    }

    if (change === 1 && num2 < num1) return false;
    if (change === -1 && num2 > num1) return false;
  }

  return true;
}

module.exports = isMonotonic;