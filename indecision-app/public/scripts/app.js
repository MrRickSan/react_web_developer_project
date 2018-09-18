'use strict';

function square(x) {
    return x * x;
}

console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// }

//  function expression
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

var firstName = function firstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(firstName('Ricardo Oliveira'));

var firstNameExpression = function firstNameExpression(fullName) {
    return fullName.split(' ')[0];
};

console.log(firstName('Ricardo Oliveira'));
