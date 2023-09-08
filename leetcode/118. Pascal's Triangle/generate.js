/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = (numOfRows) => {
  let dp = [[1]]

  for (let row = 1; row < numOfRows; row++) {
    dp[row] = [1];
    for (let col = 1; col < dp[row - 1].length; col++) {
      dp[row][col] = dp[row - 1][col - 1] + dp[row - 1][col];
    }
    dp[row].push(1);
  }

  return dp;
}

module.exports = generate;