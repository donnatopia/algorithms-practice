/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

module.exports = (s, t) => {

  if (s.length !== t.length) {
    return false;
  }

  let dictionary = {};
  for (let letter of s) {
    dictionary[letter] ? dictionary[letter]++: dictionary[letter] = 1;
  }

  for (let letter of t) {
    if (dictionary[letter] > 1) {
      dictionary[letter]--;
    } else if (dictionary[letter] === 1) {
      delete dictionary[letter];
    } else {
      return false;
    }
  }

  return Object.keys(dictionary).length === 0;
}