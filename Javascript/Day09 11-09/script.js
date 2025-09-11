//form events ;

//focus //blur //submit //input //change

const firstname = document.getElementById('firstname');

firstname.addEventListener('focus', () => {
  firstname.style.border = '2px solid red';
  firstname.style.outline = 'none';
});

firstname.addEventListener('blur', () => {
  firstname.style.border = '2px solid gray';
  firstname.setAttribute('disabled', '');
  firstname.setAttribute('placeholder', 'field disbaled');
});

firstname.addEventListener('input', (event) => {
  console.log(event.target.value);
  console.log(firstname.value); //first way to fetch values in input event
  const p = document.getElementById('output');
  p.textContent = firstname.value;
});

//create a password input field if the password length is less than 8 show password must be 8 character long below the input field in red color , if password is equal and greater than 8 show strong password with green color ;

///NOTE SELECT THE PASSWORD FIELD
const pass = document.getElementById('password');
console.log(pass);

pass.addEventListener('input', () => {
  const p = document.getElementById('output');
  if (pass.value.length < 8) {
    p.textContent = 'password must be 8 character long';
    p.className = 'error';
    pass.style.border = '2px solid red';
    pass.style.outline = 'none';
  } else {
    p.textContent = 'strong password';
    p.className = 'success';
    pass.style.border = '2px solid green';
    pass.style.outline = 'none';
  }
});

//next submit event imp*****

// console.log('1')
// console.log('2')
// alert('hi')
// console.log('4'
// )
// console.log('5')

console.log('1');
console.log('2');
setTimeout(() => {
  console.log('3');
}, 2000); //callback ,time
setTimeout(() => {
  console.log('6');
}, 2000);
console.log('4');
console.log('5');

const intervalId = setInterval(() => {
  console.log('hello ', Math.random());
}, 2000);

clearInterval(intervalId); //clear time interval

//PROMISES => PROMISE IS A JS OBJECT WHICH IS A PLACEHOLDER FOR FUTURE VALUES OF SOME ASYNC CODE LIKE DATA FETCHING :

//promise states => pending , reject and fulfilled ;

//how to create a promise in js ;
//how to handle the promise object return by inbuilt functions like fetch()

//note 1 :
const newPromise = new Promise((resolve, reject) => {
  let success;
  if (success) {
    resolve('promise is fulfilled');
  } else {
    reject('promise is rejected');
  }
});
console.log(newPromise);
