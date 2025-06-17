//ImmediatelyInvoked Function Expression
//this is used to remove pollution of variable caused by the global variable and scope
(function chai() {
    console.log(`DB connected`);
})();
//to end the scope of IIFE we use; it is  a must to do 

( (name) => {
    console.log(`DB connected two ${name}`);
    
})('srijan')
