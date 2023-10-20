const { compose, pipe } = require('./composePipe');

xdescribe('19. Compose Pipe', () => {

  it('should implement the compose function correctly', () => {
    var greet = function(name){ return 'hi: ' + name;}
    var exclaim = function(statement) { return statement.toUpperCase() + '!';}
    var welcome = compose(greet, exclaim);

    expect(welcome('phillip')).toBe('hi: PHILLIP!');
  });

  it('should implement the pipe function correctly', () => {
    var add2 = function(number){ return number + 2; }
    var multiplyBy3 = function(number){ return number * 3; }

    expect(pipe(add2, multiplyBy3)(5)).toBe(21);
    expect(pipe(add2, multiplyBy3, multiplyBy3)(5)).toBe(63);
  })

});