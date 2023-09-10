// Below is a binary heap whose nodes are integers. Its storage is an array
function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}

// Provided Method
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function() {

}

BinaryHeap.prototype.removeRoot = function() {

}

module.exports = BinaryHeap;
