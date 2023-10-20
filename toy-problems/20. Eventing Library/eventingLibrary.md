# 20. Eventing Library

## About the Problem

 Make an eventing system mix-in that adds `.trigger()` and `.on()` to any input
 object.

 Caveats:
 - `mixEvents` should return the original object it was passed after extending it.
 - If we repeatedly call `.on` with the same event name, it should
   continue to call the old function as well. That is to say, we can have multiple
   listeners for an event.
 - If `obj.trigger` is called with additional arguments, pass those to the
   listeners.
 - It is not necessary to write a way to remove listeners.

### Examples
```
var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){ // On takes an event name and a callback function
   console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
```

## <a href='./eventingLibrary.js'>About the Solution</a>

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

## <a href='./eventingLibrary.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```