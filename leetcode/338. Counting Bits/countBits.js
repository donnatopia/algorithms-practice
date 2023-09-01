/**
 * @param {number} n
 * @return {number[]}
 */

module.exports = (n) => {
  let dp = Array(n + 1).fill(0);
  let exponentialSum = 1;

  for (let i = 1; i <= n; i++) {
    if (exponentialSum * 2 === i) {
      exponentialSum = i;
    }
    dp[i] = dp[i - exponentialSum] + 1;
  }

  return dp;
}