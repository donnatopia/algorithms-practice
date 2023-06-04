/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */

module.exports = (piles, k) => {
  // create mem object
  const dp = Array(piles.length).fill(-1).map(() => Array(k + 1).fill(-1));

  // create a depth first search (dfs) function
    // i is the current piles index
    // coins is the number of coins left to be removed
  const dfs = (i, coins) => {

    // base case where current piles index (i) must be less than the number of piles
    if (i === piles.length) {
      return 0;
    }

    // use mem
    if (dp[i][coins] != -1) {
      return dp[i][coins];
    }

    // store the maximum total of coins obtained so far
    // define it to when we skip the current pile and move onto the next pile
    dp[i][coins] = dfs(i + 1, coins);

    // start a case where we iterate through the current pile
    // calculate the running total with curPile
    let curPile = 0;

    // iterate for the remainder of the current pile or the number of coins remaining
    for (var j = 0; j < Math.min(coins, piles[i].length); j++) {
      // add the value from the current pile
      curPile += piles[i][j];
      // recursively call the dfs to find the max value from pulling from an adjacent pile
      dp[i][coins] = Math.max(dp[i][coins], curPile + dfs(i + 1, coins - j - 1));
    }

    // return the maximum total of coins obtained so far
    return dp[i][coins];
  }

  // call the dfs function on the first pile with all the coins remaining
  return dfs(0, k);
}
