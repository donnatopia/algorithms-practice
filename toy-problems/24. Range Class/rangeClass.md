# 24. Range Class

## About the Problem

Build a class to represent a range of numbers that takes:
  - a beginning index,
  - an end index (optional)
    If there is no end index, the range should include only the passed-in start value.
  - a 'step' (optional)
    The step is the interval at which elements are included.
    For instance, a step of 1 includes every element in the range,
    while a step of 2 includes every other element.

The range should have a constructor that accepts these arguments in that order.

It should also support the following utility functions:
  - size(): return the number of items represented by the range
  - each(callback(index)): iterate over the range, passing each value to a callback function
  - includes(index): return whether or not the range includes the passed value

You should also be aware of the following caveats:
  - You should allow a negative value for 'step' to count backwards.
  - If no step is provided, it should default to 1.
  - If the start value is greater than the end value, assume we're counting backwards.
  - Should return null if we are given no 'start' value.

Range should use constant space, even during the `each` method. i.e. you should *not*
use an Array as backing storage. Any given range could potentially be thousands of numbers long,
so find a way to represent the range without actually storing each element.

### Examples

var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)

var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.

evenNumbers.each(function(val){
  console.log(val+"!"); // prints out "2!4!6!8!"
});

evenNumbers.size() should be 4

evenNumbers.includes(2) should be true
evenNumbers.includes(3) should be false

## <a href='./rangeClass.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity:
    - size is constant `O(1)`
    - each is based on the size of the range `O(n)`
    - includes is constant `O(1)`
  - Space Complexity: `O(1)`

### Input, Output, Constraints, Edge (IOCE)

- Range constructor
  - I:
    - start (number)
    - end (number)
    - step (number)
  - O:
    - constructor
  - C:
    - use constant space
  - E:
    - no start, return null
    - if no step provided, assume 1
    - if start > end, decrement step
    - negative step
    - only start provided

- size
  - I: N/A
  - O: number
  - C: constant space
  - E:
    - return null if no start

- each
  - I: cb (function)
  - O: N/A
  - C: constant space
  - E: no start

- includes
  - I: val (number)
  - O: boolean if val is in range
  - C: constant space
  - E: no start

### Strategy / Pseudocode
- constructor
  - set start to start
  - set end to either end or start
  - set step to step or 1

- size
  - get the absolute difference between the start and end
  - divide the absolute difference by the step
  - the valid elements between start and end is the floor value of the quotient

- each
  - determine if we are decrementing or incrementing
    - decrementing
      - start > end OR step is negative
    - else incrementing
  - for decrementing
    - create a for loop starting at the starting value until the end value (inclusive), decrementing
      - invoke the cb function on the iteration value
  - for incrementing
    - create a for loop starting the starting value until the end (inclusive), incrementing
      - invoke the cb function on iteration value

- includes
  - check to see if the value lies between start and end
    - return whether the modulo value of the start and step AND teh modulo value of the val and step are equal

### Notes
  - There is a diffrence between functional expression and arrow expression
    - function(){} establishes its own this value and has an arguments function
    - () => {} do not have their own this value, instead they inherit the 'this' value from their containing lexical context
      - no arguments object

  - Use function() {} when you need access to the this value that varies dynamically, or when you need the arguments object.

  - Use () => {} when you want to preserve the this context from the surrounding code, such as when working with callbacks inside classes or objects.

## <a href='./rangeClass.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```