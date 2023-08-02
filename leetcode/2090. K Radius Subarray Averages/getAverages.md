# 2090. K Radius Subarray Averages

## <a href='https://leetcode.com/problems/k-radius-subarray-averages/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given a 0-indexed array `nums` of `n` integers, and an integer `k`.

The k-radius average for a subarray of `nums` centered at some index `i` with the radius `k` is the average of all elements in `nums` between the indices `i - k` and `i + k `(inclusive). If there are less than k elements before or after the index `i`, then the k-radius average is `-1`.

Build and return an array `avgs` of length `n` where `avgs[i]` is the k-radius average for the subarray centered at index `i`.

The average of `x` elements is the sum of the `x` elements divided by `x`, using integer division. The integer division truncates toward zero, which means losing its fractional part.

For example, the average of four elements `2`, `3`, `1`, and `5` is `(2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75`, which truncates to `2`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [7,4,3,9,1,8,5,2,6], k = 3` | `[-1,-1,-1,5,4,4,-1,-1,-1]` |
| 2 | `nums = [100000], k = 0` | `[100000]` |
| 3 | `nums = [8], k = 100000` | `[-1]` |

### Constraints:

- `n == nums.length`
- `1 <= n <= 105`
- `0 <= nums[i], k <= 10^5`

## <a href='./getAverages.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 290 ms | 99.43% |
| Memory | 96.12 MB | 12.83% |

### Time and Space Complexity
 - Time Complexity: `O(k + m)`
  - the first loop has a time complexity of O(2 * k + 1;)
  - the second loop has a time complexity of O(m - k)
  - adding all those variables creates a total time complexity is O(k + m), where m is the length of nums
 - Space Complexity: `O(m)`
  - size of avgs is dependent on the size of nums, which makes the space complexity O(m)

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - nums (number[]): 0-indexed array
  - k (number): deviation from current index to take range
 - O:
  - number[] containing the averages of values from k deviation from the index
    - values should be truncated
 - C:
  - nums.length is at least 1 and can be as large as 10^5
 - E: N/A

### Strategy
- Plan A (may be time intensive):
  - create a result array
  - use sliding window
  - determine the sum of values at k
  - create for loop for length of nums
    - if index is from k to length of n, inclusive
      - calculate the average at the index point
      - push the value into the result array
      - subtract the value at the front of the range
      - add the value at the end of the range
    - else add -1 to the result array
  - return result array


### Pseudocode
- Plan A
  - define avgs array as an empty array
  - define n as the length of range, which is 2 * k + 1;
  - define the sum as 0
  - create loop to calculate the sum from range at first avaliable variable
    - if value is less than k, then push -1
    - return the value if the length of avgs is equal to nums length
  - create for loop for length of nums
    - if index is less than length of nums - k
      - push the average at the index (sum / n)
      - decrement the sum by the value at the index - k
      - increment the sum by the value at the index + k + 1
    - else
      - push -1
  - return avgs array

## <a href='./getAverages.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```