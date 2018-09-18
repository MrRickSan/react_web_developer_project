var nameVar = 'Ricardo';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jenny';
console.log('nameLet', nameLet);


const  nameConst = 'Frank';
console.log('nameConst', nameConst);


//  Block scoping

const fullName = 'Ricardo Oliveira';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}