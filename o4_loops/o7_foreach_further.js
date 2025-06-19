const coding =[1,2,3,4,5]
/*
const values = coding.forEach((item)=> {
    console.log(item);
    return item   
}) for each do not return value on its own for a open scope
this gives undefined value because forEach it is not returning any value */
const myNum =[1,2,3,4,5,6,7,8,9,10]
const newNums=myNum.filter((num )=>{// remember if we open a scope{} we need to return 
    //otherwise it will not work as intended 
    return num > 4})
//console.log(newNums);
// filter returns values for in function scope
const ne =[]
myNum.forEach((num)=> {
    if (num>4){
        ne.push(num)
    }
})
console.log(ne);
// let userBooks = books.filter((bk)=> bk.genere ==="History")
// console.log(userBooks);

// let  userBooks= books.filter((bk)=>{
//     return bk.publish >= 2000 && bk.genre ==="History"})
// console.log(userBooks);

//
const myNumbers =[1,2,3,4,5,6,7,8,9,10]
const newn =myNumbers.map ((num)=>{return num +10})

//chianing in map filter etc 1st one number goesthrough .map 1 then goes to .map2 
//means here  11 is output for 1 then  2 is processed 
const newnum= myNumbers
.map((num)=> num *10)
.map((num)=>num +1 )
// prints 11 21 and so on
console.log(newnum);

//reduce high order function
const n=[1,2,3,4,5]
const total=n.reduce(function(acc,currval){
    console.log(`acc ${acc} and currval:${currval}`)
    return acc + currval
},0)// starts with zero because zero is declared here in the end
console.log(total);
//this  is implicit representation of reduce
const ntotal =n.reduce((acc, currval)=>acc +currval,0)
console.log(ntotal);

//shopping cart
const shoppingCart=[
    {
        itemName:'laptop',
        price:2999
    },
        {
        itemName:'pc',
        price:4999
    },
    {
        itemName:'house',
        price:5999
    },

]
const totalPrice=shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(totalPrice);
