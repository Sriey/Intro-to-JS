//if statement
//for evaluation for true or false we use 
const isUserLoggedIn=true
//comparison operator < lessthen,
// >greater then,<=greaterthen or equal ,
// >=less than or euqal ,== equal 
// === check equality with datatype
//!=
//!== check if the var not equal in value or type
if (true){
   console.log("logged in");
   
}
else{
    console.log("not logged in")

}
const balance =1000
//usually implicit notation is not prefferred
if (balance>500) console.log("test"),console.log("test2");
//multiple condition
if (balance < 500 ){
    console.log("less then");  
}else if (balance<750){
    console.log("less than 750");
}else {
    console.log("less than 1200");   
}
const userLoggedIn = true
const debitcard = true
const loggedInGmail
if (userLoggedIn && debitcard && 2==2) {   
}
if (loggedInGmail || loggedInGmail) { }

// && and || are logical operator
//Nulsidh coaleshing operator(??): null undefined

let val1;
val1= 5 ?? 10
//this coalesh function checks the safety of a variable 
//this function as such thatit chooses the first end point of the value
val1 = null ?? 10
console.log(val1);
let val2 = undefined ?? 15
val1 = null ?? 10 ?? 20

//terniary operator
const iceTeaPrice= 100
iceTeaPrice>= 80 ? console.log("less 80") : console.log("morethan");

