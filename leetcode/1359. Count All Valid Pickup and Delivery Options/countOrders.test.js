const countOrders = require('./countOrders');

xdescribe('1359. Count All Valid Pickup and Delivery Options', () => {

  it('should all valid pickup/delivery possible sequences', () => {
    expect(countOrders(1)).toBe(1);
    expect(countOrders(2)).toBe(6);
    expect(countOrders(3)).toBe(90);
  });

});