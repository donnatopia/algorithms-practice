const asyncMap = require('./asyncMap');

xdescribe('18. Async Map', () => {

  it('should invoke the callback function on the results array', async () => {
    const tasks = [
      function (cb) {
        setTimeout(function () {
          cb('one');
        }, 200);
      },
      function (cb) {
        setTimeout(function () {
          cb('two');
        }, 100);
      }
    ];

    const expectedResult = ['one', 'two'];

    // Create a mock callback function
    const finalResultCallback = jest.fn();

    // Call the asyncMap function
    await asyncMap(tasks, finalResultCallback);

    // Expect the finalResultCallback to be called with the correct results array
    expect(finalResultCallback).toHaveBeenCalledWith(expectedResult);
  });

});