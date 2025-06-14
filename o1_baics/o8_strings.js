const name="srijan"
const repoCount = 50
console.log(name+repoCount+"Value");
//String interpolation below
//we can also use methods with interpolated var
console.log(`Hello my name is ${name} and my
 repo count is  ${repoCount}`)
//declaration using js object new
const gameName= new String('Srijan');
//accessing using key
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString=gameName.substring(0,4)
console.log(newString);
//negative value can only be used in slice
const anotherString =gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "   Srijan   "
console.log(newStringOne.trim())
// trim docxx trimstart trim end
const url ="https://srijan.com/"
console.log(url.replace('%20','-'));
//string to array
console.log(url.includes('sundar'))
console.log(gameName.split('-'));



