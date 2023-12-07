let theme = document.querySelector("#darkLight");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
theme.addEventListener("click", function () {
  //   body.style.background = "#212121";
  if ((body.style.background !== "white")) {
    body.style.background = "white";
    h1.style.color = "black";
    theme.setAttribute("class", "fa-solid fa-moon")
    
} else {
    body.style.background = "#212121";
    h1.style.color = "white";

  }
});
