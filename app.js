const toggle = document.querySelector(".toggle input");
toggle.addEventListener("click", () =>{
    const x = document.querySelector(".toggle-text-1");
    if (x.innerHTML === "$199.99") {
        x.innerHTML = "$19.99";
      } else {
        x.innerHTML = "$199.99";
      }
    const y = document.querySelector(".toggle-text-2");
    if (y.innerHTML === "$249.99") {
        y.innerHTML = "$24.99";
      } else {
        y.innerHTML = "$249.99";
      }
    const z = document.querySelector(".toggle-text-3");
    if (z.innerHTML === "$399.99") {
        z.innerHTML = "$39.99";
      } else {
        z.innerHTML = "$399.99";
      }
})