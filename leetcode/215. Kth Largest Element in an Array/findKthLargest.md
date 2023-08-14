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
| Runtime | 110 ms | 81.05% |
| Memory | 51.37 MB | 60.63% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
  - at each iteration of quickSelect, a partitioning step is performed, which is linear time to rearrange all the elements
  - subsequent calls to the function reduces the problem size at the pivotIndex, which on average is half the size of the input array at each recursive calls
  - pivot strategy used is last element pivot strategy, which can result in the worse-case scenario, which is O(n<sup>2</sup>) calls to the function
  - however, on average, the time complexity performs closer to O(n)
 - Space Complexity: `O(n)`
  - the space complexity is dependent on the recursion depth of the quickSelect function
  - worse case is n calls to the quickSelect function, which results in space complexity of O(n)

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

- Plan B (quick select):
  - pick a pivot index that sorts the values roughly as values less than the current value and values greater than the current value
  - if the pivot index is equal to k
    - then return the value at the current index
  - else if the pivot index is greater than k
    - then resort the values but decrease the right range to pivot index - 1
  - else if the pivot index is less than k
    - then resort the values but increase the left range to pivot index + 1

### Pseudocode
- Plan A (includes sorting):
  - sort the array in descending order
  - return the (k - 1)th element in the sorted array

- Plan B (quick select):
  - create a function called quickSelect
  - call the function quickSelect
    - left range is set to 0
    - right range is set to the length of num - 1
    - index to search for is k - 1 (since arrays are zero-indexed)

  - quickSelect
    - define a variable called the pivotValue and set to value at right
    - define a variable called pivotIndex and set to left
    - for loop from left until right
      - if the value at current index is greater than the pivotValue
        - switch the value at the currentIndex with the value at the pivotIndex
        - increment the pivotIndex
    - switch the value at the pivotIndex with the value at right
    - if the pivotIndex is equal to index to search for
      - return the value at pivotIndex
    - else if the pivotIndex is less than the index to search for
      - recursively call the quickSelect
        - left range is set to pivotIndex + 1
        - right range is set to right
        - index to search for is k - 1
    - else if the pivotIndex is greater than the index to search for
      - recursively call the quickSelect
        - left range is set to left
        - right range is set to pivotIndex - 1
        - index to search for is k - 1

## <a href='./findKthLargest.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```