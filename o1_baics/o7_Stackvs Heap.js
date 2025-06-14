/*Stack is used for primitive  datatype 
Heap used (Non primitive)
Excalidraw a visualizatio site

*/
let myName = " Srijan Pandey"
let anotherName = myName
//during this execution copy of this data 
//was given for change not the actual value
anotherName= "Chai"
console.log(anotherName);
console.log(myName);
let userOne ={
    email:"user@google.com",
    upi: "eser@ybl"
}
let userTwo = userOne
userTwo.email="srijanpandey07@gmail.com"
console.log(userOne);