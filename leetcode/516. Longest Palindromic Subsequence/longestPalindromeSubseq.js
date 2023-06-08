/**
 * @param {string} s
 * @return {number}
 */

module.exports = (s) => {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  // base case of len 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // filling out the rest of the matrix with varying lengths until n
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}