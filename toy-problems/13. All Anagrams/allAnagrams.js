/**
 * @param {string} str
 * @return {string[]}
 */

const allAnagrams = (str) => {
  if (str.length <= 1) return [str];

  let anagrams = [];
  let letters = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!letters.has(str[i])) {
      allAnagrams(str.slice(0, i) + str.slice(i + 1)).forEach((fragment) => {
        anagrams.push(str[i] + fragment);
      })
    }
    letters.add(str[i]);
  }

  return anagrams;
}

module.exports = allAnagrams;
