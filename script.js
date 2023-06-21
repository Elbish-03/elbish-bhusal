const introText = document.querySelector(".intro-text");
const descText = document.querySelector(".description");
const mySkills = document.querySelector(".skill-title");

const intro = "Hi, I'm Elbish!";
const skillTitle = "My Skills";
const desc =
  "\n I am a web developer and specialize in backend development. I'm still on my way!";

const chars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ":",
  ";",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let introCounter = 0;
let descCounter = 0;
let introIntervalId, descIntervalId;

function scrambleIntro() {
  introIntervalId = setInterval(() => {
    let scrambledText = "";
    for (let i = 0; i < intro.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      scrambledText += chars[randomIndex];
    }
    introText.innerText = scrambledText;
  }, 50);
}

function scrambleSkillTitle() {
  introIntervalId = setInterval(() => {
    let scrambledText = "";
    for (let i = 0; i < intro.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      scrambledText += chars[randomIndex];
    }
    mySkills.innerText = scrambledText;
  }, 50);
  setTimeout(() => {
    clearInterval(skillIntervalId);
    mySkills.innerText = skillTitle;
  }, 5000);
}

function scrambleDesc() {
  descIntervalId = setInterval(() => {
    let scrambledText = "";
    for (let i = 0; i < desc.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      scrambledText += chars[randomIndex];
    }
    descText.innerText = scrambledText;
  }, 50);
}

function stopScramble() {
  clearInterval(introIntervalId);
  clearInterval(descIntervalId);
  introText.innerText = intro;
  descText.innerText = desc;
  descText.style.display = "block"; // show description text
}

scrambleIntro();
setTimeout(() => {
  stopScramble();
  scrambleDesc();
}, 2000);
setTimeout(stopScramble, 3000);

// Carousel

window.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const slides = Array.from(
    carouselContainer.querySelectorAll(".carousel-slide")
  );
  const prevBtn = carouselContainer.querySelector(".carousel-prev");
  const nextBtn = carouselContainer.querySelector(".carousel-next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function goToPrevSlide() {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    event.preventDefault();

    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener("click", goToPrevSlide);
  nextBtn.addEventListener("click", goToNextSlide);

  showSlide(currentIndex);
});

const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", function () {
  navLinks.classList.toggle("show-nav-links");
});
