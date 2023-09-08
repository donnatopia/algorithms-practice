# 118. Pascal's Triangle

## <a href='https://leetcode.com/problems/pascals-triangle/?envType=daily-question&envId=2023-09-08'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given an integer `numRows`, return the first `numRows` of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

![Pascal's Triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `numRows = 5` | `[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]` |
| 2 | `numRows = 1` | `[[1]]` |

### Constraints:

- `1 <= numRows <= 30`

## <a href='./generate.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 55 ms | 53.84% |
| Memory | 42.24 MB | 49.48% |

### Time and Space Complexity
  - Time Complexity: `O(n^2)`
    - iteration through each number of rows to generate the matrix is linear time complexity
    - additional iteration within each row for each column is linear (each iteration will increase constantly by 1 with the addition of a new row)
    - total time complexity is O(n^2), where n is the numOfRows
  - Space Complexity: `O(n^2)`
    - size of the dp is contigent on the size of numOfRows (similar reasoning with time complexity)
    - thus, the space complexity is dominated by the dp data structure, with a O(n^2) space complexity

### Input, Output, Constraints, Edge (IOCE)

  - I: numOfRows (number)
  - O: matrix (number[][]), where the row number of the matrix correlates with the numOfRows in input
  - C: N/A
  - E:
    - base case is the 1 would yield `[[1]]`

### Strategy / Pseudocode
- Plan A (dp):
  - set dp to equal `[[1]]`
  - if the numOfRows is 1, then return the dp at this point
  - start iteration loop from 2 to numOfRows, inclusive
    - start a new row and set to empty array
    - start a new iteration loop from 0 to the length of the previous row
      - if the element index is either the first or last element, then push 1
      - else
        - the element is equal to the sum of the element in the row before with indices before and at the current elemental index
  - return the dp

## <a href='./generate.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```