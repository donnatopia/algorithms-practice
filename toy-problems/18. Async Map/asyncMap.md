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

### Time and Space Complexity
  - Time Complexity: `O(n)`
    - iterating through all the tasks to convert them to promises is linear
    - executing all the promises is linear as well
    - executing the callback on each of the promises is linear
    - overall, congruent functions are linear
  - Space Complexity: `O(n)`
    - taskPromises is the length of tasks, which is linear

### Input, Output, Constraints, Edge (IOCE)

  - I:
    - tasks: a list of asynchronous functions that accepts callback function
    - callback: a final callback function that will be used for each task
  - O:
    - resolve all the tasks in the order that they are given regardless of the timeout
  - C: N/A
  - E: N/A

### Strategy
- Plan A (promises):
  - convert all the tasks to an array of promises
  - return promise all of the task promises
    - for each result in the promise array, invoke the callback to the result
