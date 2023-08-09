/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

module.exports = (s, wordDict) => {
  const wordSet = new Set(wordDict);
  const n = s.length;
  let dp = Array(n).fill(false);
  dp[0] = wordSet.has(s[0]);

  for(let end = 1; end < n; end++) {
    for (let start = 0; start <= end; start++) {
      const word = s.slice(start, end + 1);
      if (wordSet.has(word) && (start === 0 || dp[start - 1] === true)) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[n - 1];
}