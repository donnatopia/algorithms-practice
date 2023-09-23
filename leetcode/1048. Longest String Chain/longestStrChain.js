/**
 * @param {string[]} words
 * @return {number}
 */

const longestStrChain = (words) => {
  if (words.length === 1) return 1;
  words.sort((a, b) => a.length - b.length);

  let dp = {};
  let max_chain = 0;

  for (let word of words) {
    dp[word] = 1;
    for (let i = 0; i < word.length; i++) {
      let modified_word = word.slice(0, i) + word.slice(i + 1);
      if (modified_word in dp) {
        dp[word] = Math.max(dp[word], dp[modified_word] + 1);
      }
    }
    max_chain = Math.max(max_chain, dp[word]);
  }

  return max_chain;
}

module.exports = longestStrChain;