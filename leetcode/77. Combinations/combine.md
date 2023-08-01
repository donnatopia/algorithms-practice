# 77. Combinations

## <a href='leetcode.com/problems/combinations'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.

You may return the answer in any order.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 4, k = 2` | `[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]` |
| 2 | `n = 1, k = 1` | `[[1]]` |

### Constraints:

- `1 <= n <= 20`
- `1 <= k <= n`

## <a href='./combine.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 86 ms | 96.92% |
| Memory | 48.19 mb | 67.80% |

### Time and Space Complexity
 - Time Complexity: `O(C(n, k) * k)`
  - C(n, k) represents the number of combinations of n items taken k at a time
  - for each combination, we copy the current combination to the result array, which is O(k)
 - Space Complexity: `O(C(n, k))`
  - C(n, k) respresents the number of combinations of n items taken k at ta time

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - n (number): used to determine the range of possible numbers
  - k (number): used to determine the number of intergers per subarray
 - O:
  - number[][]
    - subarray length is determined by k
    - subarray values can range from [1, n]
    - order does not matter
 - C:
  - 1 <= n <= 20
  - 1 <= k <= n
 - E:
  - combine(1, 1) can only yield `[[1]]`

### Strategy
- Plan A:
  - need to create a variable called result that is an array to be later returned
  - looking for permutations
  - probably would need 2 pointers
    - one pointer would keep track of the current number to be included in the combination
     - the loop for the first pointer would be from [1, n - k]
    - second pointer would keep track of subsequent numbers to add to combination that already includes the current number
      - the loop from the second pointer would be from [first pointer + 1, k]
  - actually maybe i should do recursion inside the function
    - combination includes the current number and permutations of subsequent numbers of length - 1

- Plan B:
  - keep an array called result that will be returned at the end of the loop
  - the goal is to generate the current combo from the starting point, which is 1, until the n
    - each of the current combos should be added to the results array once the length of the current combo is equal to the length of k
    - there would be an interior recursion call to generate subsequent combos

### Pseudocode
- Plan A:
  - define a variable called combos and set to an empty array
  - define a function that returns permutations, which accepts the length of permutation and start integer
    - if the length is 2,
      - return subarray that includes the start integer and n
    - else
      - define result array
      - define a subarray with the start integer as its only element
      - call the permutation function with the current number + 1 as the start integer and length of the permutation as length - 1
      - for each of the results from the permutation function
        - unshift the current number into one of the subarrays
        - push the subarray into result array
      - return result array
  - create a for loop that starts from 1 to n - k, inclusive
    - call the permutation function with the current number + 1 as the start integer and length of the permutation as n - 1
    - add the results to the combos array
  - return combos

- Plan B:
  - define result as an empty array
  - define the current combo as an empty array
  - define a function that generates a combo given a start integer
    - if the length of the current combo is equal to k
      - push a copy of the array into result
      - return the function
    - create a for loop starting at start integer and ends at n, inclusive
      - push the current index value to the current combo
      - generate the rest of the combo by calling the function generateCombos on the next index
      - restart the current combo
  - call the generateCombos function with 1 as the start integer
  - return the result array




## <a href='./combine.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```