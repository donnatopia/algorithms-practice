/**
 * @param {number[]} arr
 * @return {number[]}
 */

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let lesserOrEqualArr = [];
  let greaterArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) lesserOrEqualArr.push(arr[i]);
    else greaterArr.push(arr[i]);
  }

  return quickSort(lesserOrEqualArr).concat(pivot, quickSort(greaterArr));
}

module.exports = quickSort;
