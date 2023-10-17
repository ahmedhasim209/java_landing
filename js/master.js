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
    } else {
      backGroundOption = false;
      clearInterval(backgroundInterval);
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
