# 1318. Minimum Flips to Make a OR b Equal to c

## <a href='https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given 3 positives numbers `a`, `b` and `c`. Return the minimum flips required in some bits of `a` and `b` to make ( `a OR b == c` ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `a = 2, b = 6, c = 5` | `3` |
| 2 | `a = 4, b = 2, c = 7` | `1` |
| 3 | `a = 1, b = 2, c = 3` | `0` |

### Constraints:

- `1 <= a <= 10^9`
- `1 <= b <= 10^9`
- `1 <= c <= 10^9`

## <a href='./minFlips.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 55 ms | 68.75% |
| Memory | 42.4 MB | 10.42% |

### Time and Space Complexity
 - Time Complexity: `O(log a + log b + log c + max(bitA.length, bitB.length, bitC.length))`
  - `log a + log b + log c` because Number.toString method
  - `max(bitA.length, bitB.length, bitC.length)` for the iteration over the length of the longest bitString representation of a, b, c
 - Space Complexity: `O(max(bitA.length, bitB.length, bitC.length))`

### Input, Output, Constraints, Edge (IOCE)

 - I: 3 numbers (a, b, c)
 - O: number
 - C: N/A
 - E: N/A

### Strategy
- determine the bitwise number for c and all the bitwise positions that requires a 1
- determine the bitwise number for a and b
  - compare these positions to c
  - iterate through c and compare each bitwise position
    - if it is a 1 => then check to see if a or b have a 1
      - yes -> move onto next iteration
      - no -> then increment the count and move onto the next position
    - if it is a 0 => then check to see if a or b have a 1
      - yes -> increment counter twice if both a and b have 1 and once if only a or b have 1
      - no -> move onto next iteration

### Pseudocode
- convert a, b, c into bitwise number arrays
- pad each number based on the largest length

- create a counter
- iterate through c
  - if the value is 1 AND a at i and b at i are both 0
    - increment counter
  - if the value is 0
    - if a at i is 1
      - increment counter
    - if b at i is 1
      - increment counter
- return counter

### Notes
- <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR'>Bitwise OR (|) operator</a> returns a combination of two operands such there is a 1 in each bit position for which the corresponding bits of either or both operands are 1.

## <a href='./minFlips.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```