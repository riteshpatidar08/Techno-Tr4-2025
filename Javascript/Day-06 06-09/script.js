// //NOTE DESTRUCTURING *****
// //using destructuring we can directly save value of array to the variables ;
// const num = [1,2,3,4];
// // const a = num[0] ;
// // const b = num[1];
// // const [a,b,c,d] = num ;
// // console.log(a,b,c,d) ;

// //USE CASE SKIPPING A VALUE
// const [a,b,,d] = num ;
//  console.log(a,b,d) ;

//  //NOTE default values :
//  const evenNumber = [2,3,4,8];
//  const [x,y,z,p=6] = evenNumber;
//  console.log(p)

const nestedArr = [1, 2, [3, 4, [5, 6]]];
const [a, b, [c, d, [e, f]]] = nestedArr;
console.log(c);

//NOTE OBJECT DESTUCTURING :

const car = {
  brand: 'honda',
  color: 'white',
  engineSpec: '2.2l',
};
const { color, brand, engineSpec = '1500cc' } = car;
console.log(brand, color, engineSpec);

const detail = {
  firstName: 'test',
  address: {
    city: 'UDAIPUR',
  },
};
//Note changing default key name and nested
const {
  firstName: fName,
  address: { city },
} = detail;
console.log(fName, city);

const userData = [
  {
    id: 1,
    name: 'test1',
    email: 'test1@gmail.com',
    roles: ['admin', 'editor'],
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@gmail.com',
    roles: ['student', 'admin'],
  },
  {
    id: 3,
    name: 'test3',
    email: 'test3@gmail.com',
    roles: ['admin', 'superadmin'],
  },
];
userData.forEach(({ email, roles: [role1, role2] }) => {
  console.log(email, role1, role2);
  // console.log(el) //individual object
  // const {email ,roles} = el ;
  // console.log(email,roles)
  // const [role1,role2] = roles //array for roles ;
  // console.log(role1,role2)
});

//destruturing //email , role1, role2

//NOTE HOW TO USE PARAMTER DESTRUCTURING IN FUNCTION ;

function sum([a, b]) {
  console.log(a + b);
}

sum([1, 2]);

//Spread Operator (...) *****

const products = ['tv', 'ac', 'mobile'];
console.log(...products);

//SHALLOW COPY :
const copyProduct = products;
console.log(copyProduct);
copyProduct[0] = 'Laptop';
console.log(copyProduct);
console.log(products);
//shallow copy
const copyCreateUsingSpread = [...products];
console.log(copyCreateUsingSpread);
copyCreateUsingSpread[0] = 'pc';
console.log(products);
console.log(copyCreateUsingSpread);

//nested copy donot create using spread ;
const evenNumber = [2, 4, [6, 8]];
const evNumber = [...evenNumber];
evNumber[2][0] = 100;
console.log(evNumber);
console.log(evenNumber);

//NOTE MERGE TWO ARRAY ;

const frontend = ['HTML', 'CSS'];
const backend = ['node', 'express'];

const mernStack = [...frontend, ...backend];

//NOTE  useCASE 3 - INSERTION OF THE VALUES IN THE START OR END ;
const newFrontned = ['Figma', ...frontend, 'JS'];
console.log(newFrontned);

//try all this cases for object also
//NOTE Copy an object
const obj1 = {
  name: 'test',
};

const obj2 = { ...obj1 };
//NOTE Merge two

// const mergeObj = {...obj , ...obj2}

//Points to remember while merging if both object have same property the later overwrite earlier one

//NOTE adding new and update existing one *****

const laptop = {
    name : "Lenovo x1 yoga",
    ram : '32gb'
}
const updatedLaptop = {...laptop , ram : '16gb'};
console.log(updatedLaptop)

//NOTE REST OPERTOR(...) ;
//rest operator packs the remaining values into an arry
const oddNumber = [1,3,5,7];
const [z, ...rest] = oddNumber ;
console.log(z,rest)


//NOTE REST PARAMETER :
function sum(a, ...rest){
    console.log(a,rest);
}
sum(1,2,3,4,5);


//NOTE MATH OBJECT :

console.log(Math.round(2.6));//round to the nearest integer
console.log(Math.trunc(-2.7)); //remove decimal values
console.log(Math.floor(-2.9)) ; //round off to the lower value
console.log(Math.ceil(5.1)) //round ooff to the upper value
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4,5))
// const arr = [1,3,4,6,5,7,];
// console.log(Math.max(...arr))
// random number 1 to 10
console.log(Math.floor((Math.random()*10) + 1));
console.log(Math.sqrt(25))
console.log(Math.pow(2,4));

//OBJECT :
const colors = {
    white : '#fff',
    black : '#000'
}
const keyOutput = Object.keys(colors) //[white,black]
console.log(keyOutput);
 
//OBject.values //['#fff','#000'];
console.log(Object.values(colors))