/**
 * @param {number} n
 * @return {number}
 */

const integerBreak = (n) => {
  if (n <= 3) return n - 1;

  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    let max = 0;
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      max = Math.max(max, dp[j] * dp[i - j]);
    }
    dp[i] = max;
  }

  return dp[n];
}

module.exports = integerBreak;