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


//NOTE  Count the number of vowels in a string.
//NOTE   Write a function to check if a string is a palindrome.
//NOTE   From a string like "1,2,3,4", return the sum of numbers. 
//NOTE   Remove falsy values (false, 0, "", null, undefined, NaN) from an array.  
//NOTE remove duplicates from an array [1,2,2,3,4,5];



//NOTE SOLVE QUESTIONS RELATED TO TYPE COERSION
//imp
console.log([] + []);
console.log({} + {}); 
console.log([] + {} ) ;
console.log({} + []);
console.log(undefined + undefined) ;
console.log(0 === false) ;



// convert a snake_case string to camelCase
//we can accept index by passing second paramter.
const arrr = [1,2,3,4];
arrr.map((el,index)=>{
    console.log(el,index)
}) 