'use strict';

/**
 * @param {...function} fns
 * @return {function}
 */

const compose = (...fns) => {
  return (arg) => {
    let result = arg;

    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }

    return result;
  }
}

/**
 * @param {...function} fns
 * @return {function}
 */

const pipe = (...fns) => {
  return (arg) => {
    let result = arg;

    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }

    return result;
  }
}

module.exports = {compose, pipe};
