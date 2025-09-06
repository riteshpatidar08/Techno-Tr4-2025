const language = 'javascript'
console.log(language.includes('jav'));

//NOTE Slice  ;
//NOTE extract the part of a string ;
console.log(language.slice(1,4))
console.log(language.slice(-6,-3))

//NOTE substrng
//if startindex > endIndex it will swap ;
console.log(language.substring(4,2))
//if start index will be in minus it changes it to zero the extract string we get (0,4)
console.log(language.substring(-4,2)) ;

//NOTE TRIM < TRIMSTART AND TRImEND ;
const stack = 'MERNSTACK      ';
console.log(stack.trimEnd())
const course = '        MERNSTACK'
console.log(course.trimStart()) ;

//remove all the whitespace from the elements ;
const stacks = ['  react' , 'vue   ', 'angular    '];
const codingLanguages = ['java', 'dart', 'python', 'javascript', 'rust', ];
// create a new arry of languages which starts with 'j'

//NOTE replace and replace all ;

const str = 'REACT ARE ARE A LIBRARY' ;
console.log(str.replace('ARE','IS'
))
console.log(str.replaceAll('ARE' , "IS"))

//NOTE repeat ;
const lgh = 'ha' ;
console.log(lgh.repeat(4));


const strr = '1234'
console.log(strr.padEnd(8,'0'))

//NOTE  create a fn which takes a 16digit cc number then pad the remaining number only show last four ;
//NOTE  padNumber('4356767696959646')
//NOTE  const numbersArr = ['12','4567','123','95','3243'];
// make  the length of all the element same 
//NOTE CREATE A FUNCTION TO CHECK IF A STRING IS  A PALINDROME STRING .

//NOTE SEARCH , match , matchALL ; pattern(regex);
console.log(str.search('REACT')) //the index where the pattern starting to match;
console.log(str.match("REACT"));