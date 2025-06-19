// we usually use forin loop for extration and iteration in case of objects
const myObject ={
    js : "javascript",
    cpp : 'C++',
    rb :'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    console.log(`${myObject[key]}'s  file extenstion is ${key}`);
    }
    
const arr=["js", "cpp","rb","java","py"]
for (const i in arr) {
   console.log(arr[i]);
   
    }
//forof loop takes the value directly whereas forin key takes key instead of value
//map is not iteratable