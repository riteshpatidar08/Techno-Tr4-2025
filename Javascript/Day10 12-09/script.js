//user enter movie name into the input field;
//when you click on the search button , your form going to be submit ;

//task 1 select the form and input field
const form = document.getElementById('form');
const inputSearch = document.getElementById('search');
const btn = document.getElementById('btn')
//add event on the form and get the value from the field
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchQuery = inputSearch.value;
  console.log(searchQuery);
btn.textContent = 'Searching....'
  fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=b0eec689`)
    .then((res) => res.json())
    .then((data) => console.log(data)).catch(err=> conosle.log(err))
    .finally(()=>{
        btn.textContent = 'Search'
    })
});
