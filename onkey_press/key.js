let box = document.querySelector(".box");
let display = document.querySelector(".display");

box.addEventListener("keypress", (e)=>{
    display.innerText =  e.key;
})