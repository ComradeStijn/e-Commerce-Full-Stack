let slideIndex = 0;
showSlide(slideIndex);

const nextEle = document.querySelector(".next");
const prevEle = document.querySelector(".prev");

nextEle.addEventListener("click", () => incrementSlide(1));
prevEle.addEventListener("click", () => incrementSlide(-1));

function incrementSlide(i) {
  slideIndex += i;

  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlide(slideIndex);
}

const dots = document.querySelectorAll(".dots");

dots.forEach((dot) =>
  dot.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);
    showSlide(id);
    slideIndex = id;
  })
);

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[n].style.display = "flex";
  dots[n].classList.add("active");
}

window.addEventListener("load", () => {
  setInterval(() => incrementSlide(1), 10000);
});
