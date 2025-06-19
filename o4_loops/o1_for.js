

for (let i = 0; i <= 10; i++) {
    const element = i; 
    if (element== 5){
        console.log("5 is the best number")
    }
    console.log(element);
}
//element is within the  scope of the loop so not 
// accessible outside

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j}and inner loop ${i}`);
        console.log(i +'*'+j+'='+i*j);
        
    }
    
}
const myArr  =["flash","batman","superman"]
console.log(myArr.length)
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);  
}
//break and continue in loops
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log('detected 5 ')
        break;
    }
    console.log(`value of i is ${index}`)  

}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log('detected 5 ')
        continue;
    }
    //skips one single  condition and moves forward
    //like here it skips the  print of 5 
    console.log(`value of i is ${index}`)  
}
