//user enter movie name into the input field;
//when you click on the search button , your form going to be submit ;

//task 1 select the form and input field
const form = document.getElementById('form');
const inputSearch = document.getElementById('search');
const btn = document.getElementById('btn');
//add event on the form and get the value from the field
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchQuery = inputSearch.value;
  console.log(searchQuery);
  btn.textContent = 'Searching....';
  fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=b0eec689`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => conosle.log(err))
    .finally(() => {
      btn.textContent = 'Search';
    });
});

//NOTE PROMISE  handling using ASYNC AWAIT  ;

//async await
//by using await infront of the function which is returning the promise the code will wait untill the promise is resolved then it save its result in the variable you have declared.
async function fetchData() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  console.log(data);
}
fetchData();

//NOTE CALL STACK , EVENT LOOP , CALLBACK QUEUE

console.log(1);
Promise.resolve().then(() => {
  console.log('promise');
}); //promsie stores in the microstask queue which have higher proirity then callback queue
console.log(3);
setTimeout(() => {
  console.log('timer');
}, 0);


//NOTE CONSTRUCTOR FUNCTION :
//we call constructor function using new keyword which is used to create a object instance using parameter ;

function Student(name , age, department){
    console.log(this)
    this.name = name ;
    this.age = age ;
    this.department = department;
}

const rahul = new Student('rahul', 20 , 'CSE');
console.log(rahul)

//new keyword role : 
//empty object {}
//this keyword set on this empty {} ;
