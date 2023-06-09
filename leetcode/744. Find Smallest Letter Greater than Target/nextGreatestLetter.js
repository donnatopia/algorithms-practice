/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

module.exports = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;
  let result = letters[0];

  while(left <= right) {
    let mid = Math.floor((right + left)/2);

    if (letters[mid] > target) {
      result = letters[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}