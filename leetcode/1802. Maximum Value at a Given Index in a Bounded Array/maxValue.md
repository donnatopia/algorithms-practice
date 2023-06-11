# 1802. Maximum Value at a Given Index in a Bounded Array

## <a href='https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given three positive integers: `n`, `index`, and `maxSum`. You want to construct an array nums (0-indexed) that satisfies the following conditions:

- `nums.length == n`
- `nums[i]` is a positive integer where `0 <= i < n`.
- `abs(nums[i] - nums[i+1]) <= 1` where `0 <= i < n-1`.
- The sum of all the elements of `nums` does not exceed `maxSum`.
- `nums[index]` is maximized.

Return `nums[index]` of the constructed array.

Note that `abs(x)` equals `x` if `x >= 0`, and `-x` otherwise.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 4, index = 2,  maxSum = 6` | `2` |
| 2 | `n = 6, index = 1,  maxSum = 10` | `3` |

### Constraints:

- `1 <= n <= maxSum <= 10^9`
- `0 <= index < n`

## <a href='./maxValue.js'>About the Solution</a>

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

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - n (number): length of nums array
  - index (number; 0:n)
  - maxSum: sum of all the elements in nums array
 - O:
  - number (nums[index])
 - C:
  - nums[i] is a positive integer (0 <= i < n);
  - difference between adjacent elements is less than or equal to 1
  - sum of nums array is less than or equal to maxSum
  - nums[index] is the maximum value possible to fulfill all of these constraints
 - E:
  - singular element in nums array would return that value

### Strategy
- create an array of 1s
- increment at the location of the index until the maxSum is reached
  - i can only increment at the location of the index if the values at the right and left of the index are within 1 value from the index
  - as i have to increasingly increment the index, i will have to span out the incrementation
- return the value at the index

### Pseudocode
- create an array of 0s that span the length of n = nums
- create a function that returns the total of the all the elements in the array
- create a function that checks if i can increment at an index and increments
  - check to see if i can increment at this index
  - if the left and right values are valid (value is equal to the value at the given index or 1 greater)
    - increment the value at the given index
  - else compare the left and right value
    - apply the function to the smaller value (left or right) or whichever exists or left
- while the total of the all the elements in nums is less than maxSum
  - increment at the given index
- return the value at nums[index]

## <a href='./maxValue.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```