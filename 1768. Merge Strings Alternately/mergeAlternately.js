/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

module.exports = (word1, word2) => {
  var merged = '';
  var i = 0;

  while (i < Math.max(word1.length, word2.length)) {
    if(word1[i]) merged += word1[i];
    if(word2[i]) merged += word2[i];
    i++;
  }

  return merged;
}