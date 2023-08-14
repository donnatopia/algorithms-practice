# 215. Kth Largest Element in an Array

## <a href='https://leetcode.com/problems/kth-largest-element-in-an-array/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Can you solve it without sorting?

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [3,2,1,5,6,4], k = 2` | `5` |
| 2 | `nums = [3,2,3,1,2,4,5,5,6], k = 4` | `4` |

### Constraints:

- 1 <= k <= nums.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>

## <a href='./findKthLargest.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 148 ms | 55.40% |
| Memory | 51.86 MB | 38.64% |

### Time and Space Complexity
 - Time Complexity: `O(n log n)`
  - sorting has a time complexity of O(n log n)
 - Space Complexity: `O(n)`
  - sorting has a space complexity of O(log n)

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - nums (number[]): unsorted array that may include duplicates
  - k (number)
 - O:
  - number that is the kth largest element in the array
 - C:
  - challenge is to try to solve without sorting
 - E:
  - duplicates may exist, which contribute to the kth order of an element

### Strategy
- Plan A (includes sorting):
  - sort the array
  - return the kth element in the array - 0-indexed array

### Pseudocode
- Plan A (includes sorting):
  - sort the array in descending order
  - return the (k - 1)th element in the sorted array

## <a href='./findKthLargest.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```