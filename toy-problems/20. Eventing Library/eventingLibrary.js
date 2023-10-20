/**
 * @param {object} obj
 * @return {object}
 */

function mixEvents(obj) {
  /**
   * @type {object}
   */
  const events = {};

  /**
   * @param {string} eventName
   * @param {function} callback
   */
  obj.on = function(eventName, callback) {
    eventName in events ? events[eventName].push(callback) : events[eventName] = [callback];
  };

  /**
   * @param {string} eventName
   * @param {...any} args
   */
  obj.trigger = function(eventName, ...args) {
    eventName in events ? events[eventName].forEach((fn) => fn(...args)) : console.log('no such function');
  };

  return obj;
}

module.exports = mixEvents;
