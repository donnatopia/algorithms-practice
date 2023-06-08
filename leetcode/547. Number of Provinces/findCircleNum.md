# 547. Number of Provinces

## <a href='https://leetcode.com/problems/number-of-provinces/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix isConnected where `isConnected[i][j] = 1` if the `ith` city and the `jth` city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return the total number of provinces.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `isConnected = [[1,1,0],[1,1,0],[0,0,1]]` | `2` |
| 2 | `isConnected = [[1,0,0],[0,1,0],[0,0,1]]` | `3` |

### Constraints:

- `1 <= n <= 200`
- `n == isConnected.length`
- `n == isConnected[i].length`
- `isConnected[i][j]` is `1` or `0`.
- `isConnected[i][i] == 1`
- `isConnected[i][j] == isConnected[j][i]`

## <a href='./findCircleNum.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 82 ms | 23.48% |
| Memory | 45.2 MB | 38.26% |

### Time and Space Complexity
 - Time Complexity: `O(n^2)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I: isConnected (number[][])
 - O: number (number of provinces)
 - C: N/A
 - E:
  - no connections should yield the length of the isConnected

### Strategy
- default result is the amount of cities present in the isConnected variable
- decrease the default result based on the number of connections present in a city

- create an array of connection objects to record the connections, default is an empty array
- goal is to determine all the connections associated with a city
  - iterate down the row to access each city
  - start the column at the current row index + 1 (this is to prevent repeitition)

  - if there is a connection at the city junction, then check to see if the connection object contains any of the row/col cities
    - if it is present, then add the new connection to the connection object
    - if neither the row or col is present, then create a new connection object

- return default result - length of the connection object

### Pseudocode
-

## <a href='./findCircleNum.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```