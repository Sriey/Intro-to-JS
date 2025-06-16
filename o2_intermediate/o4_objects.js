//non singleton object
const tinderUser = {}
tinderUser.id="123ae"
tinderUser.name="Srijan"
tinderUser.isLogggedIn= false
const regularUser= {
    email: "Srijnapandey@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Srijan",
            lastName: "Pandey"
        }    }
} 
//console.log(regularUser.fullname.userFullname.lastName);
//combination of object
const obj1 ={1: "a", 2: "b"}
const obj2 ={3:"c",4:"d"}
const obj3 ={ obj1 , obj2}
console.log(obj3);
//this create a problem of object within a object
const obj4=Object.assign({},obj1,obj2)
//this merges the two object  returnedTarget = Object.assign(target,source)
//for multiple array we add {empty object} that will asc as source
console.log(obj4);
const obj5 = {...obj1,...obj2};
console.log(obj5);
//general data from site is array of multiple objects

const user=[
    {
        id :1,
        email: "srijan",
    },
    {
        id :2,
        email: "sri",
    }   
]
//since user has multiple object we can use . to acces one of the property
user[1].email
console.log(tinderUser)
//this gives the datatupe of the keyes in array format
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// it check for the presence of the asked property for the object
console.log(tinderUser.hasOwnProperty('isLogggedIn'));




