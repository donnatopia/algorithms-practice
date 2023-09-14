/**
 * @param {number[]} ratings
 * @return {number}
 */

const candy = (ratings) => {
  let n = ratings.length;
  let dp = Array(n).fill(1);

  for (let i = 0; i < n - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      dp[i + 1] = dp[i] + 1;
    }
  }

  for (let i = n - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      dp[i - 1] = Math.max(dp[i] + 1, dp[i - 1]);
    }
  }

  return dp.reduce((acc, curr) => acc + curr, 0);
}

module.exports = candy;