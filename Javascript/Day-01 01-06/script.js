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
