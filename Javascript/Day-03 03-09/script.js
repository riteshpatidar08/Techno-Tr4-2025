//NOTE LOOPS IN JS :
//NOTE FOR , WHILE , DO WHILE , FOR OF , FOR IN;

//NOTE FOR

// 

for(let i = 0 ; i <=  10 ; i++){
    console.log(i);
}

//NOTE traverse an array ;
const arr = [1,2,3,4,5] ;

for(let i = 0 ; i  < arr.length ; i++){
    console.log(arr[i])
}

//NOTE find the sum of all element in an array ;
//NOTE find the maximum number in an array ;
//NOTE Count the occurance of target element in an array countOccurance(arr,target) ;
//NOTE create a loop to print a table of any number till 10 ;
//NOTE create a new reversed array of a target array ;
//NOTE FIND THE INDEX OF A TARGET ELEMENT IN AN ARRAY findIndex(arr,target) if not found return -1;
//NOTE find the longest string in an array ;
//NOTE takes an array and seggregate odd and even numbers into separate  arrays ;
//NOTE create an array using for loop fill the even numbers only till 60 ; 
 
// arr.push()

//NESTED LOOPS :

for(let i  = 1 ; i <= 10 ; i++){
    for(let j = 1 ; j <=10 ; j++){
        console.log(`${i}--${j}`)
    }
}

//20 tak => 1,2,3,4,5,6,7,8,9,10 => 20
//NOTE RIGHT TRIANGLE PATTERN ;

for(let i = 1;  i <= 5 ; i++){
    let pattern = ''
    for(let j = 1 ; j <= i ; j++){
 pattern += '*'
    }
    console.log(pattern)
}
//INVERTED RIGHT TRAINGLE //square //pyramid //inverted pyramid // diamond  :

//NOTE - 

for(let i = 1  ; i <= 5 ; i++){
    let pyramid = '' ;
    for(let j = 1 ; j <= 5 - i ; j++){
        pyramid += ' ' ;
    }
    for(let k=1 ; k <= 2*i-1 ; k++){
        pyramid += '*'
    }
    console.log(pyramid)
}

let i = 0 ;
const newarr = [2,3,4];
while(i < newarr.length){
    console.log(newarr[i]);
    i++
}

let j = 1 ;
do {
console.log(`j will print once before checking the condition ${j}`)
j++
}while(j < 0) ;


//NOTE Create user authentication system where you have to use the do while loop , in do block you have to take prompt from the user asking for email and password if passowrd and username matched you have to show console login successfull , if not show credendiats donont match and ask again for email and password.


//NOTE JS SPECIFIC lOOPS => for of and for in.

//NOTE FOR OF 
const products = ['tv', 'ac']
//using for of loop we can access the element of an arry
for(let product of products){
console.log(product)
}

//NOTE FOR IN ;
for(let index in products){
    console.log(index)
}

//OBJECT CASE :

//for of ❌
const details = {
    firstName : 'Test',
    age : 2034 -1993 ,
}
// for(let value of details){
//     console.log(value)
// }

//LOOP OVER THE OBJECT :
for(let key in details){
    console.log(`${key} : ${details[key]}`)
}

//NOTE ARRAY METHODS :

//TODO WHAT A PARTICULAR METHODS RETURNS 
//TODO CHECK if the methods modify the original array or not ;

const colors = ['red', 'blue', 'white', 'sky','orange'];

//NOTE PUSH (TO ADD AN ELEMENT IN THE END);
const output = colors.push('yellow');
console.log(output) //return length of new array
console.log(colors) //modifies the original array

//NOTE POP (ELEMENT REMOVE LAST)

//pop will return deleted element 
//changes original array 

//NOTE UNSHIFT (ELEMENT ADD TO THE START)
// follows same as push
//NOTE SHIFT (REMOVE ELEMENT FROM START)

//follows same as pop


//NOTE INCLUDES (CHECK WHEATHER A ELEMENT EXISTS IN AN ARRAY OF NOT RETURN TRUE OR FALSE);

console.log(colors.includes('whit')) ;

//NOTE SLICE (TO EXTRACT A PART OF AN ARRAY) (startIndex , endIndex) ;
//NOTE ALWAYS RETURN NEW SLICED ARRAY , DONOT MODIFY ORIGINAL ARRAY;
const numbers = [1,2,3,4,5,6,7,8,9,10];

const slicedArray = numbers.slice(2,5);
console.log(slicedArray)
console.log(numbers);
//imp ***
console.log(numbers.slice(1))
//imp***
console.log(numbers.slice(-1))


//NOTE SPLICE(add , remove and update the element) ;
//NOTE MODIFIES THE ORIGINAL ARRAY :
// arr.splice(index , deletecount  , newelementToadd)
const splicedOutput = numbers.splice(1,0,100,101);
console.log(numbers)
console.log(splicedOutput)

let num = [1,2,3,2,4,5,2];
// delete the element where 2 occur from an array
for(let i = 0 ; i <  num.length ; i++){
    if(num[i] === 2){
        num.splice(i,1)
    }
}
console.log(num)