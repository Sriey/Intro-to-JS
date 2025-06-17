//function
function sayMyName(){
console.log("s");
console.log("r");
}
sayMyName();
//here number1 and number 2 are parameters
function addTwoNumber(number1,number2){
    console.log(number1 +number2)
}
//here while giving the arguments to the if we give string such as "4" 
//the output is 34
//function output can be stored in a variable
const result = addTwoNumber(3,4)
console.log(result);
// this gives undefined value brcause because nothing was returned from the function 
function addThree(number1,number2,number3){
    let resul =number1+number2+number3;
    return resul;
    /// once a return is already made in the function will not execute steps after it 
    //this is unreachable code
    //console.log(resul);
    
}
const resul =addThree(1,2,3)
console.log(resul);

function loginUserMessage(username){
    if (!username){
        console.log("PLS enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Srijan"));
//function with object and array
//here ... is used to add multiple arguments for the parameter in an arrray
function calculateCartPrice(val1,val2,...num1){
    return num1
}
//now the value of 200 goees to val1 ,300 to val2 and then 500, 500000 to array num1
console.log(calculateCartPrice(200,300,500,500000))
//handel object
const User ={
    username: "srijan",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price name is ${anyobject.price}`)
}
//passing compulsary object is  a must
handleObject(User);
handleObject({
    username: "sam",
    price : 399
})

const myNewArray =[200,400,100,600];
function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));



