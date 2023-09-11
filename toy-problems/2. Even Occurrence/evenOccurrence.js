/**
 * @param {(string | number)[]} arr
 * @return {string | number}
 */

const evenOccurrence = (arr) => {
  let dict = {};

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (dict[element]) {
      dict[element]++;
    } else {
      dict[element] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (dict[element] % 2 === 0) return element;
  }

  return null;
}

module.exports = evenOccurrence;
