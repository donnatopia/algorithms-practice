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

### Time and Space Complexity
  - Time Complexity:
    - storing the event function with the on function is constant `O(1)`
    - executing each event with the event function is based on the number of functions named by on, which is linear at most `O(n)`
  - Space Complexity:
    - we store each function called by on, so this is linear  `O(n)`
    - there is no additional storage unit for trigger function, so this is constant space `O(1)`

### Input, Output, Constraints, Edge (IOCE)

  - I: object
  - O: object with the on and trigger function
  - C: N/A
  - E: N/A

  - on function
    - I: eventName (string) and function
    - O: stores the function with the function name in the object
    - C: N/A
    - E: N/A

  - trigger function
    - I: string
    - O: invoke the stored function with the same string name
    - C: N/A
    - E: no stored function with the string name => console.log('no function with that name')

### Strategy / Pseudocode
- create an mixEvent class
- store events as an object
- on function
  - add the function with the function name to the events object in an array
- trigger
  - call each function with the function name with the given args
- return the object

## <a href='./eventingLibrary.test.js'>About the Tests</a>

<img src='https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white' />

Test cases are run through the LeetCode platform and locally with Jest using:
```
npm run test
```