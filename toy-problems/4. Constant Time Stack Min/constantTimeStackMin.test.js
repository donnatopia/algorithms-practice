const Stack = require('./constantTimeStackMin');

xdescribe('4. Constant Time Stack Min', () => {

  it('should return the minimum value of the stack', () => {
    var stack = new Stack();
    stack.push(4);
    expect(stack.min()).toBe(4);

    stack.push(3);
    expect(stack.min()).toBe(3);

    stack.push(2);
    expect(stack.min()).toBe(2);

    stack.push(1);
    expect(stack.min()).toBe(1);

    stack.pop();
    expect(stack.min()).toBe(2);
    expect(stack.size()).toBe(3);

    stack.pop();
    expect(stack.min()).toBe(3);
    expect(stack.size()).toBe(2);
  });

});