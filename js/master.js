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
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

//swith random background option
const randomBackEl = document.querySelectorAll(".random-background span");

//loop on all spans
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    //remove active class from all spans
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //add active class on self
    e.target.classList.add("active");

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

window.onscroll = () => {
  //skills offSet top
  let skillsOffsetTop = ourSkills.offsetTop;

  //skills outer height
  let skillsOuterHeight = ourSkills.offsetHeight;

  //window height
  let windowHeight = this.innerHeight;

  // window scroll top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skills .skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
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

    // create the clicked img
    let popupImage = document.createElement("img");

    // change popupImage src to orginal img src
    popupImage.src = img.src;

    // append the popupImage to popupBox
    popupBox.appendChild(popupImage);

    // append the popupBox to the body
    document.body.appendChild(popupBox);
  });
});
