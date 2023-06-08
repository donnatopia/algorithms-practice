# 217. Contains Duplicates

## <a href='https://leetcode.com/problems/contains-duplicate/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return false if every element is distinct.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `nums = [1,2,3,1]` | `true` |
| 2 | `nums = [1,2,3,4]` | `false` |
| 3 | `nums = [1,1,1,3,3,4,3,2,4,2]` | `true` |

### Constraints:

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## <a href='./containsDuplicates.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 73 ms | 98.90% |
| Memory | 55 MB | 40.43% |


### Time and Space Complexity
 - Time Complexity: `O(n)`
  - Creating a set from an array has linear time complexity as each element needs to be iterated over once
 - Space Complexity: `O(n)`
  - Creation of a set has linear space complexity because there can be a case where all the elements are unique and size of the set is equal to the size of the array.

### Input, Output, Constraints, Edge (IOCE)

 - I: number[]
 - O: boolean (if there are any duplicates in the array)
 - C: at least one number in the array
 - E:
  - 1 number would result in false

### Strategy
- convert the array to a set
- since sets can only contain unique variables, then if the size of the set is different compared to the size of the array, this would mean that there are duplicates

### Pseudocode
- convert array to a set
- return whether the set size is not equal to the length of the array

## <a href='./containsDuplicates.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```