// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});

// Our Partner
var swiper = new Swiper(".our-partner", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});

gsap.registerPlugin(ScrollTrigger);

// Define the animation for the About section
gsap.to(".about_wrapper", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".about_wrapper",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

// Define the animation for the Rooms section
gsap.to(".rooms_wrapper", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".rooms_wrapper",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

// You can add more ScrollTrigger animations as needed

gsap.registerPlugin(ScrollTrigger);

// Define the animation for the Services section
gsap.to(".services_wrapper", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".services_wrapper",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

gsap.registerPlugin(ScrollTrigger);

// Define the animation for the Team section
gsap.to(".team_wrapper", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".team_wrapper",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

// Define the animation for the Gallery section
gsap.to(".gallery_wrapper", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".gallery_wrapper",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

gsap.registerPlugin(ScrollTrigger);

// Define the animation for the Pricing section
gsap.to(".price_wrapper", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".price_wrapper",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

// Define the animation for the Blog section
gsap.to(".blog_wrapper", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".blog_wrapper",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});
