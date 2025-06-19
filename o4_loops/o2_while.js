//initialization
let index =0
while (index<=10) {
    console.log(`value of index is ${index}`)
    index =index +2 // incremnet to terminate the loop
}
//making a termination statement is compulsary or else it will be stuck in infinity
let myArrray =["flash", "batman","superman"]

let arr = 0
while ( arr < myArrray.length){
    console.log(`value is ${myArrray[arr]}`)
    arr = arr + 1
}
//do while loop
//here 1st the code is run then it is checked for if it is 
// statisfying the condition or not
//so at least code is run once
let Score =11
do {
console.log(`Score is ${Score}`)
 Score ++;
}while(Score <=10)