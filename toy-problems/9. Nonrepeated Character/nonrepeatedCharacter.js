/**
 * @param {string} str
 * @return {string}
 */

const firstNonRepeatedCharacter = (str) => {
  let freq = {};
  let characterIndices = [];

  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
      characterIndices.push(i);
    }
  }

  for (let i = 0; i < characterIndices.length; i++) {
    let index = characterIndices[i];
    if (freq[str[index]] === 1) return str[index];
  }

  return null;
}

module.exports = firstNonRepeatedCharacter;
