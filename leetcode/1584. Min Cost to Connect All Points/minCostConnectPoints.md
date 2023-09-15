# 1584. Min Cost to Connect All Points

## <a href='https://leetcode.com/problems/min-cost-to-connect-all-points/description/?envType=daily-question&envId=2023-09-15'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [xi, yi]`.

The cost of connecting two points `[xi, yi]` and `[xj, yj]` is the manhattan distance between them: `|xi - xj| + |yi - yj|`, where `|val|` denotes the absolute value of `val`.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.


### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `points = [[0,0],[2,2],[3,10],[5,2],[7,0]]` | `20` |
| 2 | `points = [[3,12],[-2,5],[-4,1]]` | `18` |

### Constraints:

- `1 <= points.length <= 1000`
- `-106 <= xi, yi <= 106`
- All pairs `(xi, yi)` are distinct.

## <a href='./minCostConnectPoints.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 9933 ms | 5.14% |
| Memory | 44.71 MB | 94.56% |

### Time and Space Complexity
  - Time Complexity: `O(n^3)`
    - there are 3 nested loop within the findMinDistance
  - Space Complexity: `O(n)`
    - seen is a set that contains all the points visited, which should be the same as the length of points at the end of the function, so the space complexity is O(n)

### Input, Output, Constraints, Edge (IOCE)

  - I: number[][] of points
  - O: minimum cost to make all points connects with exactly one simple path between two points
  - C: N/A
  - E:
    - only one point in points will yield 0
    - two points will yield the manhattan distance between the two

### Strategy
- Plan A (failed to consider cyclic structures):
    - need to minimize the difference between x's and y's
    - eliminate the point once it has been used
    - return the manhattan distance

    - dp/brute force
        - maybe make a matrix where the points is the row and column
        - each element would represent the manhattan distance between the row and column point
        - iterate through all the column
            - take the smallest value in a column and add to total

- Plan B:
  - find the minimum distance spanning from nodes that already been visited

### Pseudocode
- Plan A:
    - define dp as an Array of length points filled with Array of length points filled with 0
    - iterate for the length of points
        - iterate from index + 1 to the length of points
            - set the dp at this point to be the manhattan distance between the two points
    - set the total to be 0
    - iterate through all the columns of the matrix
        - add the minimum value of the column to the total
    - return the total

- Plan B:
  - create a function that accepts an array of points to find the minimum distance
  - if the array is equal to the length of points
    - then return
  - let minDistance = Number.POSITIVE_INFINITY
  - let nextNode = 0;
  - iterate for the length of the inputedPoints
    - define the [x1, y1] as the coordinates of the inputtedPoints[i];
    - iterate through the remainder of points
      - if the node has not been visited
        - define [x2, y2] as the coordinates of points[j]
        - define distance as the sum of the difference between x and y
        - if the distance is less than minDistance
          - set the minDistance to distance
          - set next Node to j
  - add the minDistance to the cost
  - set the nextNode as visited
  - recall the function with the same array concatted with the nextNode

## <a href='./minCostConnectPoints.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```