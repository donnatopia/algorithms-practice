const HashTable = function() {
  this._table = {};
  this._items = 0;
  this._limit = 0;
}

/**
 * @param {*} key
 * @param {*} val
 */

HashTable.prototype.insert = function(key, val) {
  this._items++;

  if (this._items > (0.75 * this._limit)) {
    let limit = this._limit === 0 ? 1 : this._limit;
    this.resize(limit * 2);
  }

  let index = this.getIndexBelowMaxForKey(key, this._limit);
  this._table[index].push([key, val]);
}

/**
 * @param {*} key
 * @return {*}
 */

HashTable.prototype.retrieve = function (key) {
  for (let i = 0; i < this._limit; i++) {
    let bucket = this._table[i];
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) return tuple[1];
    }
  }
}

/**
 * @param {*} key
 */

HashTable.prototype.remove = function (key) {
  this._items--;

  if (this._items === 0) {
    this.reset();
    return;
  }

  for (let i = 0; i < this._limit; i++) {
    let bucket = this._table[i];
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        break;
      }
    }
  }

  if (this._items < 0.25 * this._limit) {
    this.resize(this._limit / 2);
  }
}

// create an empty table with the new limit and reassign the limit
HashTable.prototype.create = function (limit) {
  for (let i = 0; i < limit; i++) {
    this._table[i] = [];
  }

  this._limit = limit;
}

// reset to empty hashtable
HashTable.prototype.reset = function () {
  this._table = {};
  this._limit = 0;
  this._items = 0;
}

// increases the size of the table and reinserts old values to new table
HashTable.prototype.resize = function (newLimit) {
  let resizedTable = new HashTable();
  resizedTable.create(newLimit);

  for (let i = 0; i < this._limit; i++) {
    let bucket = this._table[i];
    if (!bucket) break;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      resizedTable.insert(tuple[0], tuple[1]);
    }
  }

  this._table = resizedTable._table;
  this._limit = resizedTable._limit;
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
