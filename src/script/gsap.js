gsap.registerPlugin(ScrollTrigger);

let home = document.getElementById("home");
let landingPageInfo = document.querySelector(".landing-page_info");
gsap
  .timeline()
  .fromTo(
    landingPageInfo.children,
    {
      x: "+=1000",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.2,
      stagger: 0.7,
      duration: 0.5,
    }
  )
  .fromTo(
    home.children,
    {
      x: "+=1000",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
    },
    1
  );

let timeAboutMe = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-me",
    start: "top center",
    // markers: true,
  },
});
timeAboutMe
  .from(".about-me_photo", {
    opacity: 0,
    duration: 1,
    y: 200,
    ease: "back",
  })
  .from(".about-me_name", {
    duration: 0.3,
    opacity: 0,
    x: -20,
    ease: "Power3.easeInOut",
  })
  .from(".about-me_animation", {
    duration: 0.3,
    opacity: 0,
    y: 60,
    ease: "Power3.easeInOut",
  })
  .from(".about-me_short", {
    duration: 1,
    opacity: 0,
    x: -60,
    ease: "Power3.easeInOut",
  })
  .from(".about-me_education", {
    duration: 0.3,
    opacity: 0,
    x: -60,
    ease: "Power3.easeInOut",
  });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".keywords_header",
    start: "top center",
    // markers: true,
  },
});
tl.from(".keywords_header", {
  duration: 1,
  opacity: 0,
  x: -20,
  ease: "Power3.easeInOut",
}).from(".keyword p", {
  stagger: 0.2,
  duration: 1,
  opacity: 0,
  xPercent: -100,
  ease: "Power3.easeInOut",
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top center",
    // markers: true,
  },
});
tl2
  .from(".skills", {
    duration: 0.2,
    opacity: 0,
    x: -20,
    ease: "Power3.easeInOut",
  })
  .from(".skills_title", {
    duration: 0.5,
    opacity: 0,
    x: -20,
    ease: "Power3.easeInOut",
  })
  .from(".skills_flex li", {
    stagger: 0.1,
    opacity: 0,
    x: -20,
    ease: "Power3.easeInOut",
  })
  .from(".skills_picture", {
    duration: 0.2,
    opacity: 0,
    y: 40,
    ease: "Power3.easeInOut",
  });

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hobby",
    start: "top center",
    // markers: true,
  },
});
tl3
  .from(".hobby", {
    duration: 0.1,
    opacity: 0,
    x: -60,
    ease: "Power3.easeInOut",
  })
  .from(".relative", {
    stagger: 0.2,
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "Power3.easeInOut",
  });

//PROJECT

gsap.from(".projects", {
  duration: 1,
  opacity: 0,
  x: -20,
  ease: "Power3.easeInOut",
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
  },
});

//IMAGE REVEALS
const masks = document.querySelectorAll(".mask");

masks.forEach((mask) => {
  const projectsInfo = mask.parentElement.parentElement.children[1];
  // console.log(projectsInfo);
  if (!mask.classList.contains("left-right")) {
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: mask,
        start: "35% center",
        // markers: true,
      },
    });
    tl4
      .from(mask, {
        duration: 0.5,
        opacity: 0,
        xPercent: 100,
        ease: "power3.out",
      })
      .fromTo(
        projectsInfo.children,
        {
          y: "+=100",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
        }
      );
  }
  if (mask.classList.contains("left-right")) {
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: mask,
        start: "35% center",
      },
    });
    tl4
      .from(mask, {
        duration: 0.5,
        opacity: 0,
        xPercent: -100,
        ease: "power3.out",
      })
      .fromTo(
        projectsInfo.children,
        {
          y: "+=100",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.1,
        }
      );
  }
});

const info = document.querySelector(".contact_info");

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top center",
    // markers: true,
  },
});
tl5
  .from(".form", {
    duration: 1,
    opacity: 0,
    y: -300,
    ease: "Power3.easeInOut",
  })
  .fromTo(
    info.children,
    {
      x: "+=-100",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 0.2,
    }
  )
  .from(".contact_form", {
    duration: 1,
    opacity: 0,
    x: 400,
    ease: "Power3.easeInOut",
  });
