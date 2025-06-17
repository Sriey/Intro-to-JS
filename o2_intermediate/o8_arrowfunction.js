//arrow function
const user={
    username:"srijan",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}
user.welcomeMessage();
user.username="sam"
//here the context was changed
user.welcomeMessage()
//here node is referring to empty object where as in browser it shows window object
console.log(this)
//but for node inside a function has many object 
function chai(){
    console.log(this);
}
/*- "chai()" is like a house with no owner. If you walk in and ask,
 "Who owns this?" the answer is, "The neighborhood!"—or in JavaScript terms, 
 the global object (window in browsers, global in Node.js).
- "code()" is like a house where someone forgot to register their name as the
 owner. Inside, there's a note saying "let username = 'srijan';", but it's 
  sitting there—it’s not officially tied to the house. So when you ask, "Who
   lives here?" JavaScript looks around, shrugs, and says, "I don’t know…undefined."
*/
chai()
function code(){
    let username = "srijan"
    //here this does not give global because it is not sure what is correct for it
    console.log(this.username)
}
code()

const chaiOne = () => {
    let username="hitesh"
    //global obect
    console.log(this);
}
chaiOne()
//  arrow function

const addtwo = (num1,num2) => {
    return num1+num2;
}
console.log(addtwo(3,4));
//implicit return or not directly returned
const addThree= (num1,num2,num3)=> num1+num2+num3
//can also be writeen using parenthesis
//const addThree= (num1,num2,num3)=> (num1 + num2 + num3)
//here we donot have to user return keyword
console.log(addThree(345))
const add = (num1,num2) => ({username:"srijan"})
console.log(add(3,4));



