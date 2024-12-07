"use strict";
//keep the copyright year accurate
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
//mobile
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

//Bisky's carousel
const carouselWrapper = document.querySelector(".carousel-wrapper");
const rightButton = document.querySelector(".btn--right");
const leftButton = document.querySelector(".btn--left");
const originalContent = carouselWrapper.innerHTML;
// getting the original color from the css
const originalColor = window.getComputedStyle(carouselWrapper).backgroundColor;
const biskyBirthdate = new Date("2023-12-02");

const colors = [
  "#8e8dbe",
  "#968dba",
  "#9e8db6",
  "#a68db2",
  "#ae8dad",
  "#b68da9",
];

let currentIndex = -1; //need to start at -1 so that the original html message is there
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

function biskyAge() {
  const now = new Date();
  const years = now.getFullYear() - biskyBirthdate.getFullYear();
  const months = now.getMonth() - biskyBirthdate.getMonth();
  const days = now.getDate() - biskyBirthdate.getDate();

  let age = years;
  if (months < 0 || (months === 0 && days < 0)) {
    age -= 1;
  }
  return age === 1 ? "Bisky is 1 year old!" : `Bisky is ${age} years old!`;
}

const sentences = [
  "She was returned to the shelter by her previous owner.",
  "The shelter named her Lucy, but we named her Bisky",
  "Bisky for short, Biscuit for when she's in trouble",
  "She is very brave and working on becoming friends with my dogs",
  biskyAge(),
];

function updateCarousel(index) {
  // reset to original once over
  if (index >= sentences.length || index < 0) {
    carouselWrapper.style.backgroundColor = originalColor;
    carouselWrapper.innerHTML = originalContent;
    console.log("pee");
    currentIndex = -1;
    return;
  }

  const color = colors[index % colors.length];
  let sentence = sentences[index % sentences.length];
  if (sentence.includes("year old")) {
    sentence = biskyAge();
  }
  carouselWrapper.style.backgroundColor = color;
  carouselWrapper.innerHTML = `
    <div class="carousel-item">
      <p class="about-text">${sentence}</p>
    </div>
  `;
}
// forwards
rightButton.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex >= sentences.length) {
    currentIndex = -1;
  }
  updateCarousel(currentIndex);
});

// backwards
leftButton.addEventListener("click", () => {
  currentIndex -= 1;
  if (currentIndex < -1) {
    currentIndex = sentences.length - 1;
  }
  updateCarousel(currentIndex);
});
