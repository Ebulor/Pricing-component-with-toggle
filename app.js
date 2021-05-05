const toggle = document.querySelector(".toggle input");
toggle.addEventListener("click", () =>{
    
    const monthly = document.querySelectorAll(".monthly");
    const annually = document.querySelectorAll(".annually");

    if(toggle.checked === true) {
        for (var i = 0; i < monthly.length; i++) {
            monthly[i].style.display = "block";
            annually[i].style.display = "none";
        }
    }

    else {
        for (var i = 0; i < annually.length; i++) {
            monthly[i].style.display = "none";
            annually[i].style.display = "block";
        }
    }
})