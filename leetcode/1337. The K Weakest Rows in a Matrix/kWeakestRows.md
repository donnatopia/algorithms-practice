# 1337. The K Weakest Rows in a Matrix

## <a href='https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/?envType=daily-question&envId=2023-09-18'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an `m x n` binary matrix `mat` of `1`'s (representing soldiers) and `0`'s (representing civilians). The soldiers are positioned in front of the civilians. That is, all the `1`'s will appear to the left of all the `0`'s in each row.

A row `i` is weaker than a row `j` if one of the following is true:

- The number of soldiers in row `i` is less than the number of soldiers in row `j`.
- Both rows have the same number of soldiers and `i < j`.

Return the indices of the `k` weakest rows in the matrix ordered from weakest to strongest.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `mat = [[1,1,0,0,0], [1,1,1,1,0], [1,0,0,0,0], [1,1,0,0,0], [1,1,1,1,1]], k = 3` | `[2,0,3]` |
| 2 | `mat = [[1,0,0,0], [1,1,1,1], [1,0,0,0], [1,0,0,0]], k = 2` | `[0,2]` |

### Constraints:

- `m == mat.length`
- `n == mat[i].length`
- `2 <= n, m <= 100`
- `1 <= k <= m`
- `matrix[i][j]` is either `0` or `1`.

## <a href='./kWeakestRows.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 45 ms | 97.04% |
| Memory | 44.6 5MB | 23.68% |

### Time and Space Complexity
  - Time Complexity: `O(n^2 + k)`
    - iterating through the length of matrix to generate the number of soliders per row is O(n^2), where n is the length of the matrix
    - iterating through all the rows of the matrix up until the k is O(k)
    - congruent functions are additive, so time complexity is O(n^2 + k)
  - Space Complexity: `O(n + k)`
    - the soliders object is size dependent on the number of rows, so the space complexity is O(n), where n is the number of rows in the matrix
    - the weakest rows array is size dependent on k, so the space complexity is O(k)

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - matrix of 0's (civilians) and 1's (soliders)
    - k (number)
  - O:
    - return the first k weakest rows
  - C: N/A
  - E:
    - the same number of soliders, ranking of the row is dependent on the index of the row

### Strategy / Pseudocode
- Plan A (iterative):
  - create an object whose key is the number of soliders in the row and the value is an array of rowIndices
  - iterate through all the rows in the matrix
    - count up all the soliders in row
    - add the row index to the respective solider number in the object
  - set the numberOfSoliders to the max number of soliders in the matrix
  - create an empty result array
  - while the empty result array's length is not equal to k
    - if the object at the numberOfSolidersKey exists
      - add the first value of the object at the numberOfSoliders key
      - if the array ran out of values, then decrement the numberOfSoliders
    - else
      - decrement the number of soliders
  - return result array

- Plan B:
  - reduce each row into number of soliders
  - map the matrix into number of soliders, keeping the relative order of index
  - return the first k elements of the mapped matrix's index

## <a href='./kWeakestRows.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```