/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

module.exports = (s, wordDict) => {
  let tempDict = new Set();
  for (let wordDictIndex in wordDict) {
    let word = wordDict[wordDictIndex];
    let i = 0;
    let wordFound = false;

    for (let j = 0; j < s.length; j++) {
      if (s[j] === word[i]) {
        if (i === word.length - 1) {
          wordFound = true;
          tempDict.add(word);
          s = s.replace(word, "");
          console.log('j', j);
          break;
        }
        i++;
      } else {
        i = 0;
      }
    }

    if (wordFound === false) {
      return false;
    }
  }

  return s === "";
}