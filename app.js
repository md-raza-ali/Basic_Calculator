let theme = document.querySelector("#darkLight");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let input = document.querySelector("input");
theme.addEventListener("click", function () {
  if (body.style.background !== "white") {
    body.style.background = "white";
    h1.style.color = "#212121";
    input.style.color = "#212121";
    theme.setAttribute("class", "fa-solid fa-moon");
    body.style.transition = "0.4s ease-in-out";
    h1.setAttribute("class", "trans");
  } else {
    body.style.background = "#212121";
    h1.style.color = "white";
    input.style.color = "white";
    theme.setAttribute("class", "fa-solid fa-sun");
  }
});
