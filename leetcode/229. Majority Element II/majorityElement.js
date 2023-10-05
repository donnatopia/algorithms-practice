/**
 * @param {number[]} nums
 * @return {number[]}
 */

const majorityElement = (nums) => {
  let elementA = null;
  let elementB = null;
  let countA = 0;
  let countB = 0;

  for (let num of nums) {
    if (num === elementA) {
      countA++;
    } else if (num === elementB) {
      countB++;
    } else if (countA === 0) {
      elementA = num;
      countA = 1;
    } else if (countB === 0) {
      elementB = num;
      countB = 1;
    } else {
      countA--;
      countB--;
    }
  }

  countA = countB = 0;

  for (let num of nums) {
    if (num === elementA) countA++;
    else if (num === elementB) countB++;
  }

  let result = [];
  let threshold = nums.length / 3;

  if (countA > threshold) result.push(elementA);
  if (countB > threshold) result.push(elementB);

  return result;
}

module.exports = majorityElement;