//NOTE ARRAY METHODS :

//TODO WHAT A PARTICULAR METHODS RETURNS
//TODO CHECK if the methods modify the original array or not ;

const colors = ['red', 'blue', 'white', 'sky', 'orange'];

//NOTE PUSH (TO ADD AN ELEMENT IN THE END);
const output = colors.push('yellow');
console.log(output); //return length of new array
console.log(colors); //modifies the original array

//NOTE POP (ELEMENT REMOVE LAST)

//pop will return deleted element
//changes original array

//NOTE UNSHIFT (ELEMENT ADD TO THE START)
// follows same as push
//NOTE SHIFT (REMOVE ELEMENT FROM START)

//follows same as pop

//NOTE INCLUDES (CHECK WHEATHER A ELEMENT EXISTS IN AN ARRAY OF NOT RETURN TRUE OR FALSE);

console.log(colors.includes('whit'));

//NOTE SLICE (TO EXTRACT A PART OF AN ARRAY) (startIndex , endIndex) ;
//NOTE ALWAYS RETURN NEW SLICED ARRAY , DONOT MODIFY ORIGINAL ARRAY;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const slicedArray = numbers.slice(2, 5);
console.log(slicedArray);
console.log(numbers);
//imp ***
console.log(numbers.slice(1));
//imp***
console.log(numbers.slice(-1));

//NOTE SPLICE(add , remove and update the element) ;
//NOTE MODIFIES THE ORIGINAL ARRAY :
// arr.splice(index , deletecount  , newelementToadd)
const splicedOutput = numbers.splice(1, 0, 100, 101);
console.log(numbers);
console.log(splicedOutput);

let num = [1, 2, 3, 2, 4, 5, 2];
// delete the element where 2 occur from an array
for (let i = 0; i < num.length; i++) {
  if (num[i] === 2) {
    num.splice(i, 1);
  }
}
console.log(num);

//NOTE indexOf

const evn = [2, 4, 6];
console.log(evn.indexOf(9));

//NOTE concat ;
const frontend = ['html', 'css', 'js'];
const backend = ['node', 'express'];

const mernStack = frontend.concat(backend);
console.log(mernStack);

//NOTE JOIN (seprator)
//NOTE converts arry into string
const intro = ['my', 'name', 'is', 'test'];
console.log(intro);
console.log(intro.join('-'));

//NOTE FLAT
const nestedArr = [1, 2, [3, 4, [5, 6], 7], 8];

console.log(nestedArr.flat(2));
console.log(nestedArr);

//NOTE HIGHER ORDER METHODS :
//  (methods and functions)
//NOTE HIGHER ORDER FUNCTIONS :

const test = (callback) => {
  callback();
};
// const sayHi = () => {
//     console.log('hi')
// }
test(() => {
  console.log('hi');
});

//FOREACH (HIGHER ORdER METHOD) => iterate on array  ;
//always returns undefined ;
const courses = ['mern', 'mean', 'ds/ml'];

const forEachOutput = courses.forEach((el) => {
  console.log(el);
});
console.log(forEachOutput);

//NOTE MAP*****
//map will returns always a new array which is the result of the transformation you have applied in the callback function on each individual array element .

const evenNumber = [2, 4, 6, 8];
const mappedOutput = evenNumber.map((el) => {
  return el * 2;
});
//NOTE shorthand variation
// evenNumber.map(el=>el*2)
console.log(mappedOutput);

//NOTE FILTER (NOTE RETURN A NEW ARRAY , filter out all the elements which satifies the condition);

const filteredOutput = [1, 2, 3, 4, 5, 6].filter((el) => el > 3);
console.log(filteredOutput);

//create an array of object of product and filter out the products which have category mobile and price above 500000 ;

//NOTE FIND return only the first element which stafies the given condition;

const findOutput = [1, 2, 3, 4].find((el) => el > 2);
console.log(findOutput);

//NOTE   create an array of object of user and find the user  on the basis of prompt , take email to check the user exists ;

//REDUCE IMP METHOD :
const reducedOutput = [1, 2, 3, 4, 5].reduce((acc, el) => {
  console.log(acc, el);
  return acc + el;
}, 0);
console.log(reducedOutput);

const cart = [
  { name: 'Shirt', price: 500, quantity: 3 },
  { name: 'Jeans', price: 1000, quantity: 5 },
];
//find the total cart value using reduce method.
//find maximum number in an array using reduce.

//NOTE SOME (check if some el satifies the condition return true or false);

const someOutput = [1, 2, 3, 4].some((el) => {
  return el > 2;
});

console.log(someOutput);

//NOTE EVERY (GIVES TRUE IF ALL THE ELEMENTS SATISFIES A GIVEN CONDITION)

//NOTE REVERSE(USED TO REVERSE AN ARRY < CHANGE ORIGINAL ARRAY)

//NOTE SORT (changes original array) ;
const arryToBeSort = [1, 30, 4, 5, 6];
const sortedArry = arryToBeSort.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(sortedArry);

//STRINGS

let language = 'javascript';

console.log(language[0]);
language[0] = 'i';
console.log(language);

//NOTE LENGTH
console.log(language.length);

//NOTE toUpperCase
console.log(language.toUpperCase());
//NOTe toLowerCase
console.log(language.toLowerCase());

//NOTE startsWIth and endsWith

console.log(language.startsWith('j'));
console.log(language.endsWith('ipt'));

//NOTE indexOf and lastIndexOf
console.log(language.indexOf('j'));
console.log(language.lastIndexOf('a', 2));
//NOTE -
console.log(language.charAt(0));

//NOTE - split ; convert string into array
const newStr = 'hello-this-is-test';

console.log(newStr.split('-'));

const introarr = ['my', 'name', 'is', 'test'];
//NOTE  create a string in which you have to capatilize first character of each Element;
//NOTE 'hello this is a string' reverse each of word of the string
const strg = 'hello this is a string';

const reversedEachWord = strg.split(' ').map((el) => {
  return el.split('').reverse().join('');
});
console.log(reversedEachWord.join(' '));
