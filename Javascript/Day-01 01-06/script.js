// console.log('external file')

//NOTE WHAT IS JS ?
//JS IS A HIGH LEVEL INTERPRETED , SINGLE THREADED , DYNNAMICALLY TYPES LANGUAGE ;

//NOTE VARIABLES AND VALUE ;

//NOTE NAMING VARIABLES ;

//NOTE first_name => snake case
//NOTE camelCase =>
//     firstName
//NOTE  isjsfun => isJsFun
//NOTE meaningful name;

// let 34name = 'test' ; ❌
// let _name = 'test';
// let $lastname=  'test';

//NOTE keywords used to declare a variables;

// firstName = 'test' ;
// console.log(firstName)❌

//NOTE LET < CONST < VAR ;

//NOTE LET REDECLARATION  ❌ AND REASSIGN ✔️ ;

let collegeName = 'TECHNO';

collegeName = 'JECRC'; //reassign
console.log(collegeName);

// let collegeName = 'GIT' ; //redeclare

//NOTE CONST  REDECLARATION  ❌ AND REASSIGN  ❌

const PI = 3.14;
// PI = 3; ❌
// const PI = 3.14 ;❌

//let firstName ;
// const lastName ; ❌

//NOTE VAR => (legacy keyword do not use in the code) ;

var product = 'phone';
product = 'ac'; //reassgin ✔️ ;
var product = 'tv'; //redeclare ✔️ ;

//NOTE DATATYPES

//PRIMITIVEs AND NON-PRIMITVEs :

//NOTE STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , BIGINT  AND SYMBOL ;

const age = 'twenty';

//NOTE typeof
console.log(typeof age);

const agee = 4;
console.log(typeof agee);

const isJsFun = true;
console.log(typeof isJsFun);

let company;
console.log(company); //undefined
console.log(typeof company);

let student = null;
console.log(typeof student); //TODO  null datatype always be object


//NOTE OPERATORS 

//NOTE AIRTHMATIC OPERATORS(+,-,*,/,%, **) ;
console.log(5 + 5) ;
console.log(5 - 5) ;
console.log(5 % 5) ;
console.log(5 / 5) ;
console.log(5 * 5) ;
console.log(5 ** 5) ;

console.log('5' + 5 - 3) //55 string ;
console.log('5' - 5) ;

//NOTE ASSIGNMENT OPERATORS (= , += , -= , /= , *=) ;
let y = 5 ;
//NOTE y = y + 5 ;
//NOTE y ki value main 5 add krdo and y main assign kardo
y += 5 ;

//NOTE COMPARASION (== , === , !=, !== , > , >= , < , <=) ;
//NOTE (== ) LOOSE EQUALITY CHECK (VALUE)
console.log(5 == '5') ;

//NOTE (===) STRICT EQUALITY CHECK ( VALUE AND TYPE )
console.log(5 === '5') ;

//NOTE (!= ,!==)
console.log(10 != '10') ;
console.log(10 !== '10');
//NOTE LOGICAL (|| , && , !) 
console.log(true || false)
console.log(true && false);
console.log(!true) ;

// console.log(0 && 6);

//NOTE unary (++ , --  ,!);

//pre increment and post increment ;

//POST 
let j = 5 ;
console.log(j++)
console.log(j)

//pre 
let k = 6 ;
console.log(++k)

let z = 12 ;
console.log(z++ + ++z) ;