# 139. Word Break

## <a href='https://leetcode.com/problems/word-break/'>About the Problem</a>

<img src='https://img.shields.io/badge/LeetCode-FFA116.svg?style=for-the-badge&logo=LeetCode&logoColor=white' />

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

### Examples

| Example| Input | Output |
| --- | --- | --- |
| 1 | `s = "leetcode", wordDict = ["leet","code"]` | `true` |
| 2 | `s = "applepenapple", wordDict = ["apple","pen"]` | `true` |
| 3 | `s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]` | `false` |

### Constraints:

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are unique.

## <a href='./wordBreak.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Metrics from LeetCode -->
### Stats
| Type | Metric | Percentile |
| --- | --- | --- |
| Runtime |  |  |
| Memory |  |  |

<!-- Change Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

 - I:
  - string
  - string[] containing words that may be present in the original string
 - O: boolean if the word dictionary contain all the words present in the string if separated in singular spaces
 - C:
  - there will be at least 1 character in s
  - words can be repeated in the string from the word dictionary
  - every word in the word dictionary is unique
  - letters are all lowercase English letters
 - E:
  - repeated words from the word dictionary is still vallid

### Strategy
- Plan A:
  - iterate through all the words in wordDict
    - remove the section of the string that contains the current word and place it in an array that will act as the running dictionary
    - if the section of the string does not exist AND the word is not located in the running dictionary
      - return false
  - after all the iteration and the string still have wordds
    - return false
  - else
    - return true

### Pseudocode
- Plan A:
  - create a running dictionary variable and set to an empty set
  - iterate through wordDict
    - define the currentWord as the value at the current index of wordDict
    - define a pointer for iterating through the currentWord and set to 0
    - define wordFound as a boolean and set to false
    - iterate through s
      - if the current letter matches the value at the currentWord at the pointer index
        - increment pointer
        - if the pointer matches the length of the currentWord - 1
          - set wordFound to true
          - add the currentWord to the runningDictionary
          - set the s to substring from 0 to length of the currentWord - the pointer index and the substring from pointer + 1 to the end of the word
          - break from the for loop
      - else
        - reset the pointer to 0
    - if wordFound is false && currentWord is not in runningDictionary
      - return false
  - return whether or not s is an empty string

## <a href='./wordBreak.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```