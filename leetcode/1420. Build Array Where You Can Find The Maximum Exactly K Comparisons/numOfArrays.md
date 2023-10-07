# 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons

## <a href='https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given three integers `n`, `m` and `k`. Consider the following algorithm to find the maximum element of an array of positive integers:

![Schema](https://assets.leetcode.com/uploads/2020/04/02/e.png)

You should build the array arr which has the following properties:

- `arr` has exactly `n` integers.
- `1 <= arr[i] <= m` where `(0 <= i < n)`.
- After applying the mentioned algorithm to `arr`, the value `search_cost` is equal to `k`.

Return the number of ways to build the array `arr` under the mentioned conditions. As the answer may grow large, the answer must be computed modulo `10**9 + 7`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 2, m = 3, k = 1` | `6` |
| 2 | `n = 5, m = 2, k = 3` | `0` |
| 3 | `n = 5, m = 2, k = 3` | `1` |

### Constraints:

- `1 <= n <= 50`
- `1 <= m <= 100`
- `0 <= k <= n`

## <a href='./numOfArrays.js'>About the Solution</a>

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
  - O:
  - C:
  - E:

### Strategy
-

### Pseudocode
-

## <a href='./numOfArrays.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```