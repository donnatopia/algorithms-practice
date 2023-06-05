# 1232. Check If It is a Straight Line

## <a href='https://leetcode.com/problems/check-if-it-is-a-straight-line/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given an array `coordinates`, `coordinates[i] = [x, y]`, where `[x, y]` represents the coordinate of a point. Check if these points make a straight line in the XY plane.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]` | `true` |
| 2 | `coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]` | `false` |

### Constraints:

- `2 <= coordinates.length <= 1000`
- `coordinates[i].length == 2`
- `-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4`
- `coordinates` contains no duplicate point.

## <a href='./checkStraightLine.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 50 ms | 97.10% |
| Memory | 43.6 MB | 92.75% |

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(1)`

### Input, Output, Constraints, Edge (IOCE)
 - I: coordinates (number[][]);
  - each coordinate consists of [x, y]
 - O: boolean of whether coordinates compose a straight line
 - C: N/A
 - E: horizontal slope

### Strategy
- use the first coordinate as the main point
- calculate the slope between the rest of the coordinates and the first coordinate
- if all the slopes match, then return true
- else return false

### Pseudocode
- define the slope variable
- iterate through the coordinates starting with the second coordinate
  - calculate the current slope from the first coordinate to the current coordinate
    - slope is (y2- y1)/(x2-x1)
  - if the slope is undefined, define the slope as the current slope
  - else if the current slope does not match the slope, return false
- return true

## <a href='./checkStraightLine.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```