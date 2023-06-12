# 228. Summary Ranges

## <a href='https://leetcode.com/problems/summary-ranges/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given a sorted unique integer array `nums`.

A range `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in n`ums.

Each range `[a,b]` in the list should be output as:

- `"a->b"` if `a != b`
- `"a"` if `a == b`

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [0,1,2,4,5,7]` | `["0->2","4->5","7"]` |
| 2 | `nums = [0,2,3,4,6,8,9]` | `["0","2->4","6","8->9"]` |

### Constraints:

- `0 <= nums.length <= 20`
- `-2^31 <= nums[i] <= 2^31 - 1`
- All the values of `nums` are unique.
- `nums` is sorted in ascending order.

## <a href='./summaryRanges.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | `55 ms` | `70.34%` |
| Memory | `42.2 MB` | `39.62%` |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: number[]
  - numbers are all unique and sorted
 - O: string[]
  - each element of the string is is a string that represents the smallest range between elements in the string
  - ranges are represented: [a, b] = "a->b"
  - no range is represented: "a"
 - C:
  - nums are sorted in ascending order
  - all numbers are unique
  - inclusive of negative numbers
 - E:
  - no ranges => all the elements in the array in string form

### Strategy
- iterate through the numbers
  - for the current number, determine if the next number is part of the range
  - once the range ends, add the number to the result array
  - move onto the next index number
- return the array

### Pseudocode
- create a variable of an array
- create an index variable and set to 0
- while the index is less than nums array
  - create a variable that stores the current value at the index called start
  - while the value at the next index is only 1 greater than the current value
    - increment the index
  - if the value at the current index is not the start
    - then add the start variable + -> + end variable
  - else
    - add teh start variable in string form to the array
- return the array

## <a href='./summaryRanges.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```