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


//NOTE Create user authentication system where you have to use the do while loop , in do block you have to take prompt from the user asking for email and password if passowrd and username matched you have to show console login successfull , if not show credendiats donont match and ask again for email and password 