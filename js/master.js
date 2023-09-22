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
  });
});

let land = document.querySelector(".landing-page");
let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
setInterval(function () {
  let randomNumber = Math.floor(Math.random() * imgArray.length);
  land.style.backgroundImage = 'url("images/' + imgArray[randomNumber] + '")';
}, 5000);
