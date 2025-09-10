//NOTE METHOD 2 document.getELementsByClassName ;

const paragraphs = document.getElementsByClassName('para');

console.log(paragraphs)
//array 
const arrayConversion = [...paragraphs];
console.log(arrayConversion)

//NOTE get element by id 
const introduction = document.getElementById('intro');
console.log(introduction) ;

//NOTe querySelector 
//NOTE only returns firstmatching element as per the selector you have passed in the method
const p1 = document.querySelector('.para');
console.log(p1)

//NOTE QUERYSELECTORALL

const  newpara = document.querySelectorAll('.para');
console.log(newpara)
//note forEach method is available for nodelist not in the html collection queryselectorall return a nodelist while getElementsByclassName and tagName returns htmlCOllection
newpara.forEach((el)=>{
    console.log(el.textContent)
})