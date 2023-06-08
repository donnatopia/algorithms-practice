/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

module.exports = (pushed, popped) => {
  var stack = [];
  var popIndex = 0;

  var popVals = () => {
    while ((stack[stack.length - 1] === popped[popIndex]) && (popIndex < popped.length)) {
      stack.pop();
      popIndex++;
    }
  }

  for (var i = 0; i < pushed.length; i++) {
    popVals();
    stack.push(pushed[i]);
    popVals();
  }

  return stack.length === 0;
}