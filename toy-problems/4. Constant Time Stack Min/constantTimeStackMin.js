/**
 * @constructor
 */
const Stack = function () {
  this._stack = []
  this._min = [];
}

/**
 * @param {number} val
 */
Stack.prototype.push = function (val) {
  this._stack.push(val);
  if (this._min.length === 0 || val <= this._min[this._min.length -1]) {
    this._min.push(val);
  }
}

/**
 * @return {number}
 */
Stack.prototype.pop = function () {
  let val = this._stack.pop();
  if (val === this._min[this._min.length -1]) {
    this._min.pop();
  }
  return val;
}

/**
 * @return {number}
 */
Stack.prototype.min = function () {
  return this._min[this._min.length -1];
}

/**
 * @return {number}
 */
Stack.prototype.size = function () {
  return this._stack.length;
}

module.exports = Stack;
