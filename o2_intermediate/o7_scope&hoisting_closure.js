//Scope
//hoisting
//{} curly braces in function is its scope 
//example
if (true){
    let a =10
const b= 20
var c = 30
}
//works fine console.log(a);
//works fine console.log(b);
//this show the result as 30 which should not be the case since its
// scope is set for the if statement only not outside of it 
console.log(c);
// statements outside the scope is called global scope 
// inside {} is called block scope
//scope in console and the scope is diffrent from scope in usinsg node env
//nested scope and closure 
function one(){
    const username ="srijan"
    function two(){
        const website ="youtube"
        //here srijan is printed since beacuse username is global scope for 
        //function two()  
        // it is called closure
        console.log(username);        
    }
    //it shows error here because the variable website scope is two only not
    //  globally
    //console.log (website);
    two()
}
one()

if (true){
    const username= "Srjian"
    if (username==="Srjian"){
        const website ="youtube"
        console.log(username + website);        
    }
    //error
    //console.log(website);
}
//error
//console.log(username);
//***********************************interesting********************************** */
console.log(addone(5))
function addone(num){
    return num +1
}
//this is a variable function also called{ {expression}
const addTwo= function(num){
    return num +2
}
addTwo(5)
//hoisting in js
//this does not allow the function to be called before it is declared incase of
//expression function