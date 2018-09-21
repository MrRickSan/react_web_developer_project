class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting () {
    return `Hi I am ${this.name}!`;
  }

  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor () {
    /*
        !false === true
        !'' === true
        !!'' === false
        !!false === false
        !!undefined === false
        */
    return !!this.major; // !!undefined === false
  }

  getDescription () {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor (name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }

  getGreeting () {
    let greeting = super.getGreeting();

    if (this.homelocation) {
      greeting += ` I'm visiting from ${this.homelocation}.`
    }

    return greeting;

  }
}

const me = new Traveler('Ricardo Oliveira', 31, 'Porto');

console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');

console.log(other.getGreeting());
