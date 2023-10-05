# 229. Majority Element II

## <a href='https://leetcode.com/problems/majority-element-ii/?envType=daily-question&envId=2023-10-05'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

Follow up: Could you solve the problem in linear time and in O(1) space?

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [3,2,3]` | `[3]` |
| 2 | `nums = [1]` | `[1]` |
| 3 | `nums = [1,2]` | `[1,2]` |

### Constraints:

- `1 <= nums.length <= 5 * 10**4`
- `-10**9 <= nums[i] <= 10**9`

## <a href='./majorityElement.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 48 ms | 96.03% |
| Memory | 45.66 MB | 15.56% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iterating through all the elements of nums is linear
  - Space Complexity: `O(n)`
    - storing the frequency and valid elements each are each linear

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: number[] containing elements whose occurrence exceeds n/3
  - C: N/A
  - E: N/A

### Strategy / Pseudocode
- Plan A (brute force):
  - find the threshold occurrence value
  - create a dictionary of all the values and their occurrence
  - iterate through nums and update the number of occurrence
  - create an empty array
  - iterate through all the values of the dictionary
    - if the value occurs more than the threshold value, then push into array
  - return array

## <a href='./majorityElement.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```