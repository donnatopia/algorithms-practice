# 2369. Check if There is a Valid Partition For The Array

## <a href='https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given a 0-indexed integer array `nums`. You have to partition the array into one or more contiguous subarrays.

We call a partition of the array valid if each of the obtained subarrays satisfies one of the following conditions:

- The subarray consists of exactly `2` equal elements. For example, the subarray `[2,2]` is good.
- The subarray consists of exactly `3` equal elements. For example, the subarray `[4,4,4]` is good.
- The subarray consists of exactly `3` consecutive increasing elements, that is, the difference between adjacent elements is `1`. For example, the subarray `[3,4,5]` is good, but the subarray `[1,3,5]` is not.

Return `true` if the array has at least one valid partition. Otherwise, return `false`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [4,4,4,5,6]` | `true` |
| 2 | `nums = [1,1,1,2]` | `false` |

### Constraints:

- `2 <= nums.length <= 10<sup>5</sup>`
- `1 <= nums[i] <= 10<sup>6</sup>`

## <a href='./validPartition.js'>About the Solution</a>

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

## <a href='./validPartition.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```