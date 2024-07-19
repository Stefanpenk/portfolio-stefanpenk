//NAV
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//LANDING PAGE
const head = document.querySelector(".img_head");

const handleChangeHead = (e) => {
  if (e.clientX <= window.innerWidth / 2) {
    head.src = "./public/assets/landing-page/landing_page_2.png";
  } else {
    head.src = "./public/assets/landing-page/landing_page_1.png";
  }
};

document.addEventListener("mousemove", handleChangeHead);

//SKILLS
const skillsImg = document.querySelector(".skills_img");
const skillsTitle = document.querySelectorAll(".s-title");

function handleImg(e) {
  skillsImg.src = `./public/assets/skills-img/${e.target.textContent.toLowerCase()}.svg`;
}

skillsTitle.forEach((skill) => skill.addEventListener("mouseover", handleImg));

//HOBBY
const imgs = [...document.querySelectorAll(".relative")];

let timer = undefined;
function handleResizeImage(e) {
  timer = setTimeout(() => e.target.classList.add("clipPathChange"), 1000);
}
function handleResizeImageBack(e) {
  e.target.classList.remove("clipPathChange");
  clearTimeout(timer);
}

function handleRevealImage(e) {
  imgs.forEach((img) => {
    const positionX = img.getBoundingClientRect().left;
    const positionY = img.getBoundingClientRect().top;
    img.style.setProperty(
      "--clip-position",
      `${e.clientX - positionX}px ${e.clientY - positionY}px`
    );
    img.addEventListener("mouseover", handleResizeImage);
    img.addEventListener("mouseout", handleResizeImageBack);
  });
}

document.body.addEventListener("mousemove", handleRevealImage);

//PROJECTS
let path = document.querySelector(".path");
let pathLength = path.getTotalLength();
let projectContainer = document.querySelector(".projects_container");
let projects = document.querySelector(".projects");

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;
window.addEventListener("scroll", (e) => {
  if (projectContainer.getBoundingClientRect().top - window.innerHeight < 0) {
    let scrollPercentage =
      (projectContainer.getBoundingClientRect().top - window.innerHeight) /
        projectContainer.getBoundingClientRect().height +
      0.1;

    let drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
  }
});

//CONTACT FORM ANIMATION
const inputs = document.querySelectorAll(".input");

function handleFocus() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function handleBlur() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", handleFocus);
  input.addEventListener("blur", handleBlur);
});

//admin panel
const allSections = document.querySelectorAll("section");
const navLogo = document.querySelector(".nav__logo");
const mainContainer = document.querySelector(".container");
const randomAdvice = document.querySelector(".random-advice");
const adminPanel = document.querySelector(".admin-panel");

const handleAdmin = () => {
  adminPanel.classList.remove("displayNone");
  allSections.forEach((section) => {
    section.classList.add("displayNone");
  });
};
navLogo.addEventListener("click", handleAdmin);

//Back to main listener
const backButton = document.querySelector(".button-back");

backButton.addEventListener("click", () => {
  allSections.forEach((section) => {
    section.classList.remove("displayNone");
  });
  adminPanel.classList.add("displayNone");
});

//Random advice button
const handleRandomAdvice = () => {
  const randomAdviceAPI = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      randomAdvice.innerText = `${data.slip.advice}`;
    });
};
randomAdvice.addEventListener("click", handleRandomAdvice);
