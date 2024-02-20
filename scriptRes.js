// scripts.js
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    navMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        document.querySelector("header").classList.add("scroll-header");
    } else {
        document.querySelector("header").classList.remove("scroll-header");
    }
});
