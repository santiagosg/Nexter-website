const sidebar__toggle = document.querySelector(".sidebar__toggle");
const sidebar__menu = document.querySelector(".sidebar__menu");

//Toggle Menu
sidebar__toggle.addEventListener("click", function () {
  sidebar__menu.classList.toggle("sidebar__menu--show");
});
