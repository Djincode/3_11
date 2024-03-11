let accordion = document.querySelectorAll(".contentbox");
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener("click", (e)=>{
        e.currentTarget.classList.toggle("active")
    })
}