const nav = document.querySelector("nav");
const burger = document.querySelector(".nav__burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
