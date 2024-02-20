gsap.registerPlugin(ScrollTrigger);

// Define the animation for the About section
gsap.to(".top-banner", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".top-banner",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

// Define the animation for the Rooms section
gsap.to(".about-section", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

// You can add more ScrollTrigger animations as needed

gsap.registerPlugin(ScrollTrigger);

// Define the animation for the Services section
gsap.to(".story-section", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".story-section",
    start: "top bottom-=100",
    end: "bottom center-=100",
    toggleActions: "play none none reverse",
  },
});

gsap.registerPlugin(ScrollTrigger);
