const { bind, Function} = require('./functionBind');

xdescribe('21. Function Bind', () => {

  it('should bind the arguments to the given function using the bind function', () => {
    const alice = {
      name: 'alice',
      shout: () => this.name
    };

    let boundShout = bind(alice.shout, alice);
    expect(boundShout).toBe('alice');

    boundShout = bind(alice.shout, {name: 'bob'});
    expect(boundShout).toBe('bob');
  });

  it('should bind the arguments to the given function using the Function prototype bind function', () => {
    const alice = {
      name: 'alice',
      shout: () => this.name
    };

    let boundShout = alice.shout.bind(alice);
    expect(boundShout).toBe('alice');

    boundShout = alice.shout.bind({name: 'bob'});
    expect(boundShout).toBe('bob');
  })

});