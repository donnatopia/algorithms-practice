# 1046. Last Stone Weight

## <a href='https://leetcode.com/problems/last-stone-weight/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an array of integers `stones` where `stones[i]` is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:

- If `x == y`, both stones are destroyed, and
- If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.

At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return `0`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `stones = [2,7,4,1,8,1]` | `1` |
| 2 | `stones = [1]` | `1` |

### Constraints:

- `1 <= stones.length <= 30`
- `1 <= stones[i] <= 1000`


## <a href='./lastStoneWeight.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 57 ms | 82.81% |
| Memory | 42.2 MB | 93.44% |

### Time and Space Complexity
 - Time Complexity: `O(n^2)`
 - Space Complexity: `O(1)`

### Input, Output, Constraints, Edge (IOCE)

 - I: array of stone weights
 - O: weight of the last remaining stone or 0
 - C: N/A
 - E:
  - empty array returns 0
  - array with singular stone weight returns the stone weight

### Strategy
- order the array in descending order
- while there are at least two elements in the array
  - subtract the second element from the first element
  - remove the first two elements
  - if the difference is greater than 0
    - place the difference in its correct order in the array
- return the last element of the array if it exists or 0

### Pseudocode
- use the sort method to sort the array in descending order
- while loop for array.length greater than 1
  - create a difference variable from first - second
  - remove the first two elements
  - if difference is greater than 0
    - if less than the last element or length is 0, then push
    - if greater than the first element, then unshift
    - iterate through the sorted array
      - if the difference is equal to or less than the current value
        - then insert the value at the current index
        - set i to array length
      - if the index is the last one
        - push the value at the end of the array
- return the last element of the array if it exists or 0

## <a href='./lastStoneWeight.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```