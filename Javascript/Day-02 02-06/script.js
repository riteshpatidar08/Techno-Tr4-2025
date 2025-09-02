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

//NOTE if user exists and isLoggedIn show dashboard other wise show login.

//NOTE create a nested if else first check if user is active then check the permission parameter equal to ='update_student_records' .

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
    console.log('user is logging in');
    break;
  case 'Logout':
    console.log('user is signing out');
    break;
  case 'FileAccess':
    console.log('user is accessing the file');
    break;
  default:
    console.log('no action is matched');
}

//create a switch case takes cmd as a paramter create cases on the basis of ls , mkdir , cd , touch 