# 1615. Maximal Network Rank

## <a href='https://leetcode.com/problems/maximal-network-rank/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

There is an infrastructure of `n` cities with some number of `roads` connecting these cities. Each `roads[i] = [ai, bi]` indicates that there is a bidirectional road between cities `ai` and `bi`.

The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.

The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.

Given the integer `n` and the array `roads`, return the maximal network rank of the entire infrastructure.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]` | `4` |
| 2 | `n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]` | `5` |
| 3 | `n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]` | `5` |

### Constraints:

- `2 <= n <= 100`
- `0 <= roads.length <= n * (n - 1) / 2`
- `roads[i].length == 2`
- `0 <= ai, bi <= n-1`
- `ai != bi`
- Each pair of cities has at most one road connecting them.

## <a href='./maximalNetworkRank.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime | 110 ms | 21.30% |
| Memory | 49.73 MB | 53.68% |

### Time and Space Complexity
  - Time Complexity: `O(n^2 + m * n)`
    - iterating through the length of roads is O(m), where m is length of roads
      - using a set is dependent on the degree of each city, which is at most connecting to every single city, which is O(n), where n is the number of nodes
      - combination would result in O(m * n)
    - iterating through the cities is at most the number of nodes present, which is O(n)
      - within each iteration is another iteration of all the nodes, which is O(n)
      - searching for the set is constant time
      - combination would result in O(n^2)
    - total time complexity is additive for sequential functions, so it is O(n^2 + m * n);
  - Space Complexity: `O(n^2)`
    - the node data structure can have the size of n - 1 at most
      - the links subset is dependent on the number of connections which is at most O(n)
    - combination, the space complexity is O(n^2);

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - n (number): number of city nodes (0-indexed)
    - roads (number[][]): array of network connections between different cities
  - O:
    - number: indicates the maximal network rank between two cities
  - C:
    - each pair of cities has AT MOST one road connecting them
  - E:
    - two nodes present but no connection between them would result in 0 (n = 2, roads = [])

### Strategy
- Plan A (brute force)
  - iterate through roads
  - keep track of the frequence of each node in roads
  - find the two nodes with the highest frequency
    - check to see if there is a connection between the two nodes => if there is, then subtract 1
    - compare with the node with the next highest sum
    - return the sum of the two nodes

### Pseudocode
- Plan A (brute force):
  - create a node structure
    - frequency is 1
    - link is empty array or whatever is defined

  - create an empty object called cities
  - iterate through roads
    - define the current node as the first in the tuple
    - check to see if the cities object has the current node
      - increment the value for freq
      - push second tuple value in links
    - else
      - create a new node instance for the current node
      - push the second tuple value in links
      - add new node instance into cities

    - check to see if cities object has the second tuple value
      - increment the value for freq
    - else
      - create a new node instance for second tuple value
      - add new node instance into cities

  - create an array that orders the nodes in order of highest frequency to lowest
  - get the two highest nodes and their sum
  - iterate through each two nodes links to see if the other is present
    - if it is present
      - then subtract 1 from the total
      - break from the loop
  - get the highest node and the next distict highest node and their sum
    - if the sum is equal to current sum
      - then iterate through each two nodes link to see fi the other is present
        - return the sum subtract 1
    - return the sum


## <a href='./maximalNetworkRank.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```