# projects related to DOM
## projecty link
[Click Here] ()

# solution
##project 1

```javascript
console.log("Project 1");
const buttons = document.querySelector('.button')
const body = document.querySelector("body")
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if (e.target.id==="grey") {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==="yellow") {
            body.style.backgroundColor=e.target.id;
        }if (e.target.id==="blue") {
            body.style.backgroundColor=e.target.id;
        }if (e.target.id==="white") {
            body.style.backgroundColor=e.target.id;
        }
    });
});


```
#solution 2
```javascript
console.log("Project 2")
```