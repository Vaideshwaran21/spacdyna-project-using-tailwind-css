const navbar = document.getElementById("navbar");
const navIcon = document.getElementById("nav-icon");
const crossMark = document.getElementById("crossMark");
const bars = document.getElementById("bars");
navIcon.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  navIcon.classList.toggle("hidden");
  crossMark.classList.toggle("hidden");
});
crossMark.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  navIcon.classList.toggle("hidden");
  crossMark.classList.toggle("hidden");
});
