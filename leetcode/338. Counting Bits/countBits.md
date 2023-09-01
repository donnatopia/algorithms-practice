# 338. Counting Bits

## <a href='https://leetcode.com/problems/counting-bits/?envType=daily-question&envId=2023-09-01'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the number of `1`'s in the binary representation of `i`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 2` | `[0,1,1]` |
| 2 | `n = 5` | `[0,1,1,2,1,2]` |

### Constraints:

- `0 <= n <= 10^5`

### Follow Up:

- It is very easy to come up with a solution with a runtime of `O(n log n)`. Can you do it in linear time `O(n)` and possibly in a single pass?
- Can you do it without using any built-in function (i.e., like `__builtin_popcount` in C++)?

## <a href='./countBits.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 59 ms | 98.40% |
| Memory | 48.18 MB | 75.35% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iterate from 1 to n, so time is linear
  - Space Complexity: `O(n)`
    - array data structure for the dp is dependent on the size of n, so space is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: n (number)
  - O: number[], where each element indicates the number of 1s present in the binary representation of the index
  - C:
    - do it in O(n) time complexity?
  - E:
    - 0 => [0]
    - 1 => [0, 1]
    - 2 => [0, 1, 1]

### Strategy
- Plan A (dp):
  - create a dp where each element represents the number of occurrence of 1s in the binary representation of the number
  - need to keep track of the exponential values of 2 (i.e. 1, 2, 4, 8, 16)
    - the values of these indices will be 1 in the array cause their bit-wise representation will be (i.e. 10000)
  - for the values in between the exponential values of 2, the occurrence of 1s can be calculated based on the dp value after taking the current number minus the nearest exponential less than the current number
  - you would also need to add one to account for the nearest exponential value less than the current number
  - return this dp

### Pseudocode
- Plan A (dp):
  - create an array from 0 to n and fill the values with 1
  - keep a variable called exponentialSum and set to 0
  - iterate from 1 to n
    - if the exponentialSum times 2 is equal to the index <= this means that the next exponential sum has arisen
      - then set the exponentialSum to the index
    - set the dp at the current index to be dp at (current index - exponentialSum) + 1
  - return dp

## <a href='./countBits.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```