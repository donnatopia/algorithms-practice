// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */

module.exports = (s) => {
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (var i = 0; i < s.length; i++) {
    if(!pairs.hasOwnProperty(s[i])) {
      stack.push(s[i]);
    } else {
      var next = stack[stack.length - 1];
      if (pairs[s[i]] !== next) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

// IOCE
// I: string containing various open and closed parentheses/brackets
// O: boolean validating whether these parentheses are closed properly
// C: N/A
// E: empty string should be true

// Strategy
// Stack: FILO
// if it is an open parentheses, then add it to the stack
// if it is a closed parentheses, then check the stack to see if the next one out is the correct open parenthese
  // if it is correct, then pop off the valid open parentheses from the stack and proceed along the string
  // if it is incorrect, then return false
// return if the stack length is 0

// Pseudocode
// create an object that correlates the open and closed parentheses pairing
// create an empty stack
// iterate through the string
  // if the character is a variation of the open parentheses
    // then add to the stack
  // if the character is a variation of the closed parentheses
    // then check the stack for the corresponding open parentheses
    // if the last character of the stack matches the corresponding open parentheses
      // then pop off the last character
    // if it does not match
      // then return false
// return if the stack's length is 0