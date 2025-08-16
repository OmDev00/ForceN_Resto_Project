// 1. Smooth scroll vers sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 2. Animation logo au chargement
window.addEventListener("load", () => {
  const logo = document.querySelector(".logo-animated");
  logo.style.opacity = "0";
  setTimeout(() => {
    logo.style.opacity = "1";
    logo.style.transition = "opacity 1s ease";
  }, 300);
});

// 3. Slider automatique Plats Phares
const platsContainer = document.querySelector(".plats-container");
let scrollAmount = 0;
setInterval(() => {
  if (platsContainer.scrollLeft + platsContainer.clientWidth >= platsContainer.scrollWidth) {
    platsContainer.scrollLeft = 0;
  } else {
    platsContainer.scrollLeft += 300;
  }
}, 3000);
