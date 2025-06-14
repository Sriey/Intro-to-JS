// Primitive and non primitive (based on the call by value
//  or call by reference) 
//js is dynamically typed
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(anotherId == id);
//
const heros = ["shaktiman","naagra","Doga"];
let myObj= {
    name:"srijan",
    age: 22,
}
const myFunction =function(){
    console.log("Hello my love");
}
console.log(typeof myFunction);
