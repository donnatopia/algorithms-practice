const BinaryHeap = require('./binaryHeap');

xdescribe('22. Binary Heap', () => {

  it('should add a value to an empty BinaryHeap instance using insert function', () => {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);

    expect(binaryHeap._heap.length).toBe(1);
    expect(binaryHeap._heap[0]).toBe(4)
  });

  it('should add multiple values to a Binary Heap when called multiple times', () => {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(8);
    binaryHeap.insert(12);

    expect(binaryHeap._heap).toStrictEqual([4, 8, 12]);
  })

  it('should maintain sorting based on BinaryHeap._compare between a parent node and its children', () => {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);

    let compare = binaryHeap._compare;
    let heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2];
    expect(compare(heap[0], heap[1])).toBe(true);
    expect(compare(heap[0], heap[2])).toBe(true);

    // heap[1] is the parent of heap[3] and heap[4];
    expect(compare(heap[1], heap[3])).toBe(true);
    expect(compare(heap[1], heap[4])).toBe(true);
  });

  it('should remove a single element from BinaryHeap._heap when removeRoot function is called', () => {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(6);
    binaryHeap.insert(4);
    binaryHeap.insert(9);
    binaryHeap.removeRoot();

    expect(binaryHeap._heap.length).toBe(2);
  })

  it('should maintaining sorting between parents and children after removing nodes', () => {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);
    binaryHeap.insert(0);
    binaryHeap.removeRoot();

    let compare = binaryHeap._compare;
    let heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2];
    expect(compare(heap[0], heap[1])).toBe(true);
    expect(compare(heap[0], heap[2])).toBe(true);

    // heap[1] is the parent of heap[3] and heap[4];
    expect(compare(heap[1], heap[3])).toBe(true);
    expect(compare(heap[1], heap[4])).toBe(true);
  })

  it('should return undefined on an empty heap when removeRoot is called', () => {
    let binaryHeap = new BinaryHeap();
    expect(binaryHeap.removeRoot()).toBe(undefined);
  })

  it('should return the root node when removeRoot is called', () => {
    let binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);
    binaryHeap.insert(0);
    expect(binaryHeap.removeRoot()).toBe(0);
  })

});