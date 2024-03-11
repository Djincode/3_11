let btn = document.getElementById("btn");

let icons = document.querySelectorAll("i");
console.log(icons)

btn.addEventListener("click", ()=>{
  btn.classList.toggle("active")

    document.body.classList.toggle("dark")
    for(let i = 0; i<icons.length;i++)(
        icons[i].classList.toggle("dark-i")
    )
})




