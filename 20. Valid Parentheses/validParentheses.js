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