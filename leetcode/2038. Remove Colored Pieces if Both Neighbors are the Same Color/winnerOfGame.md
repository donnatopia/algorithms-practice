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

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 94 ms | 10.61% |
| Memory | 47.74 MB | 25.76% |

### Time and Space Complexity
  - Time Complexity: `O(n^2)`
    - we iterate through the length of colors using two pointers which can visit each letter twice at most
    - thus, the time complexity is quadratic
  - Space Complexity: `O(1)`
    - there is no additional data structures that is dependent on the size of colors

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

  - I: string of colors consisting of A and B
  - O: return true if Alice wins and false if Bob wins
  - C: N/A
  - E: N/A

### Strategy
- Plan A (two pointers):
  - one pointer iterates until the next avaliable piece to remove
    - avaliable piece means that the left and right are flanked by the current letter

### Pseudocode
- Plan A (two pointers):
  - intialize pointer a as 0
  - initialize pointer b as 0
  - set current player as "A"
  - create a function to determine if the current player wins the round that accepts the current player
    - determine the pointer associated with the player
    - iterater from the pointer to the end of the string
      - if the letter at the current index matches the letter and the left and right elements are also the current letter
        - increment the pointer
        - return true
      - increment the pointer
    - return false
  - while pointer a and pointer b is less than string's length
    - if the current player is "A" and player wins OR current player is "B" and player loses => return true
    - if the current player is "B" and player wins OR current player is "A" and player loses => return false
    - if the current player is "A" => switch to "B"
    - if the current player is "B" => swithc to "A"

## <a href='./winnerOfGame.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```