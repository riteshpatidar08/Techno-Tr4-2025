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
