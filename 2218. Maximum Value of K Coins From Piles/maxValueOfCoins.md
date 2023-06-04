# 2218. Maximum Value of K Coins From Piles

## <a href='https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There are `n` piles of coins on a table. Each pile consists of a positive number of coins of assorted denominations.

In one move, you can choose any coin on top of any pile, remove it, and add it to your wallet.

Given a list `piles`, where `piles[i]` is a list of integers denoting the composition of the `ith` pile from top to bottom, and a positive integer `k`, return the maximum total value of coins you can have in your wallet if you choose exactly `k` coins optimally.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `piles = [[1,100,3],[7,8,9]], k = 2` | `101` |
| 2 | `piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7` | `706` |

### Constraints:

- `n == piles.length`
- `1 <= n <= 1000`
- `1 <= piles[i][j] <= 105`
- `1 <= k <= sum(piles[i].length) <= 2000`

## <a href='./maxValueOfCoins.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime |  |  |
| Memory |  |  |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

- I:
  - piles (number[][]): denotes all the piles and integers from top to bottom
  - k (number): the number of times to draw a coin
- O:
  - the maximum total after optimally selecting k coins
- C: N/A
- E: N/A

### Strategy
- use dynamic programming

### Pseudocode
- create a depth first search (dfs) function
  - i is the current piles index
  - coins is the number of coins left to be removed

  - base case where current piles index (i) must be less than the number of piles
  - create a variable to store the maximum total of coins obtained so far
  - define it as when we skip the current pile and move onto the next pile

  - start a case where we iterate through the current pile
  - calculate the running total with curPile

  - iterate for the remainder of the current pile or the number of coins remaining
    - add the value from the current pile
    - recursively call the dfs to find the max value from pulling from an adjacent pile

  - return the maximum total of coins obtained so far

- call the dfs function on the first pile with all the coins remaining

## <a href='./maxValueOfCoins.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```