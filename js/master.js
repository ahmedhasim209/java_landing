let land = document.querySelector(".landing-page");
let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
setInterval(function () {
  let randomNumber = Math.floor(Math.random() * imgArray.length);
  land.style.backgroundImage = 'url("images/' + imgArray[randomNumber] + '")';
}, 5000);
