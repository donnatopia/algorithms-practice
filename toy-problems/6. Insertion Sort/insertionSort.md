# 6. Insertion Sort

## About the Problem

Insertion sort is a basic sorting algorithm.

- Insertion sort iterates over an array, growing a sorted array behind the current location.
- It takes each element from the input and finds the spot, up to the current point, where that element belongs. It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. This means that equal elements should retain their relative order. Numbers, as primitives, give us no way to check this, so we'll be sorting objects with a value field, on which they will be sorted, like so:

`[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`

A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.

### Extra Credit

 Refactor your sort to (optionally) take an explicit comparator function
 as its second argument, so that callers can define arbitrary ways to sort elements.
 See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 for an example of how this works (excerpt below):

 - If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 - If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 - If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.

 If no comparator is given, just sort the elements using `<` or `>`.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `insertionSort([{value: 2}, {value: 1}, {value: 3}])` | `[{value: 1}, {value: 2}, {value: 3}]` |

## <a href='./insertionSort.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I:
 - O:
 - C:
 - E:

### Strategy
-

### Pseudocode
-

## <a href='./insertionSort.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```