# 33. Search in Rotated Sorted Array

## <a href='https://leetcode.com/problems/search-in-rotated-sorted-array/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There is an integer array `nums` sorted in ascending order (with distinct values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index 3 and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [4,5,6,7,0,1,2], target = 0` | `4` |
| 2 | `nums = [4,5,6,7,0,1,2], target = 3` | `-1` |
| 3 | `nums = [1], target = 0` | `-1` |

### Constraints:

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values of `nums` are unique.
- `nums` is an ascending array that is possibly rotated.
- `-10^4 <= target <= 10^4`

## <a href='./search.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 51 ms | 81.98% |
| Memory | 41.27 MB | 98.57% |

### Time and Space Complexity
 - Time Complexity: `O(log n)`
  - binary search is has a time complexity of O(log n)
 - Space Complexity: `O(1)`
  - there are no variables created that is size dependent on nums or target

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - nums (number[]) sorted in ascending order pivoted at unknown k index
  - target (number): possibly located within nums
 - O: number, which correlates to the index of target within nums if exists
  - if it does not exists, then return -1
 - C:
  - complete the function in log n
  - all numbers are unique
  - nums may not even be rotated
 - E:
  - array with negative numbers
  - nums is not even rotated

### Strategy
- Plan A (modified binary search):
  - the difference from the OG binary search is the while loop condition and the modifications for the left and right pointer
  - define the left pointer as 0
  - define the right pointer as the length of nums - 1
  - use while loop for while the left is less than or equal to the right
    - determine the midpoint index
    - determine the value at the midpoint index
    - if the value at the midpoint is equal to the target
      - return the midpoint index
    - if the value at the midpoint is less than the target
      - if the value at the right index is less than the target
        - set the
    - if the value at the midpoint is greater than the target
      - if the value at the left index is less than the target
        - set the right index to midpoint - 1
      - else if the value at the left index is greater than the target
        - set the left index to the midpoint + 1
      - else if the value at the left index is equal to the target
        - return the target

### Pseudocode
- Plan A:
  - define left pointer as 0
  - define right pointer as the last index
  - while the left pointer is less than or equal to the right pointer
    - define the mid as the floor value of the average between the left and right pointer
    - if the value at the mid is equal to the target
      - return mid

    - determine if there is a pivot
    - if the value at the left pointer is less than value at the mid
      - if value at the mid is greater than the target AND value at the left is less than or equal to the target
        - set right pointer to mid - 1
      - else
        - set the left pointer to mid + 1
    - else
      - if the value at mid is less than the target AND the value at the right is greater than or equal to the target
        - set the left pointer to mid + 1
      - else
        - set the right pointer to mid - 1
  - return -1

## <a href='./search.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```