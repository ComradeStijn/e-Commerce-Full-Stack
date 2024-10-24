const navBar = document.querySelector("#nav");
const heroImage = document.querySelector("#hero-img-container");
const heroTitle = document.querySelector(".hero-main-title");

function addClassOnLoad(elements, className) {
  window.addEventListener('load', () => {
    // Prevent animations from playing whilst webpage is being loaded in background and not visible
    if (document.visibilityState === 'visible') {
      elements.forEach(element => {
        element.classList.add(className);
      });
    } else {
      // Listen for visibility change and trigger animations when the page becomes visible
      document.addEventListener('visibilitychange', function onVisibilityChange() {
        if (document.visibilityState === 'visible') {
          elements.forEach(element => {
            element.classList.add(className);
          });
          document.removeEventListener('visibilitychange', onVisibilityChange); // Clean up listener
        }
      });
    }
  });
}

addClassOnLoad([navBar, heroImage, heroTitle], 'is-visible');