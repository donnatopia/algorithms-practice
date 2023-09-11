# 1. Rock Paper Scissors

## About the Problem

Write a function that generates every sequence of throws a single
player could throw over a n-round game of rock-paper-scissors.
*
Your output should look something like:
  ["RRR",
   "RRP",
   "RRS",
   "RPR",
   ...etc...
  ]

### Extra Credit:

Make your function return answers for any number of rounds.
`rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]`

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 3` | `["RRR", "RRP", "RRS", "RPR", ...etc]` |
| 2 | `n = 5` | `['RRRRR', 'RRRRP', 'RRRRS', etc...]` |

## <a href='./rockPaperScissors.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(3^n)`
    - the recursion stack is dependent on the length of n
    - since there are three options [RPS], the time complexity is O(3^n)
  - Space Complexity: `O(3^n)`
    - combos is the leading data structure, whose size is based on the number of permutations of [RPS] of n length

### Input, Output, Constraints, Edge (IOCE)

  - I: n (number of rounds)
  - O: string[] consisting of different permutations of 'RPS' of length n
  - C: N/A
  - E:
    - negative and zero rounds will yield empty array

### Strategy / Pseudocode
- Plan A (recursion):
  - if rounds is 0 or less, then return empty array
  - create an empty array to return
  - create an array of R, P, S options
  - iterate through all the options of RPS
    - for each option
      - add the current letter to permutations of the function run again with n - 1
      - push the result to empty array
  - return array

## <a href='./rockPaperScissors.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```