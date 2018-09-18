//  arguments object - no longer bound with arrow functions

const add = function ( a, b){
    console.log(arguments);  // accessible here
    return a + b;
 }

console.log(add(55, 1, 1001));

const addArrow = ( a, b) => {
    // console.log(arguments);  //  error!
    return a + b;
 }

console.log(addArrow(55, 1, 1001));

//  this keyword - no longer bound

const user = {
    name: 'Ricardo',
    cities: ['Recife', 'Olinda', 'Porto'],
    printPlacesLived () {
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map( (city) => `${this.name} has lived in ${city}`);

        // this.cities.forEach( (city) => {
        //     console.log(`${this.name} has lived in ${city}`);
        // });
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [2, 4, 10],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map( (number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());