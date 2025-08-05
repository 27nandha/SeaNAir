const toggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

// Toggle the menu on burger click
toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
});

// Close the menu when any nav link is clicked
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    toggle.classList.remove("show-icon");
  });
});
