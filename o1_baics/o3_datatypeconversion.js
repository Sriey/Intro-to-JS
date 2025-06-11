let score =33
//let score ="33" for this the output for below will be of string
console.log(typeof score);
console.log(typeof (score));

let valueInNumber =Number(score)
console.log(typeof score);
let score1 ="33abc"

let valueInNummber1= Number(score1);
console.log(typeof score);
console.log(valueInNummber1);
//this gives NaN(not a number output)  but it still shows that its been converted into a Number 
//for the  let score = undeinef and null the values printed are NaN and 0 respectively
//for boolean we get 0,1 based on false,true and vice versa
//for string the output is NaN since it cann't be converted into a number
let isLoggedIn = "Srijan";
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//for "" string the value for boolean is false but for "Srijan" is true