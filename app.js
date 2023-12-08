let theme = document.querySelector("#darkLight");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let input = document.querySelector("input");
theme.addEventListener("click", function () {
  if (body.style.background !== "white") {
    body.style.background = "white";
    h1.style.color = "black";
    input.style.color = "#212121";
    theme.setAttribute("class", "fa-solid fa-moon");
  } else {
    body.style.background = "#212121";
    h1.style.color = "white";
    theme.setAttribute("class", "fa-solid fa-sun");
  }
});
