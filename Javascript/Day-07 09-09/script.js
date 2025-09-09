//NOTE 
const colors = {
  white: '#fff',
  black: '#000',
};

//ENTRIES :

const entriesOutput = Object.entries(colors);
console.log(entriesOutput)

entriesOutput.forEach((el)=>{
    console.log(el);
    const [key,value]= el ;
    console.log(`${key} : ${value}`)
})

//freeeze ;
const userData = {
    email : 'test@gmail.com',
    password : 'test@123'
}
Object.freeze(userData);
userData.email = 'newtest@gmail.com'
userData.employeeNo = '12334'
console.log(userData)

// Object.seal() existing will update but we cannot add new

//Object.assign(target,source);
const target = {
    firstname : 'test',
    age : 23
}
const source = {
    email : 'test@gmail.com'
}
const mergeObject = Object.assign(target,source)
console.log(mergeObject)
console.log(target) ;

//NOTE SCOPE :

//NOTE GLOBAL (outside any function or block) ;

const course = 'mern' ;
function test(){
    console.log(course) //✔️
}

test()

if(true){
    console.log(course) //✔️
}

//block 

if(true){
    const a = 5; //not accessible outside of block
    let b = 6 ; //not accessible outside of let
    var c = 7 ; //var keyword accessible outside of block scope
}

console.log(c)

function greet(){
    const x =1;
    let y =2 ;
    var z = 3 ;
}

greet();
console.log(z)