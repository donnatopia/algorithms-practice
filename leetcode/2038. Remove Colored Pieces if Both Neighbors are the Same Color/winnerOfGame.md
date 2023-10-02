# 2038. Remove Colored Pieces if Both Neighbors are the Same Color

## <a href='https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/?envType=daily-question&envId=2023-10-02'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There are `n` pieces arranged in a line, and each piece is colored either by `'A'` or by `'B'`. You are given a string `colors` of length `n` where `colors[i]` is the color of the `ith` piece.

Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.

- Alice is only allowed to remove a piece colored `'A'` if both its neighbors are also colored `'A'`. She is not allowed to remove pieces that are colored `'B'`.
- Bob is only allowed to remove a piece colored `'B'` if both its neighbors are also colored `'B'`. He is not allowed to remove pieces that are colored `'A'`.
- Alice and Bob cannot remove pieces from the edge of the line.
- If a player cannot make a move on their turn, that player loses and the other player wins.

Assuming Alice and Bob play optimally, return `true` if Alice wins, or return `false` if Bob wins.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `colors = "AAABABB"` | `true` |
| 2 | `colors = "AA"` | `false` |
| 3 | `colors = "ABBBBBBBAAA"` | `false` |

### Constraints:

- `1 <= colors.length <= 10^5`
- `colors` consists of only the letters `'A'` and `'B'`

## <a href='./winnerOfGame.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime |  |  |
| Memory |  |  |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
  - Time Complexity: `O(n)`
  - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

  - I:
  - O:
  - C:
  - E:

### Strategy
-

### Pseudocode
-

## <a href='./winnerOfGame.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```