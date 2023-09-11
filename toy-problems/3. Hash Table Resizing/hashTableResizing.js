const HashTable = function() {
  this._hashTable = {};
  this._size = 0;
}

/**
 * @param {*} key
 * @param {*} val
 */

HashTable.prototype.insert = function(key, val) {

}

/**
 * @param {*} key
 * @return {*}
 */

HashTable.prototype.retrieve = function (key) {

}

/**
 * @param {*} key
 */

HashTable.prototype.remove = function (key) {

}

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1

/**
 * @param {string} str
 * @param {number} max
 * @returns
 */

HashTable.prototype.getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = HashTable;
