const mixEvents = require('./eventingLibrary');

xdescribe('20. Eventing Library', () => {

  it('should add event handling methods to the object', () => {
    const obj = mixEvents({});

    expect(obj).toHaveProperty('on');
    expect(obj).toHaveProperty('trigger');
});

it('should trigger registered event callbacks', () => {
    const obj = mixEvents({});
    const mockCallback = jest.fn();

    obj.on('testEvent', mockCallback);
    obj.trigger('testEvent');

    expect(mockCallback).toHaveBeenCalled();
});

it('should pass arguments to event callbacks', () => {
    const obj = mixEvents({});
    const mockCallback = jest.fn();

    obj.on('testEvent', mockCallback);
    obj.trigger('testEvent', 42, 'hello');

    expect(mockCallback).toHaveBeenCalledWith(42, 'hello');
});

it('should allow multiple listeners for the same event', () => {
    const obj = mixEvents({});
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    obj.on('testEvent', mockCallback1);
    obj.on('testEvent', mockCallback2);

    obj.trigger('testEvent');

    expect(mockCallback1).toHaveBeenCalled();
    expect(mockCallback2).toHaveBeenCalled();
});

it('should return the original object after extending it', () => {
    const obj = {};

    const extendedObj = mixEvents(obj);

    expect(extendedObj).toBe(obj);
});

});