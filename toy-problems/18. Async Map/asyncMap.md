# 18. Async Map

## About the Problem

Implement the function asyncMap:
- asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
- Each of the tasks receives a task-specific callback that must be invoked when the task completes.
- The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
- The order of these results should be the same as the order of the tasks.

It is important to note that this is not the order in which the tasks return, but the order in which they are passed to asyncMap.
Once all the callbacks of the tasks are returned, asyncMap should invoke the callback on the results array.

### Examples

 asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });

## <a href='./asyncMap.js'>About the Solution</a>

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

## <a href='./asyncMap.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```