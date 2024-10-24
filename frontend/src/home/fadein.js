const navBar = document.querySelector("#nav");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classlist.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  treshold: 0.1
})

observer.observe(navBar);