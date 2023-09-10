/**
 * @param {number} start
 * @param {number | null} end
 * @param {number | null} step
 * @constructor
 */

var Range = function(start, end, step) {
  this.start = start;
  if (end === undefined) {
    this.end = start;
  } else {
    this.end = end;
  }

  if (step === undefined) {
    this.step = (this.start <= this.end) ? 1 : -1;
  } else {
    this.step = step;
  }
}

/**
 * @return {number}
 */

Range.prototype.size = function () {
  let diff = Math.abs(this.end - this.start);
  return Math.floor(diff / Math.abs(this.step)) + 1
}

/**
 * @param {function} cb
 */

Range.prototype.each = (cb) => {
  if (this.step < 0) {
    for (let i = this.start; i >= this.end; i -= this.step) {
      cb(i);
    }
  } else {
    for (let i = this.start; i <= this.end; i += this.step) {
      cb(i);
    }
  }
}

/**
 * @param {number} val
 * @return {boolean}
 */

Range.prototype.includes = function(val) {
  let validElement = ((val - this.start) / this.step) % 1 === 0;

  if (this.step > 0) {
    return (val >= this.start && val <= this.end) && validElement;
  } else {
    return (val <= this.start && val >= this.end) && validElement;
  }
}

module.exports = Range;
