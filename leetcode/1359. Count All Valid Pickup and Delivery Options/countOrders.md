# 1359. Count All Valid Pickup and Delivery Options

## <a href='https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/?envType=daily-question&envId=2023-09-10'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given `n` orders, each order consist in pickup and delivery services.

Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i).

Since the answer may be too large, return it modulo 10^9 + 7.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 1` | `1` |
| 2 | `n = 2` | `2` |
| 3 | `n = 3` | `90` |

### Constraints:

- `1 <= n <= 500`

## <a href='./countOrders.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 46 ms | 92.31% |
| Memory | 41.96 MB | 69.23% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iteration through the length of n has linear time complexity
  - Space Complexity: `O(1)`
    - no additional data structures created

### Input, Output, Constraints, Edge (IOCE)

  - I: n (number)
  - O: number of possible sequences
  - C: return as modulo 10^9 + 7
  - E: N/A

### Strategy / Pseudocode
- Plan A (math):
  - set base case that when n = 1, there is only 1 combination
  - iterate from 2 to n to generate the remaining orders
    - for every iteration, there are 2i possible positions for pick up and delivery
    - for pick up, this can go in any position except the last position
      - so the possible combinations for pick up is 2*i - 1
    - for delivery, this can only go in positions after the delivery
      - so the possible combinations for delivery is i
    - the total number of combinations for a specific iteration would be the product of the previous iteration, possible combinations for pick up, and possible combinations for delivery
  - store each number as a modulo of 10^9 + 7
  - since each number only relies on the previous number and not a subproblem
    - then we can just keep building up the number from the base 1

## <a href='./countOrders.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```