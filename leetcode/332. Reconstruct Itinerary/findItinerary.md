# 332. Reconstruct Itinerary

## <a href='https://leetcode.com/problems/reconstruct-itinerary/?envType=daily-question&envId=2023-09-14'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

You are given a list of airline `tickets` where `tickets[i] = [fromi, toi]` represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from `"JFK"`, thus, the itinerary must begin with `"JFK"`. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

- For example, the itinerary `["JFK", "LGA"]` has a smaller lexical order than `["JFK", "LGB"]`.

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]` | `["JFK","MUC","LHR","SFO","SJC"]` |
| 2 | `tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]`| `["JFK","ATL","JFK","SFO","ATL","SFO"]` |

### Constraints:

- `1 <= tickets.length <= 300`
- `tickets[i].length == 2`
- `fromi.length == 3`
- `toi.length == 3`
- `fromi` and `toi` consist of uppercase English letters.
- `fromi != toi`

## <a href='./findItinerary.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 61 ms | 94.55% |
| Memory | 47.53 MB | 54.90% |

### Time and Space Complexity
  - Time Complexity: `O(n log n)`
    - the first for loop to create the airport and their respective destinations has a linear time complexity, relative to the length of tickets
    - the second for loop iterates through each distict departure destination which is less than or equal to the length of tickets, so this also has linear time complexity
      - however, we sort each selction, so the time complexity here is n log n
    - dfs funs through every single possible airport, which is dependent on the length of tickets as well
  - Space Complexity: `O(n)`
    - the leading structures are tracker and itinerary, which contain the number of destinations listed on tickets
    - the recursive track also visits each destination node exactly once, so the space complexity is linear
    - as a result, the space complexity is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: string[][]
    - each string[] represents [from, to] airport ticket
    - overall array is all the tickets
  - O:
    - string[] of itinerary using every ticket
  - C:
    - every ticket must be used once
  - E:
    - multiple itineries => smallest lexical order

### Strategy
- Plan A:
  - create an object keeping track of tickets
    - key is the departure
    - value is an array of arrival possiblities
  - iterate through tickets and populate the ticketTracker
  - create an array for the itinerary
  - set departure as "JFK"
  - while the obj still has items => construct the itinerary
  - return the itinerary

- Plan B (DFS):
  - create an object, where the key is the airport and the value is an array of airports that can stem from the key airport
  - sort each array in the tracker object
  - build the itinerary using dfs

### Pseudocode
- Plan A:
  - define ticketTracker as an empty object
  - iterate through the length of tickets
    - define ticket as the current iteration of tickets
    - if ticket[0] exists in the ticket tracker
      - then push ticket[1] into the array at ticket[0]
      - sort the array at the ticketTracker[departure]
    - else
      - define ticket[0] as an array containing ticket[1]
  - define itinerary as an empty array
  - define departure as "JFK"
  - while the ticketTracker has the departure as a key
    - push the departure into the itinerary
    - set depart as the first time in the array
    - remove the first item of the array
    - if the array is empty => delete the departure key
  - return the itinerary

- Plan B (dfs):
  - create an empty object called tracker
  - iterate through the tickets, deconstruct the departure and arrival
    - if tracker[departure] exists
      - then push the arrival into the array
    - else
      - set tracker[departure] to an arry containing arrival
  - iterate through all the keys in tracker
    - sort the tracker[key] value
  - set itinerary to an empty array
  - create a dfs function that accepts an airport
    - while tracker[airport] exists and the tracker[airport] array is greater than 0
      - perform the dfs on the first value of the tracker[airport] array
    - push the airport into the itinerary
  - call the dfs function on "JFK"
  - return the itinerary

## <a href='./findItinerary.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```