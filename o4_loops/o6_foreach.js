const coding = [1,2,3,5,6,7,8]

coding.forEach(function (item){
   // console.log(item);
    
})
coding.forEach((item) => {
   // console.log(item);
    
})
//coding.forEach(printme)
coding.forEach((item, index, arr) => {
    console.log(item,index,arr);
    
})
// multiple object in arr

const myCoding =[
    {
        languageName:"javascript",
        languageFilename:"js"
    },
        {
        languageName:"C++",
        languageFilename:"cpp"
    },
        {
        languageName:"python",
        languageFilename:"py"
    } ,   {
        languageName:"java",
        languageFilename:"java"
    } , 
    {
        languageName:"r",
        languageFilename:".r"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);   
})
//mostly done in database in operation
