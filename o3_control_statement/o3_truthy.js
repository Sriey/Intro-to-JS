const userEmail = "srijan.com"
if (userEmail) {
    console.log("got user email");
    
}else {
    console.log("don't have user email");
}
//falsy value :- false,0,-0,0n,"",null,undefined,NaN
//turuthy value eg "0" is truthy value [],{},function(){},xcept all other 

if (userEmail.length===0)  {    
console.log("array is empty");
}
if (Object.keys(emptyob)) {
console.log("object is empty");
}
// false==0 is true
// 0 ="" true 
// false= "" is also true