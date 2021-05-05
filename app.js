const toggle = document.querySelector(".toggle input");
toggle.addEventListener("click", () =>{
    
  var toggleText = document.querySelector(".toggle-text-1");
  var text = document.querySelector(".text-1");
  if (toggle.checked == false){
    toggleText.style.display = "block";
    text.style.display = "none";
  } else {
     toggleText.style.display = "none";
    text.style.display = "block";
  }
})