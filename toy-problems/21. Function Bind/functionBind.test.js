const bind = require('./functionBind');

xdescribe('21. Function Bind', () => {

  it('should bind the arguments to the given function using the bind function', () => {
    const alice = {
      name: 'alice',
      shout: function () {
        return this.name;
      }
    }

    let boundShout = bind(alice.shout, alice);
    expect(boundShout()).toBe('alice');

    boundShout = bind(alice.shout, {name: 'bob'});
    expect(boundShout()).toBe('bob');
  });

  it('should bind additional arguments to the given function using the bind function', () => {
    const fn = (a, b) => a + b;
    let boundFn = bind(fn, null, 'foo');
    let result = boundFn('bar');

    expect(result).toBe('foobar');
  })

});