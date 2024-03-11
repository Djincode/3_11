const openbutton = document.querySelectorAll(".openbtn");

for(let i =0; i<openbutton.length; i++){
    openbutton[i].addEventListener("click", ()=>{
        let modal = document.querySelector(".modal-container");
        modal.classList.toggle("active")
    })
}


const closebtn = document.querySelector(".close-btn");

closebtn.addEventListener("click", ()=>{
    let modal = document.querySelector(".modal-container");
    modal.classList.toggle("active");
})

