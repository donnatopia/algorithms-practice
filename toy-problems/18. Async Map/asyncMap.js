'use strict'; // all variables must be declared

/**
 * @param {function[]} tasks
 * @param {function} callback
 * @return {function}
 */

const asyncMap = (tasks, callback) => {
  const taskPromises = tasks.map((task) => {
    new Promise((resolve) => task(resolve))
  })

  return Promise.all(taskPromises)
    .then(results => callback(results));
}

module.exports = asyncMap;
