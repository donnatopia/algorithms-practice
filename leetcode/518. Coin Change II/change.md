# 518. Coin Change II

## <a href='https://leetcode.com/problems/coin-change-ii/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an integer array coins representing `coins` of different denominations and an integer `amount` representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return `0`.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `amount = 5, coins = [1,2,5]` | `4` |
| 2 | `amount = 3, coins = [2]` | `0` |
| 3 | `amount = 10, coins = [10]` | `1` |

### Constraints:

- `1 <= coins.length <= 300`
- `1 <= coins[i] <= 5000`
- All the values of `coins` are unique.
- `0 <= amount <= 5000`

## <a href='./change.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 62 ms | 60.29% |
| Memory | 41.79 MB | 93.76% |

### Time and Space Complexity
  - Time Complexity: `O(m * n)`
    - iteration of through the length of coins is O(m), where m is the length of coins
    - at each iteration of coins, we iterate from the coin value to the amount, which is the length of amount or O(n) at worse case scenario
    - stacked operations would result in O(m * n) time complexity, where m is the length of coins and n is the size of amount
  - Space Complexity: `O(n)`
    - the variable dp is reliant on the size of amount, so the space complexity is O(n), where n is the size of amount

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - amount (number): total to build up the coins to
    - coins (number[]): array of possible coins to add up to make into the total
  - O:
    - number of combinations that can be made from coins to add up to amount
  - C:
    - infinite number of each kind of coin
    - answer is guaranteed to fit into a signed 32-bit integer
  - E:
    - no combinations will yield zero

### Strategy
- Plan A:
  - need to order the coins
  - iterate through coins
    - at each index, try to create the amount soley from the coin at the current index
    - if possible
      - then see if the coin at the current index can be made with the other remaining coins through recursion
      - multiple the current combination number by 1 + the number of ways the current coin can be made with the first couple of coins
    - else
      - try to compose the remaining bits with coins of lesser denomination
  - to prevent running the same function multiple times, would probably need memoization

- Plan B (DP):
  - create a dp where each value correlates to the number of combinations to make up the index amount
    - dp[0] correlates to the number of combinations to make up an amount of 0
    - dp[4] correlates to the number of combinations to make up an amount of 4 with the given coins
  - iterate through all the coins
    - update each dp with the value of if we were to add the current coin into the available coin to make up the given amount
    - what does it mean to consider adding the current coin to make up the current amount?
      - it means that i need to use at least one of the current coin to make up the current amount
      - if i use at least one of the current coin, then the remainder amount is the total amount - the current coin value
      - using dynamic programming, i would find the number of ways to make up the remainder amount by obtaining the dp for the total amount - current coin value thus far
      - add this value to the dp for the amount
  - return the dp at the amount index

### Pseudocode
- Plan A:
  - sort the coins in ascending order
  - define a variable called totalCombos and set to 0
  - iterate through through the length of coins
    - define the remaining as the modulo value of amount and coin at current index
    - if remaining is 0
      - define a variation variable that is equal to the current coin amount and run it through the function with the coins prior to the current index
      - increment totalCombos by variation variable + 1
    - else
      - set a for loop from 0 to the current index
  - return totalCombos

- Plan B:
  - define dp as an array of length amount + 1 filled with 0
  - define dp at the 0 index as 1
  - iterate through all the coins in coins array
    - for loop from current coin value to amount index
      - increment the value dp at current amount index with the value from dp at the difference between the current amount and current coin value
  - return dp at the amount index

## <a href='./change.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```