# 287. Find the Duplicate Number

## <a href='https://leetcode.com/problems/find-the-duplicate-number/?envType=daily-question&envId=2023-09-19'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only one repeated number in `nums`, return this repeated number.

You must solve the problem without modifying the array `nums` and uses only constant extra space.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,3,4,2,2]` | `2` |
| 2 | `nums = [3,1,3,4,2]` | `3` |

### Constraints:

- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- All the integers in `nums` appear only once except for precisely one integer which appears two or more times.

## <a href='./findDuplicate.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 72 ms | 74.53% |
| Memory | 49.59 MB | 79.95% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iteration through all the elements of nums is dependent on the length of n
  - Space Complexity: `O(1)`
    - there are no space-dependent data structures created

### Input, Output, Constraints, Edge (IOCE)

  - I: array
  - O: number that is duplicated in inputted array
  - C:
    - use constant space
    - don't modify original array
  - E: only one element?

### Strategy
- Plan A:
  - iterate through the array
    - if the element's indexOf does not match lastIndexOf
      - then return that element

- Plan B:
  - Floyd's Cycle Detection

### Pseudocode
- Plan B (fast and slow pointer):
  - initialize the slow pointer to the first element of the array
  - initialize the fast pointer to the first element of the array
  - do while the slow pointer doesn't equal the fast pointer
    - set slow as the nums at slow
    - set fast as the nums at nums at fast
  - set the slow pointer to nums at 0
  - do while the slow pointer doesn't equal the fast pointer
    - set slow as nums[slow]
    - set fast as nums[fast]
  - return slow

## <a href='./findDuplicate.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```