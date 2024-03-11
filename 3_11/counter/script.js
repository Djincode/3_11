let count = document.querySelector("span");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let num = 0;

up.addEventListener("click", ()=>{
      num ++;
      count.textContent = num;
      if(num>10){
        count.classList.add("green")
      }
      if(num>=0){
        count.classList.remove("red")
      }
})

down.addEventListener("click", ()=>{
    num --;
    count.textContent = num;
    if(num<11){
        count.classList.remove("green");

    }

    if(num<0){
        count.classList.add("red");
    }
})