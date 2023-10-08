# 12. Coin Sums

## About the Problem

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

- 1p piece
- 2p piece
- 5p piece
- 10p piece
- 20p piece
- 50p piece
- 100p (£1)
- 200p (£2)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `makeChange(1)` | `1` |
| 2 | `makeChange(2)` | `2` |

## <a href='./coinSums.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we iterate through all the coins which is costantly at length 8
    - at each iteration we run from the coin value to the end of the amount, which is linear at worst case
    - so the time complexity is 8**n
  - Space Complexity: `O(n)`
    - we store dp the size of total, which is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: total amount in pences
  - O: number of coin combinations to make up the total
  - C: N/A
  - E: N/A

### Strategy / Pseudocode
- Plan A (dynamic programming):
  - create a 1D array that stands for the number of ways to make the total which is represented by the index of the array and set to all 0
    - i.e. dp[0] would stand for the number of ways to make the total 0
    - i.e. dp[5] would stand for the number of ways to make the total 5 with the given coins
  - create a constant array that stores all the possible pence values to pull from => call this coins
  - set the base case that dp[0] would be 0 since there are no combinations of the given coins to produce a total of zero
  - fill the dp of all the values, so iterate from 1 to n, inclusive
    - iterate through all the coins for values less than or equal to the current total value (no larger coin denomination can make the lower amount)
      - subtract the total with the current value => remainder
      - increment the dp at the total with 1 + dp at the remainder (this symbolizes the number of combinations if I were to include one of the current coin value)
  - return the dp at the total

## <a href='./coinSums.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```