const powerSet = require('./powerSet');

xdescribe('14. Power Set', () => {

  it('should return an array with power set for \'abc\'', () => {
    const expectedPowerSet = [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ];
    const generatedPowerSet = powerSet('abc');

    expect(generatedPowerSet).toEqual(expect.arrayContaining(expectedPowerSet));
    expect(generatedPowerSet.length).toBe(expectedPowerSet.length);
  });

  it('should return an array with power set for \'jump\'', () => {
    const expectedPowerSet = ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"];
    const generatedPowerSet = powerSet('jump');

    expect(generatedPowerSet).toEqual(expect.arrayContaining(expectedPowerSet));
    expect(generatedPowerSet.length).toBe(expectedPowerSet.length);
  })

  it('should remove duplicates from the original set', () => {
    const expectedPowerSet = ["", "b", "a", "ab"];
    const generatedPowerSet = powerSet('bbbaaa');

    expect(generatedPowerSet).toEqual(expect.arrayContaining(expectedPowerSet));
    expect(generatedPowerSet.length).toBe(expectedPowerSet.length);
  })

});