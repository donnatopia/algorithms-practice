/**
 * @param {string} word
 * @return {Array<[string, number]>}
 */

const characterFrequency = (word) => {
  let sortedFreq = [];
  if (word.length === 0) return sortedFreq;

  let freq = {};
  for (let i = 0; i < word.length; i++) {
    word[i] in freq ? freq[word[i]]++ : freq[word[i]] = 1;
  }

  for (let char in freq) {
    sortedFreq.push([char, freq[char]]);
  }

  sortedFreq.sort((a, b) => b[1] - a[1]);

  for (let i = 1; i < sortedFreq.length; i++) {
    let curr = sortedFreq[i];
    let prev = sortedFreq[i - 1];

    while (curr[1] === prev[1] && curr[0] < prev[0]) {
      sortedFreq[i] = prev;
      sortedFreq[i - 1] = curr;
      i--;

      if (i === 0) {
        break;
      } else {
        curr = sortedFreq[i];
        prev = sortedFreq[i - 1];
      }
    }
  }

  return sortedFreq;
}

module.exports = characterFrequency;
