const mathAdd = require('../math');
test(`O resultado é ${mathAdd}`, () => { 
expect(mathAdd.add(2, 3)).toBe(5); 
}); 

const mathSub = require('../math');
test(`O resultado é ${mathSub}`, () => { 
expect(mathSub.subtract(9, 3)).toBe(6); 
}); 

const mathMultiply = require('../math');
test(`O resultado é ${mathMultiply}`, () => { 
expect(mathMultiply.multiply(10, 10)).toBe(100); 
}); 

const mathDivide = require('../math');
test(`O resultado é ${mathDivide}`, () => { 
expect(mathDivide.divide(8, 2)).toBe(4); 
}); 

