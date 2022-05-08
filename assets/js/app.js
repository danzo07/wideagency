const menuBtn = document.querySelector(".menu-btn");
const slidemenu = document.querySelector(".box");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    slidemenu.classList.toggle("show");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    slidemenu.classList.remove("show");
  }
});

$(".sc-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
});

$(".grid-box-clone").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
});
//animation

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".animation-up",
  { y: 100, opacity: 0 },
  { duration: 1, y: 0, opacity: 1 }
);

gsap.fromTo(
  ".hero-img",
  { scale: 1.1 },
  {
    duration: 1.5,
    scale: 1,
    ease: "slow",
  }
);

gsap.fromTo(
  ".animation-up-2",
  { y: 200, opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".section-1",
      start: "-=300px",
    },
    duration: 1.5,
    y: 0,
    opacity: 1,
    ease: Power4.easeOut,
  }
);

gsap.fromTo(
  ".right-to-left",
  { opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".section-2",
    },

    duration: 2,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

//line animation
var tl = gsap.timeline({
  repeatDelay: 1,

  scrollTrigger: {
    trigger: ".section-3",
    start: "-=300px",
  },
});

tl.fromTo(
  ".ln-1",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl.fromTo(
  ".ln-2",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl.fromTo(
  ".ln-3",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl.fromTo(
  ".ln-4",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl.fromTo(
  ".ln-5",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".img-fade",
  { opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".section-4",
      start: "-=300px",
    },
    duration: 1,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".img-fade-up",
  { opacity: 0, y: 100 },
  {
    scrollTrigger: {
      trigger: ".section-ag-2",
    },
    duration: 1,
    opacity: 1,
    y: 0,
  }
);

var tl2 = gsap.timeline({
  repeatDelay: 0.1,
  scrollTrigger: {
    trigger: ".section-ag-3",
  },
});

tl2.fromTo(
  ".animation-up-3",
  { y: 100, opacity: 0 },
  {
    duration: 1,
    y: 0,
    opacity: 1,
  }
);

tl2.fromTo(
  ".animation-up-4",
  { y: 100, opacity: 0 },
  {
    duration: 1,
    y: 0,
    opacity: 1,
  }
);

//line animation
var tl3 = gsap.timeline({
  repeatDelay: 0.1,
  scrollTrigger: {
    trigger: ".section-ag-5",
  },
});

tl3.fromTo(
  ".ln-1",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl3.fromTo(
  ".ln-2",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl3.fromTo(
  ".ln-3",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl3.fromTo(
  ".ln-4",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl3.fromTo(
  ".ln-5",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl3.fromTo(
  ".ln-6",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

tl3.fromTo(
  ".ln-7",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

var tl4 = gsap.timeline({
  repeatDelay: 0.5,
  scrollTrigger: {
    trigger: ".section-ag-6",
  },
});

tl4.fromTo(
  ".up-1",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl4.fromTo(
  ".up-2",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl4.fromTo(
  ".up-3",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

tl4.fromTo(
  ".up-4",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl4.fromTo(
  ".up-5",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl4.fromTo(
  ".up-6",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

tl4.fromTo(
  ".up-7",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl4.fromTo(
  ".up-8",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl4.fromTo(
  ".up-9",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

//design
var tl5 = gsap.timeline({
  repeatDelay: 0.5,
  scrollTrigger: {
    trigger: ".section-ds-2",
  },
});

tl5.fromTo(
  ".up-ds-1",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl5.fromTo(
  ".up-ds-2",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl5.fromTo(
  ".up-ds-3",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-ds-4",
  { opacity: 0, y: 100 },
  {
    scrollTrigger: {
      trigger: ".section-ds-2",
      start: "-=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
  }
);

gsap.fromTo(
  ".animation-up-5",
  { opacity: 0, y: 100 },
  {
    scrollTrigger: {
      trigger: ".section-ds-3",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
  }
);

var tl6 = gsap.timeline({
  repeatDelay: 0.5,
  scrollTrigger: {
    trigger: ".section-ds-4",
    start: "-=500px",
  },
});

tl6.fromTo(
  ".up-4-1",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl6.fromTo(
  ".up-4-2",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl6.fromTo(
  ".up-4-3",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

var tl7 = gsap.timeline({
  repeatDelay: 1,
  scrollTrigger: {
    trigger: ".section-ds-5",
    start: "-=500px",
  },
});

tl7.fromTo(
  ".up-5-1",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 1,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl7.fromTo(
  ".up-5-2",
  { opacity: 0, y: 100 },
  {
    y: 0,
    duration: 1,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

var tl8 = gsap.timeline({
  repeatDelay: 0.5,
  scrollTrigger: {
    trigger: ".section-ds-6",
  },
});

tl8.fromTo(
  ".up-6-1",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl8.fromTo(
  ".up-6-2",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);
tl8.fromTo(
  ".up-6-3",
  { opacity: 0, x: -100 },
  {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".rs-up-7",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-rs-2",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".ms-up-8",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-ms-1",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".dezoome",
  { scale: 1.1 },
  {
    duration: 1.5,
    scale: 1,
    ease: "slow",
  }
);

gsap.fromTo(
  ".hs-up-9",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-2",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-up-10",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".hs-up-10",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-up-11",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-3",
      start: "-=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-up-12",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".hs-up-12",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-up-13",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-4",
      start: "-=400px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-up-14",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-4",
      start: "-=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".dezoome-1",
  { scale: 1.1 },
  {
    duration: 1.5,
    scale: 1,
    ease: "slow",
  }
);

gsap.fromTo(
  ".ch-up-15",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-ch-2",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".ch-up-16",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-ch-3",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".ch-up-17",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-ch-4",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-wide-18",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-wide-1",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-wide-19",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-wide-1",
      start: "+=250px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-wide-20",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-wide-1",
      start: "+=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-wide-21",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-wide-3",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".hs-wide-22",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-hs-wide-1",
      start: "+=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".dezoome-rt",
  { scale: 1.1 },
  {
    duration: 1.5,
    scale: 1,
    ease: "slow",
  }
);

gsap.fromTo(
  ".rt-up-1",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-rt-2",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".rt-up-2",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-rt-2",
      start: "+=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".dezoome-rt-2",
  { scale: 1.1, opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".section-rt-3",
      start: "+=500px",
    },
    opacity: 1,
    duration: 1.5,
    scale: 1,
    ease: "slow",
  }
);

gsap.fromTo(
  ".rt-up-3",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-rt-4",
      start: "+=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".rt-up-4",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-rt-5",
      start: "-=500px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".rt-up-5",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-rt-5",
      start: "+=400px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".rt-up-5",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-rt-5",
      start: "+=400px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".nw-up-1",
  { opacity: 0, y: 150 },
  {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".nw-up-2",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-nw-1",
      start: "+=200px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".nw-up-3",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-nw-2",
      start: "-=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".dezoome-nwa",
  { scale: 1.1 },
  {
    duration: 1.5,
    scale: 1,
    ease: "slow",
  }
);

gsap.fromTo(
  ".up-nwa-1",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-nwa-1",
      start: "+=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-nwa-2",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-nwa-1",
      start: "-=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-nwa-3",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-nwa-2",
      start: "-=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".dezoome-news",
  { scale: 1.1 },
  {
    duration: 1.5,
    scale: 1,
    ease: "slow",
  }
);

gsap.fromTo(
  ".up-news-1",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".section-news-1",
      start: "+=300px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-news-2",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-news-2",
      start: "-=700px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-news-3",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-news-3",
      start: "-=700px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-news-4",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-news-4",
      start: "-=700px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-news-5",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-news-5",
      start: "-=700px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-news-6",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-news-6",
      start: "-=700px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-news-7",
  { opacity: 0, y: 150 },
  {
    scrollTrigger: {
      trigger: ".up-news-7",
      start: "-=700px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-contact-1",
  { opacity: 0.1, y: 90 },
  {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);

gsap.fromTo(
  ".up-contact-2",
  { opacity: 0.01, y: 100 },
  {
    scrollTrigger: {
      trigger: ".up-contact-2",
      start: "-=350px",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: Power1.easeIn,
  }
);
