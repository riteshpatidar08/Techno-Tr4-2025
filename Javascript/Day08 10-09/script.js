// //NOTE METHOD 2 document.getELementsByClassName ;

// const paragraphs = document.getElementsByClassName('para');

// console.log(paragraphs);
// //array
// const arrayConversion = [...paragraphs];
// console.log(arrayConversion);

// //NOTE get element by id
// const introduction = document.getElementById('intro');
// console.log(introduction);

// //NOTe querySelector
// //NOTE only returns firstmatching element as per the selector you have passed in the method
// const p1 = document.querySelector('.para');
// console.log(p1);

// //NOTE QUERYSELECTORALL

// const newpara = document.querySelectorAll('.para');
// console.log(newpara);
// //note forEach method is available for nodelist not in the html collection queryselectorall return a nodelist while getElementsByclassName and tagName returns htmlCOllection
// newpara.forEach((el) => {
//   console.log(el.textContent);
// });

// //ACCESSING THE VALUES OF THE ELEMENT :

// // console.dir(introduction)

// //text accessing properties textContent , innerText , innerHtml

// console.log(document.body.textContent); //donot compute any css or js directly give the result
// console.log(document.body.innerText);
// console.log(document.body.innerHTML);

// console.log(introduction.textContent);
// //update the text

// introduction.textContent = 'this is updated text';
// introduction.innerText = '<p>hello</p>'; //donot work
// introduction.innerHTML = '<p>hello</p>'; //when you want to insert html directly in the selected element

// // task div id='container'> <h1>name</h1> <p>email</p> </div>

// const container = document.getElementById('container');
// container.innerHTML = `<h1>TEST</h1><p>test@gmail.com</p>`;

//NOTE UPDATE ANCHOR TAG HREF
const link = document.getElementById('link');
link.href = 'https://www.blinkit.in';
link.innerText = 'BLINKIT';

//NOTE UPDATING IMAGE SRC
const image = document.getElementById('img');
console.dir(image);
image.src = 'https://placehold.co/600x400';

const h2 = document.getElementById('heading_second');
console.log(h2.className);
// h2.className = 'test'
console.log(h2.classList);
h2.classList.add('test');
h2.classList.remove('head2');

//NOTE GETTING AND SETTING ATTRIBUTES ON AN ELEMENT  :
console.log(h2.getAttribute('id')); //use to get the value of specific attribute

//NOTE SETTING A NEW ATTRIBUTE ON AN ELEMENT
h2.setAttribute('title', 'this is heading');
h2.setAttribute('style', 'background-color:red');

//applying style
h2.style.color = 'orange';
h2.style.fontSize = '60px';

//NOTE CREATING NEW ELEMENTS USING JS

const b = document.createElement('b');
console.log(b);
//text fill
b.textContent = 'bold';
document.body.prepend(b);
//NOTE append add in the  end //prepend add in the start

//create a list and insert 3 li in the list using js

const list = document.createElement('ul');
console.log(list);
list.innerHTML = '<li>item1</li><li id=item_2>item2</li><li>item3</li>';

document.body.append(list);

//next insert new li between item1 and item2

//insertBefore(newElement , referenceElement) apply on parent
const li = document.createElement('li');
const referenecLi = document.getElementById('item_2');
li.textContent = 'new added list item';
list.insertBefore(li, referenecLi);

li.remove(); //the element which you have to delete directly select the element an call the remove method.
list.removeChild(referenecLi); //remove child inside parent
