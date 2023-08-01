# 2141. Maximum Running Time of N Computers

## <a href='https://leetcode.com/problems/maximum-running-time-of-n-computers/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You have `n` computers. You are given the integer `n` and a 0-indexed integer array `batteries` where the `ith` battery can run a computer for `batteries[i]` minutes. You are interested in running all `n` computers simultaneously using the given batteries.

Initially, you can insert at most one battery into each computer. After that and at any integer time moment, you can remove a battery from a computer and insert another battery any number of times. The inserted battery can be a totally new battery or a battery from another computer. You may assume that the removing and inserting processes take no time.

Note that the batteries cannot be recharged.

Return the maximum number of minutes you can run all the `n` computers simultaneously.


### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 2, batteries = [3,3,3]` | `4` |
| 2 | `n = 2, batteries = [1,1,1,1]` | `2` |

### Constraints:

- `1 <= n <= batteries.length <= 10^5`
- `1 <= batteries[i] <= 10^9`

## <a href='./maxRunTime.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 166 ms | 59.26% |
| Memory | 59.32 mb | 27.12% |

### Time and Space Complexity
 - Time Complexity: `O(n * log n)`
  - sorting the array has a time complexity of O(n * log n)
  - reducing the array has a time compleixty of O(n)
    - this iterates through all the variables in the batteries array
  - the while loop will at most run O(n) if it iterates through all the elements in the batteries array
  - since sorting the array takes the longest time, the time complexity of this function is O(n * log n)
 - Space Complexity: `O(1)`
  - sorting and reducing the array and running the while loop happens in place and requires no additional data structures, so the space complexity is constant.

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - n (number of computers)
  - Number[] (each element is a battery and the value is the number of minutes the battery can run)
 - O:
  - num (maximum minutes all computers can run simultaneously)
 - C:
  - number of computers will always be less than or equal to the number of batteries
  - each battery can run for at least 1 minute
 - E:
  - 1 computer will run for as long as the singular battery can hold

### Strategy
- Plan A:
  - sort batteries in order
  - keep a variable for time elapse
  - while there are at least n batteries avaliable
    - decrement the battery life of the highest n batteries
    - increment time elapsed
  - return time elapsed

- Plan B:
  - determine all avaliable charge time (i.e. sum of all the battery charge time) because this is the maximum time to charge one computer
  - since the number of computers (n) can be greater than or equal to 1, the time that all computers can be charged is average battery charge, or total battery charge divided by the number of computers
    - however, since the distribution of battery charge is not all equal (i.e. not all numbers in the battery array necessarily have to be equal), this means that the average battery charge is the maximum time all computers can be charged simultaneously.

  - in order to consider the unequal distribution, we need to sort the batteries
  - Sorting the batteries will allow us to pinpoint which battery is the highest
    - if the highest battery is greater than the average battery charge, then the highest battery should be able to support one computer for the totality of the projected runtime
      - we can represent this assumption by removing one computer and the highest battery from the list of batteries
      - now we will have a subproblem with a decremented n number of computers and a new total of battery charge
      - run this same simulation in a loop until the highest battery is no longer greater than the average battery charge
    - if the highest battery is no longer greater than the average battery charge, then this means that the batteries array is equal in distribution
  - with an equal distribution of batteries array, then we can now return the former assumption that simultatenous charging of the batteries is equal to the sum of all the battery charging times divided by the number of computers
    - since this number may not be an integer, we should return the floor value (because we are looking for the maximum simultaneous runtime)


### Pseudocode
- Plan A (failed):
  - define time as 0
  - create a copy of batteries and call it valid_batteries
  - while valid_batteries length is greater than or equal to n
    - if length of valid_batteries is greater than n
      - sort valid_batteries in descending order
      - reduce the first n batteries by the last index of valid_batteries
      - increment time by the value at the last index of valid_batteries
      - delete any batteries in valid_batteries that are zero
    - if length of valid_batteries is equal to n
      - increment time by the value at the last index of valid_batteries
      - return time
  - return time

- Plan B (successful):
  - sort the batteries in ascending order
  - define the total battery charge using the reduce function
  - while the largest battery (last value in the sorted batteries array) is greater than the average battery charge, which is the total battery charge divided by n
    - decrement the number of computers (n)
    - decrement the total by removing the largest battery from the batteries array
  - return the floor value of the total battery charge divided by n (average battery charge with equal distribution)

## <a href='./maxRunTime.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```