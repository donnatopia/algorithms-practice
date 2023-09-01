/**
 * @param {number[]} rotated
 * @param {number} target
 * @return {number}
 */

const rotatedArraySearch = (rotated, target) => {
  let left = 0;
  let right = rotated.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (rotated[mid] === target) {
      return mid;
    }

    if (rotated[left] <= rotated[mid]) {
      if (target > rotated[mid] && rotated[left] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target > rotated[mid] && rotated[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return null;
}

module.exports = rotatedArraySearch;
