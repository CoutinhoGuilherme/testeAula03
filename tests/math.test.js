var number1 = Math.floor(Math.random * 101)
var number2 = Math.floor(Math.random * 101)

// var add = number1 + number2;
// var sub = number1 - number2;
// var multiply = number1 * number2;
// var div = number1 / number2;

const mathAdd = require('../math');
test(`O resultado ${number1} + ${number2} é:`, () => { 
expect(mathAdd.add(number1, number2)).toBe(number1 + number2); 
}); 

const mathSub = require('../math');
test(`O resultado ${number1} - ${number2} é:`, () => { 
expect(mathSub.subtract(number1, number2)).toBe(number1 - number2); 
}); 

const mathMultiply = require('../math');
test(`O resultado ${number1} * ${number2} é:`, () => { 
expect(mathMultiply.multiply(number1, number2)).toBe(number1 * number2); 
}); 

const mathDivide = require('../math');
test(`O resultado ${number1} / ${number2} é:`, () => { 
expect(mathDivide.divide(number1, number2)).toBe(number1 / number2); 
}); 

