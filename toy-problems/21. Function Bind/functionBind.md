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


Function.prototype.bind:

 example 1:

  var alice = {
    name: 'alice',
    shout: function(){
      alert(this.name);
    }
  }
  var boundShout = alice.shout.bind(alice);
  boundShout(); // alerts 'alice'
  boundShout = alice.shout.bind({name: 'bob'});
  boundShout(); // alerts 'bob'

 example 2:

  var func = function(a, b){ return a + b };
  var boundFunc = func.bind(null, 'foo');
  var result = boundFunc('bar');
  result === 'foobar'; // true

## <a href='./functionBind.js'>About the Solution</a>

<img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' />

<!-- Add Time and Space Complexity -->
### Time and Space Complexity
 - Time Complexity: `O(n)`
 - Space Complexity: `O(n)`

<!-- Planning -->
### Input, Output, Constraints, Edge (IOCE)

 - I:
 - O:
 - C:
 - E:

### Strategy
-

### Pseudocode
-

## <a href='./functionBind.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```