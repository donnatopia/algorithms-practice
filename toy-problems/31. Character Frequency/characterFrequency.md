# 31. Character Frequency

## About the Problem

Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

### Examples

```
characterFrequency('mississippi') ===
[
  ['i', 4],
  ['s', 4],
  ['p', 2],
  ['m', 1]
]
```

```
characterFrequency('miaaiaaippi') ===
[
  ['a', 4],
  ['i', 4],
  ['p', 2],
  ['m', 1]
]
```

```
characterFrequency('mmmaaaiiibbb') ===
[
  ['a', 3],
  ['b', 3],
  ['i', 3],
  ['m', 3]
]
```

## <a href='characterFrequency.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n log n)`
    - Frequency Counting is linear
    - Converting from Object to Array Tuples is linear based on the number of unique characters
    - sorting the array in descending frequency has n log n time complexity
    - sorting the array in ascending character for same frequency has linear time comoplexity
    - leading time complexity is the sorting function, which is n log n time complexity
  - Space Complexity: `O(n)`
    - the sortedFreq array and freq object are size dependent on the number of unique characters in word
    - thus, the space complexity is linear

### Input, Output, Constraints, Edge (IOCE)

  - I: word
  - O: array of arrays, where each tuple represents the character and its frequency
    - must be organized by descending frequency
    - then organized by ascending character for values with the same frequency
  - C: N/A
  - E: empty string returns empty array

### Strategy / Pseudocode
- Plan A (brute force):
  - iterate through the length of the string and store the letter and its frequency in an object
  - convert the object to an array of arrays
  - sort the array in descending character frequency
  - iterate through the list of frequencies
    - while the frequency of the current character matches the frequency fo the previous character AND the current character is less than previous character
      - switch the values at the two positions
      - decrement the current position
  - return the array of arrays

## <a href='./characterFrequency.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```