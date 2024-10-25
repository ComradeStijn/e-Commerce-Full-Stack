const navBar = document.querySelector("#nav");
const heroImage = document.querySelector("#hero-img-container");
const heroTitle = document.querySelector(".hero-main-title");

function addClassOnLoad(elements, className) {
  window.addEventListener("load", () => {
    // Prevent animations from playing whilst webpage is being loaded in background and not visible
    if (document.visibilityState === "visible") {
      elements.forEach((element) => {
        element.classList.add(className);
      });
    } else {
      // Listen for visibility change and trigger animations when the page becomes visible
      document.addEventListener(
        "visibilitychange",
        function onVisibilityChange() {
          if (document.visibilityState === "visible") {
            elements.forEach((element) => {
              element.classList.add(className);
            });
            document.removeEventListener(
              "visibilitychange",
              onVisibilityChange
            ); // Clean up listener
          }
        }
      );
    }
  });
}

addClassOnLoad([navBar, heroImage, heroTitle], "is-visible");

const productElements = document.querySelectorAll(".product");
const footerElement = document.querySelector('footer');
const sliderElement = document.querySelector('.slide-container');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
  }
);

productElements.forEach(element => observer.observe(element));
observer.observe(footerElement);
observer.observe(sliderElement);