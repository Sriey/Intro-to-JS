/*singleton in case of constructor created using
Object.create*/
//object literalss 
const mySym = Symbol("key1")
const JsUser ={
    name: "Srijan",
    "full name":"Srijan Pandey",
    age:"18",
    [mySym]:"mykey1", 
    email: "srijan@google.com",
    isLoggedIn:"false",
    lastLoginDays:["Monday","Saturday"]
}
//access object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
//symbols are accesed and written using brackets otherwise
//they are not shown as symbol datatype
console.log(typeof JsUser[mySym]);
JsUser.email="Srijan@yahoo.com"
//this wil make it so that further changes are not applied this is
// is called lock on object
//Object.freeze(JsUser)
JsUser.email="srijan@akamai.com";
console.log(JsUser);
//we had to remove freeze from object so that the new function can be entered in object
//otherwise it will just show undefined function
JsUser.greeting = function(){
    console.log("hello Js USer");
}
console.log(JsUser.greeting());
//this will give a function return back just send reference of the function
//cosnosle.log(JsUser.greeting);
//to reference name in a object 
//to refer to same obect (this) keyword is used
JsUser.greetingTwo = function(){
    console.log(`hello Js USer,${this.name}`);
};
console.log(JsUser.greetingTwo());
