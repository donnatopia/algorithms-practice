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

  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if(Object.prototype.hasOwnProperty.call(pairs, char)) {
      if (pairs[char] !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}