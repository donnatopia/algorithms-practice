# 799. Champagne Tower

## <a href='https://leetcode.com/problems/champagne-tower/?envType=daily-question&envId=2023-09-24'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

We stack glasses in a pyramid, where the first row has `1` glass, the second row has `2` glasses, and so on until the 100th row.  Each glass holds one cup of champagne.

Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)

For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.

![Champagne Tower Schematic](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png)

Now after pouring some non-negative integer cups of champagne, return how full the `jth` glass in the `ith` row is (both `i` and `j` are 0-indexed.)

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `poured = 1, query_row = 1, query_glass = 1` | `0` |
| 2 | `poured = 2, query_row = 1, query_glass = 1` | `0.5` |
| 3 | `poured = 100000009, query_row = 33, query_glass = 17` | `1` |

### Constraints:

- `0 <= poured <= 10^9`
- `0 <= query_glass <= query_row < 100`

## <a href='./champagneTower.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 59 ms | 79.63% |
| Memory | 49.50 MB | 8.21% |

### Time and Space Complexity
  - Time Complexity: `O(query_row^2)`
    - iterating through all the slots of tower means that the time complexity is congruent with the space complexity
  - Space Complexity: `O(query_row^2)`
    - the tower data structure size is dicatated by the query_row size,
    - since the data structure is 2-D, the space complexity is quadratic

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - poured: number of champagne glasses poured
    - query_row: number of row (0-indexed)
    - query_glass: number of column (0-indexed)
  - O: decimal representation of fullness of glass in query row and column
  - C: N/A
  - E: 0 poured => 0 filled

### Strategy
- Plan A:
  - after filling all the cups in the rows prior to the query row, determine how many glasses of champagne is left to distribute to the query row
  - if there is not enough cups to fill the rows prior to the query row, then return 0
  - determine how many cups are in the query row,
    - if the cups remaining exceeds the number of cups in the query row => then return 1
  - else the cup distribution is normally distributed towards the middle

### Pseudocode
- Plan A:
  - set cupsInRow to 1
  - iterate from 0 to the query row
    - subtract cupsInRow from poured cups
    - if poured is 0, then return 0
    - increment cupsInRow
  - if poured > cupsInRow, then return 1
  -

## <a href='./champagneTower.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```