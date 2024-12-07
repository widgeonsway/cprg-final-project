"use strict";
//Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-home");
//keep the copyright year accurate
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
