const navBar = document.querySelector("#nav");
const heroImage = document.querySelector("#hero-img-container");
const heroTitle = document.querySelector(".hero-main-title");

function addClassOnLoad(elements, className) {
  window.addEventListener("load", () => {
    elements.forEach(element => {
      element.classList.add(className);
    })
  })
}

addClassOnLoad([navBar, heroImage, heroTitle], 'is-visible');