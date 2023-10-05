/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var MyHashMap = function() {
  this.table = {}
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function(key, value) {
  this.table[key] = value;
};

/**
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function(key) {
  return key in this.table ? this.table[key] : -1;
};

/**
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function(key) {
  delete this.table[key];
};

module.exports = MyHashMap;