# 4. Median of Two Sorted Arrays

## <a href='https://leetcode.com/problems/median-of-two-sorted-arrays/?envType=daily-question&envId=2023-09-21'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums1 = [1,3], nums2 = [2]` | `2` |
| 2 | `nums1 = [1,2], nums2 = [3,4]` | `2.5` |

### Constraints:

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

## <a href='./findMedianSortedArray.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 89 ms | 66.59% |
| Memory | 48.29 MB | 34.88% |

### Time and Space Complexity
  - Time Complexity: `O((n + m) log (m + n))`
    - the leading function is sorting the combined array
  - Space Complexity: `O(n + m)`
    - the space is dominated by the size of the combined array, which is m + n

### Input, Output, Constraints, Edge (IOCE)

  - I: 2 sorted arrays
  - O: median of the two sorted arrays when combined
  - C: time complexity is log(m + n)
  - E:
    - one array is empty, then get the median of the non-empty array
    - negative values present

### Strategy / Pseudocode
- Intuition: need to split each array in half at each iteration in order to receive log(m + n) space complexity
- Plan A:
  - get the median index
    - the median will be located at the average of the combined array lengths - 0.5
    - if the median index is a decimal,
      - then median is the average of the floor and ceil values
  - edge cases
    - if either arr1 or arr2 is empty, then get the median based on the singularly avaliable array

  - combine the arrays (no regards for time complexity)
  - get the median at the given index

## <a href='./findMedianSortedArrays.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```