let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
  document.documentElement.style.setProperty(
    "--main--color",
    localStorage.getItem("color_option")
  );

  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

// random back ground option
let backGroundOption = true;

// varible to control Interval
let backgroundInterval;

//check if there is local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");
//check if random background is not empty
if (backgroundLocalItem !== null) {
  console.log(backgroundLocalItem);

  if (backgroundLocalItem === "true") {
    backGroundOption = true;
  } else {
    backGroundOption = false;
  }
  // remove active class from all spans
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}

let settings = document.querySelector(".settings-box");
let gear = document.querySelector(".fa-gear");

gear.onclick = function () {
  this.classList.toggle("fa-spin");
  settings.classList.toggle("open");
};

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    localStorage.setItem("color_option", e.target.dataset.color);
    handleActive(e);
  });
});

//swith random background option
const randomBackEl = document.querySelectorAll(".random-background span");

//loop on all spans
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backGroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backGroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

let land = document.querySelector(".landing-page");
let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// function to randomize images
function randomizeImgs() {
  if (backGroundOption === true) {
    backgroundInterval = setInterval(function () {
      let randomNumber = Math.floor(Math.random() * imgArray.length);
      land.style.backgroundImage =
        'url("images/' + imgArray[randomNumber] + '")';
    }, 1000);
  }
}
randomizeImgs();

// skills sellector
let ourSkills = document.querySelector(".skills");
// select timeline
let timeLine = document.querySelector(".timeline");

window.onscroll = () => {
  //skills offSet top
  let skillsOffsetTop = ourSkills.offsetTop; // distance from ourSkills to page = 1110

  //skills outer height
  let skillsOuterHeight = ourSkills.offsetHeight; // time ourSkills = 565

  //timeLine offSet top
  let timeLineOffsetTop = timeLine.offsetTop; // distance from time line to page = 2266

  //timeLine outer height
  let timeLineOuterHeight = timeLine.offsetHeight; // time line height = 1422
  //window height
  let windowHeight = this.innerHeight; //height of the page = 707

  // window scroll top
  let windowScrollTop = this.pageYOffset; //height of the scroll = 2266
  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    console.log("we");
    let allSkills = document.querySelectorAll(
      ".skills .skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
  if (windowScrollTop > timeLineOffsetTop) {
    let timeLineLeftCont = document.querySelectorAll(
      ".timeline .timeline-content .left .content"
    );
    let timeLineRightCont = document.querySelectorAll(
      ".timeline .timeline-content .right .content"
    );
    timeLineLeftCont.forEach((content) => {
      content.style.left = 0;
    });
    timeLineRightCont.forEach((content) => {
      content.style.left = 0;
    });
  }
};

//create popup with image
let ourGalary = document.querySelectorAll(".galary img");

ourGalary.forEach((img) => {
  img.addEventListener("click", (e) => {
    // creatr overlay div
    let overLay = document.createElement("div");

    // add class to overLay div
    overLay.className = "popup-overlay";

    //add overlay to the body
    document.body.appendChild(overLay);

    // create the popupBox
    popupBox = document.createElement("div");

    //add class to popupBox div
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // create heading
      let imgHeading = document.createElement("h3");

      // create text for heading
      let headingText = document.createTextNode(img.alt);

      // add heading text to the heading
      imgHeading.appendChild(headingText);

      // add the heading to popupBox
      popupBox.appendChild(imgHeading);
    }

    // create the clicked img
    let popupImage = document.createElement("img");

    // change popupImage src to orginal img src
    popupImage.src = img.src;

    // append the popupImage to popupBox
    popupBox.appendChild(popupImage);

    // append the popupBox to the body
    document.body.appendChild(popupBox);

    // create close span
    closePopup = document.createElement("span");

    // create close span text
    let spanText = document.createTextNode("x");

    //add the text to the span
    closePopup.appendChild(spanText);

    // add class to close span
    closePopup.className = "close-popup";

    // add the close span to popup box
    popupBox.appendChild(closePopup);
  });
});

// close popup
document.addEventListener("click", (e) => {
  if (e.target.className == "close-popup") {
    //remove the current popup
    e.target.parentNode.remove();

    //remove the overlay
    document.querySelector(".popup-overlay").remove();
  }
});

//select all bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullet");

//select all links
let allLinks = document.querySelectorAll(".links a");

function scrollSections(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollSections(allBullets);
scrollSections(allLinks);

// handle active function
function handleActive(ele) {
  ele.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  ele.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsCont = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
}
if (bulletLocalItem === "block") {
  bulletsCont.style.display = "block";
  document.querySelector(".bullets-option .yes").classList.add("active");
} else {
  bulletsCont.style.display = "none";
  document.querySelector(".bullets-option .no").classList.add("active");
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "block") {
      bulletsCont.style.display = "block";
      localStorage.setItem("bullets-option", "block");
    } else {
      bulletsCont.style.display = "none";
      localStorage.setItem("bullets-option", "none");
    }
    handleActive(e);
  });
});

// reset oprions

document.querySelector(".reset-options").onclick = function () {
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets-option");

  // reload window
  window.location.reload();
};

// toggle menu

let toggleIcon = document.querySelector(".burger");
let tLinks = document.querySelector(".links");

toggleIcon.onclick = function (e) {
  // stop propagation
  e.stopPropagation();

  // toggle class (menu-active) on toggle icon
  this.classList.toggle("menu-active");

  // toggle class (open) on links
  tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleIcon && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      // toggle class (menu-active) on toggle icon
      toggleIcon.classList.toggle("menu-active");

      // toggle class (open) on links
      tLinks.classList.toggle("open");
    }
  }
});

tLinks.onclick = function (e) {
  // stop propagation
  e.stopPropagation();
};
