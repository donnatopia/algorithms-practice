# 21. Function Bind

## About the Problem

function bind():

 example 1:

  var alice = {
    name: 'alice',
    shout: function(){
      alert(this.name);
    }
  }
  var boundShout = bind(alice.shout, alice);
  boundShout(); // alerts 'alice'
  boundShout = bind(alice.shout, {name: 'bob'});
  boundShout(); // alerts 'bob'

 example 2:

  var func = function(a, b){ return a + b };
  var boundFunc = bind(func, null, 'foo');
  var result = boundFunc('bar');
  result === 'foobar'; // true


## <a href='./functionBind.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

### Time and Space Complexity
 - Time Complexity: `O(n + m)`
  - n is the length of args
  - m is the length of additionalArgs
 - Space Complexity: `O(n + m)`
    - n is the length of args
  - m is the length of additionalArgs

### Input, Output, Constraints, Edge (IOCE)

  - I: function, context, ..args
  - O: function bound to a specified context
    - when invoked, can call upon additional arguments
  - C: N/A
  - E: incorrect params given?

### Strategy / Pseudocode
- return the function bound to the specified context using the apply function and calling upon previously defined arguments and input arguments

## <a href='./functionBind.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```