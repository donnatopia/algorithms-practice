# 1282. Group the People Given the Group Size They Belong To

## <a href='https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/?envType=daily-question&envId=2023-09-11'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There are `n` people that are split into some unknown number of groups. Each person is labeled with a unique ID from `0` to `n - 1`.

You are given an integer array `groupSizes`, where `groupSizes[i]` is the size of the group that person `i` is in. For example, if `groupSizes[1] = 3`, then person `1` must be in a group of size `3`.

Return a list of groups such that each person `i` is in a group of size `groupSizes[i]`.

Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `groupSizes = [3,3,3,3,3,1,3]` | `[[5],[0,1,2],[3,4,6]]` |
| 2 | `groupSizes = [2,1,3,3,3,2]` | `[[1],[0,5],[2,3,4]]` |

### Constraints:

- `groupSizes.length == n`
- `1 <= n <= 500`
- `1 <= groupSizes[i] <= n`

## <a href='./groupThePeople.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 82 ms | 52.72% |
| Memory | 47.27 MB | 46.20% |

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iteration thorugh the groupSizes is linear
  - Space Complexity: `O(n)`
    - grouping is the leading data structure, whose size correlates to the number of unique lengths present in groupSizes
    - there can be as much as n / 2 unique lengths, which is still linear time complexity

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: number[][]
  - C: N/A
  - E: multiple solns => return at least 1

### Strategy / Pseudocode
- Plan A:
  - let result = [];
  - create an object that stores all the different lengths as keys
  - iterate through the length of groupSizes
    - if the length already exists in the object
      - if the array at the object's length is equal to the length
        - push the value to the result
        - reset the object's length value to an empty array
    - else
      - set the object at length to be an empty array
    - push the index to the array
  - return result concated with the values of the object

## <a href='./groupThePeople.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```