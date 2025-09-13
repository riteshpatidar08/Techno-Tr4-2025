//NOTE UPDATED way TO WRITING A OBJECT (ENHANCED OBJECT LITERAL);
const firstname = 'RAHUL' 
const user = 'age' ;
const details = {
    firstname , //key and value are same
    [user] : 23, //computed key name 
    intro  : function(){
        console.log(this.firstname)
    },
    intro1(){
        console.log(this.firstname) //new way of writing methods 
    }
}
console.log(details)
console.log(details.intro1())
//computed key names ;

//ES6 classes 
//when we call the Person class using new keyword the inbuilt constructor get automatically call and create a new object instance
class Person{
    constructor(name){
        this.name = name
    }
    getDetails(){
        console.log(`my name is ${this.name}`) //classes directly save methods on the prototype property of the  class which going to directly shared by all the instance made by person class
    }
}

const rahul = new Person('rahul');
const ram = new Person('ram');
console.log(rahul.getDetails())


//Private properties and methods in the classes :

class User{
    #id ; //id going to be a private property
    constructor(id,department){
        this.#id = id ;
        this.department = department ;
    }
    get getId(){
        console.log(this.#id)
    }
    set updateId(id){
        this.#id = id
    }
}
const Jonas = new User(34,'cse');
// console.log(Jonas.#id) //gives error we cannot access the private property directly
// console.log(Jonas.department)
Jonas.getId //getter ,setter methods called as a property name not as a function
Jonas.updateId = 5;
Jonas.getId

//NOTE how to access the private field outside of the class and modify 
// getters and setters //keyword get and set