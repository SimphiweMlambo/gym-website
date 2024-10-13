const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

// const swiper = new Swiper(".swiper", {

//   pagination: {
//     el: ".swiper-pagination",
//   },
// });



// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  // Define the number of slides visible at the same time
  slidesPerView: 1,
  
  // Enable looping of slides
  loop: true,
  
  // Enable pagination (dots below the slider)
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allows users to click the pagination dots to navigate
  },

  // Enable autoplay feature
  autoplay: {
    delay: 3000,  // Delay between transitions in milliseconds (3 seconds)
    disableOnInteraction: false,  // Keeps autoplay even if user interacts with the slider
  },
  
  // Enable some smooth transition between slides
  speed: 600,  // Transition speed (in milliseconds)
});





// js script for to show active-ness on the navbar to indicate which page the user is on at the moment(links)

document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});
