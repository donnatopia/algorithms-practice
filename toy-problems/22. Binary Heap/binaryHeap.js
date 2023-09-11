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

BinaryHeap.prototype.insert = function(val) {
  this._heap.push(val);

  let index = this._heap.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && this._compare(this._heap[index], this._heap[parentIndex])) {
    this.swap(parentIndex, index);
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

BinaryHeap.prototype.removeRoot = function() {
  let root = this._heap.shift();
  let last = this._heap.pop();
  this._heap.unshift(last);

  let parentIndex = 0;
  let childIndex = this.getLesserChildIndex(parentIndex);

  while(childIndex && this._compare(this._heap[childIndex], this._heap[parentIndex])) {
    this.swap(childIndex, parentIndex);
    parentIndex = childIndex;
    childIndex = this.getLesserChildIndex(parentIndex);
  }

  return root;
}

BinaryHeap.prototype.swap = function(index1, index2) {
  let value1 = this._heap[index1];
  let value2 = this._heap[index2];
  this._heap[index1] = value2;
  this._heap[index2] = value1;
}

BinaryHeap.prototype.getLesserChildIndex = function(parentIndex) {
  let childrenIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2]

  if (this._compare(this._heap[childrenIndices[0]], this._heap[childrenIndices[1]])) {
    return childrenIndices[0];
  } else {
    return childrenIndices[1];
  }
}
module.exports = BinaryHeap;
