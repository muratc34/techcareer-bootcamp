const navMenuBtn = document.querySelector(".navbar-btn");
const navMenu = document.querySelector(".navbar-menu");

navMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});