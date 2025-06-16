 //array 
 const myArr =[0,1,2,3,4,5]
 const myHeros = ["shaktiman","Nagraj"]

 const myArr2 = new Array(1,2,3,4,5)
 console.log(myArr2);
 //Methods in array
 myArr.push(6)
 console.log(myArr);
 myArr.pop()

 myArr.unshift(9)
 myArr.shift()

 console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
// negative value because it is not in the array
 const newArray = myArr.join()
 console.log(typeof newArray);
 console.log(myArr)
// //slice and splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 =myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);



