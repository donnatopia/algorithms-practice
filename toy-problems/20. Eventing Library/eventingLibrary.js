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

  };

  /**
   * @param {string} eventName
   * @param {...any} args
   */
  obj.trigger = function(eventName, ...args) {

  };

  return obj;
}

module.exports = mixEvents;
