//date
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
//
let myDateIn = new Date("2023-01-14")
let myDateOn = new Date("14-01-2023")
//
let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//in second can be converted using below
console.log(Math.floor(Date.now()/1000)); 
// mtd
let myNewDate =new Date();
console.log(myNewDate);
console.log(myNewDate.getDay());
console.log(myNewDate.getMonth() + 1);
// important is local String
myNewDate.toLocaleString('default',{
    weekday: "long",

})







