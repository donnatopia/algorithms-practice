# 1512. Number of Good Pairs

## <a href='https://leetcode.com/problems/number-of-good-pairs/?envType=daily-question&envId=2023-10-03'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an array of integers nums, return the number of good pairs.

A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i < j`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,2,3,1,1,3]` | `4` |
| 2 | `nums = [1,1,1,1]` | `6` |
| 3 | `nums = [1,2,3]` | `0` |

### Constraints:

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## <a href='./numIdenticalPairs.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 56 ms | 28.70% |
| Memory | 42.31 MB | 11.31% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iterate through the entire length of nums is linear
  - Space Complexity: `O(n)`
    - the freq object is depenedent on the number of unique numbers in nums, which is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: number of good pairs
  - C: N/A
  - E: 1 element in the array => return 0

### Strategy
- Plan A:
  - iterate through the elements in num
    - if the number of occurrence of the current number is greater than 1
      - add to the number of pairs the number of occurrence
    - increment the number of occurrence of the current number

### Pseudocode
- Plan A:
  - create an empty freq objec
  - initialize pairs as 0
  - iterate through nums
    - if the current number exists in the freq object
      - add the frequency of the current number to pairs
    - increment the value of frequency of number
  - return pairs

## <a href='./numIdenticalPairs.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```