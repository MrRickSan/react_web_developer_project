function square (x) {
    return x * x;
}

console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// }

//  function expression
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const firstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(firstName('Ricardo Oliveira'))

const firstNameExpression = (fullName) => fullName.split(' ')[0];

console.log(firstName('Ricardo Oliveira'))