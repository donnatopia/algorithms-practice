# 5. Quick Sort

## About the Problem

Quicksort is a sorting algorithm that uses a divide and conquer strategy;

It:
  - Takes in an array.
  - Picks a value in the array as a pivot.
  - Partitions all the elements of the array into two arrays, based on
    - if they are larger or smaller than the pivot.
  - Recursively sorts the two halves.
  - Combines the two arrays and the pivot into a sorted array.

![Schematic](schematic.png)

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `[10, 80, 30, 40, 50, 70]` | `[10, 30, 40, 50, 70, 80]` |
| 2 | `[9, 6, 3, 7, 2, 12, 5, 1]` | `[1, 2, 3, 5, 6, 7, 9, 12]` |

## <a href='./quickSort.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n log n)`
    - iterating through the length of the array to place the value either greater than or less than/equal to the pivot has a time complexity of O(n)
    - this is repeated for every 1/2 length of the arr, which has a time complexity of O(log n)
    - nested functions multiply time complexity for a time complexity of O(n log n)
  - Space Complexity: `O(n)`
    - we are creating a new iteration of the arr but in a sorted manner, so the space complexity is led by the length of the array, O(n)

### Input, Output, Constraints, Edge (IOCE)

  - I: number[]
  - O: number[] sorted
  - C: N/A (maybe time complexity of n log n)
  - E:
    - empty array will yield empty array
    - array of duplicate values would yield the same array
    - array with one element will yield the same array

### Strategy / Pseudocode
- Plan A:
  - base case
    - if array's length is less than or equal to 1, then return the same array
  - pick the pivot as last element of the array
  - iterate from 0 to the pivot
    - if the value is less than or equal to the pivot
      - then push into a lesser array
    - if the value is greater than the pivot
      - then push into a greater array
  - recursively call the function to the lesser array
  - recursively call the function to the greater array
  - return the sorted lesser array + pivot + sorted greater array

## <a href='./quickSort.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```