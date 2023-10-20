'use strict';

/**
 * @param {...function} fns
 * @return {function}
 */

const compose = (...fns) => {
  return (val) => {
    return fns.reduceRight((memo, fn) => fn(memo), val);
  }
}

/**
 * @param {...function} fns
 * @return {function}
 */

const pipe = (...fns) => {
  return (val) => {
    return fns.reduce((memo, fn) => fn(memo), val);
  }
}

module.exports = {compose, pipe};
