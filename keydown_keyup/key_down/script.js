let btn = document.getElementById("btn");
let display = document.getElementById("display");

btn.addEventListener("keydown", (e)=>{
    display.style.backgroundColor = "red";
})

btn.addEventListener("keyup", (e)=>{
    display.style.background = "green";
})