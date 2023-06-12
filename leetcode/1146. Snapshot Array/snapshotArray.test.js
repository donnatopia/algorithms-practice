const SnapshotArray = require('./snapshotArray.js');

describe('1146. Snapshot Array', () => {

  it('should work', () => {
    var obj = new SnapshotArray(3);
    obj.set(0, 5);
    var snap_id = obj.snap();
    obj.set(0, 6);
    expect(obj.get(0, snap_id)).toBe(5);
  });
});