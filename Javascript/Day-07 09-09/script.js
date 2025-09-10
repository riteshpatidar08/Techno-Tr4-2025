//NOTE
const colors = {
  white: '#fff',
  black: '#000',
};

//ENTRIES :

const entriesOutput = Object.entries(colors);
console.log(entriesOutput);

entriesOutput.forEach((el) => {
  console.log(el);
  const [key, value] = el;
  console.log(`${key} : ${value}`);
});

//freeeze ;
const userData = {
  email: 'test@gmail.com',
  password: 'test@123',
};
Object.freeze(userData);
userData.email = 'newtest@gmail.com';
userData.employeeNo = '12334';
console.log(userData);

// Object.seal() existing will update but we cannot add new

//Object.assign(target,source);
const target = {
  firstname: 'test',
  age: 23,
};
const source = {
  email: 'test@gmail.com',
};
const mergeObject = Object.assign(target, source);
console.log(mergeObject);
console.log(target);

//NOTE SCOPE :

//NOTE GLOBAL (outside any function or block) ;

const course = 'mern';
function test() {
  console.log(course); //✔️
}

test();

if (true) {
  console.log(course); //✔️
}

//block

if (true) {
  const a = 5; //not accessible outside of block
  let b = 6; //not accessible outside of let
  var c = 7; //var keyword accessible outside of block scope
}

console.log(c);
//function create its own local scope all the variable declaration cannot be accessed outside of the scope
function greet() {
  const x = 1;
  let y = 2;
  var z = 3;
}

greet();
// console.log(z)

//NOTE Variable Shadowing
const sayYourName = 'my name is test';

function greet1() {
  const sayYourName = 'my name is test1';
  console.log(sayYourName);
}
greet1();

//WINDOW OBJECT (GLOBAL OBJECT) ;

console.log(window);
// window.alert('hi');
const car = {
  brand: 'HONDA',
};
//NOTE why var is called a global variable
//the variables decalared with var automatically craete key value pair in the window
var product = 'AC';
console.log(window);
let even = 2;
console.log(window.even); //gives undefined
console.log(window.product); //gives 'AC'

//NOTE THIS KEYWORD :
//global scope this behaviour
console.log(this.product); //ac ; //points to window

//function decalaration use case behaviour
function sum() {
  console.log(this); //points to window
}
sum();

//this object

//methods :

const carDetails = {
  brand: 'HONDA',
  color: 'WHITE',
  getDetails: function () {
    console.log(this.color); //points to object itself
  },
  // getDetails : ()=>{
  //     console.log(this)//use lexical scope this
  // }❌❌
};
carDetails.getDetails();
//note arrow function donot have its own this keyword its uses parent scope this (Or lexical scope this)
//donot use arrow function as object method

//NOTE HOISTING => moves the variables and function declarations to the top of scope ;

//var keyword :
console.log(gadget); //undefined

var gadget = 'PS4';
// console.log(gadget)
// console.log(window)

multiply(); //support hoisting initial value will be function iteself
function multiply() {
  console.log('multiply function is running');
}

// console.log(college) //access tdz start
let college = 'techno'; //assigning a value tdz end

//note diffrenece between let const and var => reassig and redeclaration , scope basis , on hoisting basis

var z = 10;
function demo() {
  console.log(z); //hoisting var = undefined
  var z = 20;
  console.log(z); //20
}

demo();

//DOM MANIPULATION :

//DOM TREE => DOCUMENT //NOTE select

console.log(document); //root node of dom tree
console.dir(document); //show all the properties of js object
console.log(document.body);

//NOTE SELECT;
//NOTE 5 methods

//document.getElementByTagName() ;

//NOTE  return a htmlcollection which looks like an array but originally not an array ;
const allh1 = document.getElementsByTagName('h1');
console.log(allh1[1]);
console.log(allh1[0]);
console.log(allh1);

//NOTE convert html collection in to an array ;
const newArr = [...allh1];
console.log(newArr);
