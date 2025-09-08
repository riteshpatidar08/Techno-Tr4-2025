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
