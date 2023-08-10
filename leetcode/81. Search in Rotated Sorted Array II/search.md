# 81. Search in Rotated Sorted Array II

## <a href='https://leetcode.com/problems/search-in-rotated-sorted-array-ii/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There is an integer array `nums` sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, `nums` is rotated at an unknown pivot index `k` (`0 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,4,4,5,6,6,7]` might be rotated at pivot index `5` and become `[4,5,6,6,7,0,1,2,4,4]`.

Given the array `nums` after the rotation and an integer `target`, return `true` if `target` is in `nums`, or `false` if it is not in `nums`.

You must decrease the overall operation steps as much as possible.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [2,5,6,0,0,1,2], target = 0` | `true` |
| 2 | `nums = [2,5,6,0,0,1,2], target = 3` | `false` |

### Constraints:

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is guaranteed to be rotated at some pivot.
- `-10^4 <= target <= 10^4`

## <a href='./search.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 59 ms | 55.93% |
| Memory | 42.46 MB | 45.41% |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(log n)`
  - binary search has a time complexity of O(log n)
 - Space Complexity: `O(1)`
  - no additional data structures were needed, so space complexity is constant

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - nums (number[]): containing numbers arranged in ascending order, but pivoted at unknown k index
  - target (number): may or not be present within nums
 - O:
  - boolean indicating if target is present in nums
 - C:
  - decrease the overall operation steps as much as possible
 - E:
  - duplicates may be present in nums

### Strategy / Pseudocode
- Plan A (modified binary search):
  - define a left pointer
  - define a right pointer
  - while the left pointer is less than or equal to the right pointer
    - define the mid as the floor value of average between the left and right pointer
    - check to see if value at mid is equal to the target
      - return true
    - need to determine if there is a pivot
    - check to see if the value at the left index is less than or equal to the value at the mid -> if so, then the first half is not part of the pivot
      - if the value at mid is less than the target and greater than or equal to the value at left
        - set the right pointer to the mid - 1
      - else
        - set the left pointer to the mid + 1
    - else
      - if the value at the mid is greater than the target and less than or equal to the value at the right pointer
        - set the left pointer to the mid + 1
      - else
        - set the right pointer to the mid - 1
  - return false

## <a href='./search.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```