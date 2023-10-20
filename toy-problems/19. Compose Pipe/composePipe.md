# 19. Compose Pipe

## About the Problem

Write Compose and Pipe functions.

Step 1: Implement the function Compose:

 - Compose should return a function that is the composition of a list of functions of arbitrary length.
 - Each function is called on the return value of the function that follows.
 - You can view compose as moving right to left through its arguments.

Step 2: Implement the function Pipe:

 - Pipe composes a series of functions and returns the resulting function.
 - Each function is called on the return value of the preceding function.
 - You can view pipe as moving left to right through its arguments.


### Examples

Compose Example:
```
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(greet, exclaim);
welcome('phillip'); // 'hi: PHILLIP!'
```

Pipe Example:
```
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
pipe(add2, multiplyBy3)(5) // 21
pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
```

## <a href='./composePipe.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - we iterate through all the fns, so linear time
  - Space Complexity: `O(1)`
    - result is rewritten with each new function, so it is constant

### Input, Output, Constraints, Edge (IOCE)

- compose
  - I: unknown arguments of functions
  - O: execution of the functions from right to left
  - C: N/A
  - E: N/A

- pipe
  - I: unknown arguments of functions
  - O: executation of the functino from left to right
  - C: N/A
  - E: N/A

### Strategy / Pseudocode
- Strategy:
  - return a function that accepts a parameter (higher-order function)
    - define the result
    - iterate through all the functions from (pipe: L => R) (compose: R => L)
      - set the result to equal the running the value through the function
    - return the final result

- use reduce and reduceRight function

## <a href='./composePipe.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```