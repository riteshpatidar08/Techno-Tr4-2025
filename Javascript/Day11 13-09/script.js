//NOTE UPDATED way TO WRITING A OBJECT (ENHANCED OBJECT LITERAL);
const firstname = 'RAHUL';
const user = 'age';
const details = {
  firstname, //key and value are same
  [user]: 23, //computed key name
  intro: function () {
    console.log(this.firstname);
  },
  intro1() {
    console.log(this.firstname); //new way of writing methods
  },
};
console.log(details);
console.log(details.intro1());
//computed key names ;

//ES6 classes
//when we call the Person class using new keyword the inbuilt constructor get automatically call and create a new object instance
class Person {
  constructor(name) {
    this.name = name;
  }
  getDetails() {
    console.log(`my name is ${this.name}`); //classes directly save methods on the prototype property of the  class which going to directly shared by all the instance made by person class
  }
}

const rahul = new Person('rahul');
const ram = new Person('ram');
console.log(rahul.getDetails());

//Private properties and methods in the classes :

class User {
  #id; //id going to be a private property
  constructor(id, department) {
    this.#id = id;
    this.department = department;
  }
  get getId() {
    console.log(this.#id);
  }
  set updateId(id) {
    this.#id = id;
  }
}
const Jonas = new User(34, 'cse');
// console.log(Jonas.#id) //gives error we cannot access the private property directly
// console.log(Jonas.department)
Jonas.getId; //getter ,setter methods called as a property name not as a function
Jonas.updateId = 5;
Jonas.getId;

//NOTE how to access the private field outside of the class and modify
// getters and setters //keyword get and set

//NOTE INHERITANCE

class Parent {
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    console.log(`my name is ${this.name}`);
  }
}

class Child extends Parent {
  constructor(age) {
    super('TEST'); //super keyword calls the parent constructor with the required argument
    this.age = age;
  }
  getDetails() {
    console.log(`this is child one`);
  }
}

const newChildInstance = new Child(34);
console.log(newChildInstance);
newChildInstance.getDetails();

//NOTE create a movie class create a methods like add movie , get movies , searchmovies and deletemovies;

//for add movies.push({id : 1 , movieName : 'Batman',ReleaseYear : 2008})

class Movies {
  constructor() {
    this.movies = [];
  }
  addMovie(movie) {
    this.movies.push(movie);
  }
  removeMovie(id) {
    const index = this.movies.findIndex((movie) => movie.id === id);
    this.movies.splice(index, 1);
  }
}

const movie = new Movies();
console.log(movie);
movie.addMovie({ id: 1, movieName: 'Batman', ReleaseYear: 2008 });
movie.removeMovie(1);
console.log(movie.movies);

//NOTE METHOD TYPES INSTANCE AND STATIC ;

class Gadget {
  constructor(name) {
    this.name = name;
  }
  static getGadgetDetails() {
    console.log('this will call on the Gadget class');
  }
}

const ps5 = new Gadget('ps5');
Gadget.getGadgetDetails();

//FUNCTION METHODS CALL APPLY BIND :
const accoutDetails = {
  firstName: 'TEST',
};
const newDetails = {
  firstName: 'RAM',
};
function demo(id) {
  console.log(`this is a demo account for ${this.firstName} with id ${id}`);
}
//call
demo.call(accoutDetails, 3);
// demo.call(newDetails, 6)
demo.apply(accoutDetails, [3]);
const output = demo.bind(accoutDetails, [2]);
output();
// demo(3);

//scope chaining

function outer() {
  const a = 5;
  function inner() {
    function nestedInner() {
      console.log(a);
      const b = 2;
    }
    nestedInner();
  }
  inner();
}

outer();

//NOTE closures ****** ;
//created when the funtion remembers the variables from the palace where the function is created .
function test() {
  const b = 100;
  return function () {
    console.log(b);
  };
}
const returnedFn = test();
returnedFn();

//parsint and parsefloat ;
//used to parse interger from an string
console.log(parseInt('2424kfdsd'));
console.log(parseFloat('12.44lf')); //parse the floating values



// (IIFE)IMMEDIATELY INVOcKED FUNCTION EXPRESSION
(function(){
    console.log('this is iife')
})() ;




