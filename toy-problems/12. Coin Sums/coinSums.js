/**
 * @param {number} n
 * @return {number}
 */

const makeChange = (total) => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let dp = new Array(total + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= total; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[total];
}

module.exports = makeChange;