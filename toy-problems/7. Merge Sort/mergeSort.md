# 7. Merge Sort

## About the Problem

Implement a function that sorts an array of numbers using the "mergesort" algorithm.

Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
methods in standard libraries as an alternative to quicksort or heapsort. (For example,
Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
"merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.

Illustration of an iterative approach:

  Initial step: Input array is split into "sorted" sublists
  `[4,7,4,3,9,1,2]` -> `[[4],[7],[4],[3],[9],[1],[2]]`

  Merge step: Adjacent sublists are merged into sorted sublists
  `[[4],[7],[4],[3],[9],[1],[2]]` -> `[[4,7],[3,4],[1,9],[2]]`

  Repeat merge step:
  `[[4,7],[3,4],[1,9],[2]]` -> `[[3,4,4,7], [1,2,9]]`

  Repeat merge step:
  `[[3,4,4,7], [1,2,9]]` -> `[[1,2,3,4,4,7,9]]`

  Done! Return the sorted array:
  `[1,2,3,4,4,7,9]`
Illustration of a recursive approach:

  1. Split the input array in half
  `[4, 7, 4, 3, 9, 1, 2]` -> `[4, 7, 4], [3, 9, 1, 2]`

  2. Both sides are sorted recursively:
  `[4, 7, 4]` -> `[4, 4, 7]`
  `[3, 9, 1, 2]` -> `[1, 2, 3, 9]`

  3. Both halves are merged:
  `[4, 7, 4], [3, 9, 1, 2]` -> `[1, 2, 3, 4, 4, 7, 9]`

  Step 2 might seem a bit mystical - how do we sort both sides? The
  simple answer is that we use mergesort! After all, mergesort sorts
  arrays, right? We can test this on [4, 7, 4] by just following the
  steps above but imagining that [4, 7, 4] is the whole array, which
  is what happens when you call mergesort on it.

  1. Split the input array in half
  `[4, 7, 4]` -> `[4], [7, 4]`

  2. Both sides are sorted recursively:
  `[4]` -> `[4]`
  `[7, 4]` -> `[4, 7]`

  3. Both halves are merged:
  `[4], [4, 7]` -> `[4, 4, 7]`

  I cheated again by going directly from [7, 4] to [4, 7], but that's
  really just:

  1. Split the input array in half
  `[7, 4]` -> `[7], [4]`

  2. Both sides are sorted recursively:
  `[7]` -> `[7]`
  `[4]` -> `[4]`

  3. Both halves are merged:
  `[7], [4]` -> `[4, 7]`

  As you can see, all the work actually gets done in step 3, the merge
  step. Everything else is just splitting and recursing.


### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `[4,7,4,3,9,1,2]` | `[1, 2, 3, 4, 4, 7, 9]` |

### Constraints:

- Must utilize the merge sort algorithm, which is in-place

## <a href='./mergeSort.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n*log(n))`
  - O(n) comes from the while loop which iterates through all the numbers in num
  - O(log(n)) comes from the divide and conquer method, which reduces the size of subarrays by half each time
 - Space Complexity: `O(n)`
  - the sorted array size is dependent on the size of nums

### Input, Output, Constraints, Edge (IOCE)

 - I: unsorted array
 - O: sorted array
 - C:
  - must utilize the mergesort algorithm
 - E:
  - an array of duplicates would return the same array
  - an array of one element would return the same array

### Strategy / Pseudocode
- Plan A (recursive, top-down):
  - create a base case -> if length 1
    - return the same array
  - create a base case -> if length 2
    - if the first element is greater than or equal the second element
      - return array where second element is first, then first element
    - else
      - return array where first element is first, then second element
  - split the array in half
    - if odd length, then allocate the extra element to the second half
    - call the function on both halves
  - combine the two halves
    - create an empty array called sorted
    - create a left pointer that follows the left array
    - create a right pointer that follows the right array
    - while the empty array length does not equal the length of the original array
      - compare the value at the left array at the left pointer and the value at the right array at the right pointer
      - if the left value is less than right value
        - then add the left value to the sorted array
        - increment the left pointer
      - if the right value is less than left value
        - then add the right value to the sorted array
        - increment the right pointer
    - return the sorted array

## <a href='./mergeSort.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```