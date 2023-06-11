/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */

module.exports = (n, index, maxSum) => {
  let min = Math.floor((maxSum/n) - n)
  let nums = new Array(n).fill(min > 0 ? min : 1);

  const findTotal = (arr) => arr.reduce((a, b) => a + b, 0);

  const increment = (i) => {
    const isValid = (value) => {
      let valueIsEqual = value === nums[i];
      let valueIsOneGreater = value === nums[i] + 1;
      return valueIsEqual || valueIsOneGreater;
    };

    let left = nums[i - 1];
    let right = nums[i + 1];

    const rightValid = right !== undefined ? isValid(right) : true;
    const leftValid = left !== undefined ? isValid(left) : true;

    if (rightValid && leftValid) {
      nums[i]++;
    } else {
      if (right !== undefined && left !== undefined) {
        let indexAtLowerValue = right < left ? i + 1 : i - 1;
        increment(indexAtLowerValue);
      } else if (right !== undefined) {
        increment(i + 1);
      } else {
        increment(i - 1);
      }
    }
  }

  while (findTotal(nums) < maxSum) {
    increment(index);
  }

  return nums[index];
}
