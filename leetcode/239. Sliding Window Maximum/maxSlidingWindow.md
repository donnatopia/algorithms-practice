# 239. Sliding Window Maximum

## <a href='https://leetcode.com/problems/sliding-window-maximum/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,3,-1,-3,5,3,6,7], k = 3` | `[3,3,5,5,6,7]` |
| 2 | `nums = [1], k = 1` | `[1]` |

### Constraints:

- `1 <= nums.length <= 10<sup>5</sup>`
- `-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>`
- `1 <= k <= nums.length`

## <a href='./maxSlidingWindow.js'>About the Solution</a>

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
    - nums (number[])
    - k: length of the sliding window
  - O:
    - number[] containing all the maximum values in k window length throughout nums
  - C: N/A
  - E:
    - k = 1: same array
    - negative numbers present

### Strategy
- Plan A:
  - find the maximum value from the first window
  - keep track of the index of maximum value
  - iterate through the remaining values of num
    - if the index of maximum value is out of range
      - restart the index of maximum value to the first element of new sliding window
      - find the maximum value from the new sliding window
    - else
      - compare the value at the max index to the new element
      - if the value at the max index is less than or equal to the new element
        - update the maxIndex to the currentIndex
        - push the value into array
      - else if the value at the maxIndex is greater than the new element
        - push the value into array

### Pseudocode
- Plan A:
  - define a function that iterates from start to end and finds the maxIndex
    - set maxIndex to 0
    - iterate from 1 to the end
      - if the current value is greater than or equal to the value at the maxIndex
        - update the maxIndex to the currentIndex
    - return the maxIndex
  - define result array to empty array
  - set the maxIndex to the value after calling the findMaxIndex function on 0 to k -1
  - iterate from k to nums.length
    - if the maxIndex is less than i - k + 1
      - set the maxIndex to findMaxIndex from i - k + 1 to i
    - else
      - if value at maxIndex is less than or equal to value at index
        - set the maxIndex to currentIndex
    - push the value at maxIndex to result array
  - return the result array


## <a href='./maxSlidingWindow.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```