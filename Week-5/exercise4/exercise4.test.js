const mathOperations = require('./exercise4.js')

test('Math Operation Test',()=>{

    expect(mathOperations.sum(2, 3)).toBe(5);
    expect(mathOperations.diff(3,3)).toEqual(0);
    expect(mathOperations.product(2,3)).toEqual(6);
})