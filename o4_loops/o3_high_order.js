//map, filter and reduce are high order common functions

//for off loop they are array specific loop
const arr =[1,2,3,4,5,6]
//gives all the data variable as output
for (const num of arr) {
    console.log(num);   
}
const greetings="Hello World"
for(const greet of greetings){
    console.log(`earc char is ${greet}`);    
}
//maps
const map = new Map()
map.set('IN',"India")
map.set('fr',"France")

console.log(map)
// loop on map[map is a object in js which store  key-vakue pair] 
//takes unique value and  stores sequence
for (const [key,value] of map){
    console.log(key,':-',value)
} 

for (const [key] of map){
    console.log(key,':-')
} 
for (const [value] of map){
    console.log(':-',value)
} 
//iteration in objects cannot be done using forof loop
//object in general are not iteratable
const myObject ={
    'game1': "NFS",
    'game2': "Spiderman"
}
for (const [key] of myObject) {
    console.log(`${key},':-',,value`)
    
}












