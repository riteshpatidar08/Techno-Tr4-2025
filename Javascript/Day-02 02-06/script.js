//NOTE FUNCTIONS :

//NOTE FUNCTION DECLARATION ;
console.log(printName('ritesh'));
// console.log(lastname);
function printName(name) {
  return `My name is ${name}`;
}

//Note we can call function declaration before declararing it.

//NOTE FUNCTION EXPRESSION;

// const result = sum(4,6);
// console.log(result)

let sum = function (a, b) {
  return a + b;
};

//NOTE function expression cannot be called before declaration
// const result = sum(4,6);
// console.log(result);

//NOTE ARROW FUNCTION  *****:
// console.log(substraction()) ❌
const substraction = (b, a) => {
  return b - a;
};

//NOTE syntax variation
//NOTE if function have single paramter and have a single statement in the function body ;
const printNewName = (fname) => `my name is ${fname}`;
console.log(printNewName('ritesh'));
//NOTE
// () => {}
// const divide = (a,b) => b/a ;

//NOTE CONDITIONAL STATEMENT :
//NOTE truthy and falsy value ;
//NOTE FALSY VALUE => "", undefined ,null ,false , 0 , -0 , NaN
//NOTE TRUTHY VALUES => !'' , !0 , !-0
if (null) {
  console.log('this will run or not');
}

//TODO if user exists and isLoggedIn show dashboard other wise show login.

//TODO create a nested if else first check if user is active then check the permission parameter equal to ='update_student_records' .

//nested if else

//     if(){
//    if()
//     {}
//    else{}
//     }else{

//     }
// if(){

// }else if(){

// }else{

// }

//NOTE TERNARY OPERATOR :
false
  ? console.log('if condition is true this will run')
  : console.log('this block will run if false');

//NOTE -
//   user ? console.log('show user') : console.log('show spinner');

//NOTE TAKING INPUT FROM USER : FUNCTION / PROMPT, CONFIRM ;

// const firstName = prompt('Enter you firstname');
// alert(firstName);

// const isLogged = confirm('are you logged in');
// console.log(isLogged);

//NOTE SWITCH CASE :
const action = 'Logout';
switch (action) {
  case 'Login':
  case 'LogOut':
    console.log('user is logging in and logging out');
    break;

  case 'FileAccess':
    console.log('user is accessing the file');
    break;
  default:
    console.log('no action is matched');
}

//TODO create a switch case takes cmd as a paramter create cases on the basis of ls , mkdir , cd , touch

//TODO if user action is increment then increase count++ if decrement decrease count--

//country //state //city;

//NON PRIMITIVE DATA TYPES : 

//NOTE ARRAY AND OBJECT***** ;
const sum2 = (a,b) => a + b
const jsArray = ['test' , 3 , true , undefined , null , sum2];

console.log(jsArray[0]);
console.log(jsArray.length);
console.log(typeof jsArray) //object
console.log(jsArray[jsArray.length-1]);
//updating any element ;
jsArray[0] = 'test2' ;

//OBJECT***** ;

const details = {
 firstName : 'test' ,
 age  : 20 ,
 friends : ['test1','test2'],
 address : {
    pincode : 302018,
    city : 'jaipur'
 }
}

// [{},{},{}]
//NOTE ACCESSING VALUES ;
//NOTE DOT NOTATION , BRACKET NOTATION

console.log(details.firstName)
console.log(details.address.city)
console.log(details.friends[details.friends.length - 1])
details.firstName = 'newtest';
details.courses = 'CSE';
console.log(details)