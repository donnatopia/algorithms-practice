# 8. Shuffle Deck

## About the Problem

Given an array containing a deck of cards, implement a function that shuffles the deck.

A shuffled deck should be completely random.
  - That means that a given card should be as likely as any other to appear in a given deck index, completely independent of the order of the input deck.
  - Think carefully about how to be sure your algorithm generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.

 A further note on randomness:
  - Technically, a computer-shuffled deck will usually be "pseudorandom", not "truly" random.
  - However, the difference between the two is too small to be detectable by any known test.
    - See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
  - A human shuffler is much more biased; it takes around seven normal "riffle" shuffles before a real deck is actually randomized.
    - See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .

### Extra Credit
  - Even a naive algorithm can easily run in linear time. However, does your algorithm remain unbiased as N (the deck size) increases? How do you know?
  - Once you have created a properly random, linear algorithm, what is its space complexity?
  - There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).

### Examples

var deck = orderedDeck();
// ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
shuffleDeck(deck);
// ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]

## <a href='./shuffleDeck.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
  - Time Complexity: `O(n)`
  - Space Complexity: `O(n)`

### Input, Output, Constraints, Edge (IOCE)

  - I: string[] of length 52
  - O: string[] of length 52 with elements shuffled
  - C: N/A
  - E: N/A

### Strategy
- Plan A (iterative):
  - create an object with 52 keys
  - iterate through the length of the deck
    - generate a random index between 0 and 52
    - if there is no card assigned at the random index
      - then place the card at the random index
    - else
      - repeat the process
  - return the values of the object

### Pseudocode
- Plan A (iterative):
  - create an empty obj
  - iterate through the length of the deck
    - set isPlaced as false
    - while isPlaced is false
      - generate a random index between 0 and 52 inclusively
      - if there is no card assigned at the random index of the obj
        - place the card at the obj at the random index
        - set isPlaced to true
  - return the values of the object

## <a href='./shuffleDeck.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```