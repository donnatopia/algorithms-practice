# 343. Integer Break

## <a href='https://leetcode.com/problems/integer-break/?envType=daily-question&envId=2023-10-06'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer `n`, break it into the sum of `k` positive integers, where `k >= 2`, and maximize the product of those integers.

Return the maximum product you can get.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 2` | `1` |
| 2 | `n = 10` | `36` |

### Constraints:

- `2 <= n <= 58`

## <a href='./integerBreak.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 53 ms | 47% |
| Memory | 42.12 MB | 36% |

### Time and Space Complexity
  - Time Complexity: `O(n^2)`
    - the first for loop iterates through the length of n to fill the array
      - the second for loop iterates from 1 to the half way point to figure out the breaking point
        - this is essentially linear as well
    - two linear complexity is n^2
  - Space Complexity: `O(n)`
    - dp is an array up to the size of n, so the size is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: number (n)
  - O: number (n), the maximum product of at least 2 values that add up to n
  - C: N/A
  - E: N/A

### Strategy / Psuedocase
- Plan A (dp):
  - Base Cases:
    - when n = 2, then the maximum product is 1 (1 * 1)
    - when n = 3, then the maximum product is 2 (2 * 1)
  - Increasing Cases:
    - when n = 4, then the maximum product is 4 (2 * 2)
    - when n = 5, then the maximum product is 6 (3 * 2)
    - when n = 6, then the maximum product is 9 (3 * 3)

  - need to take return the base cases
  - afterwards,
    - from 4 to n
      - determine the dp at the current index
      - it is equal to the maximum value of the product of dp at two numbers that add up to the current index
      - would need to iterate through an internal loop to figure out what are the two numbers that add up to the current index
  - return the dp at the n

## <a href='./integerBreak.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```