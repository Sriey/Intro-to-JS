const clock =document.getElementById('clock')



console.log(DataTransfer.toLocaleTimeString());

setInterval(function(){
    let date = new Date()
    clock.innerHTML=date.toLocaleString();
} ,1000);

 ty