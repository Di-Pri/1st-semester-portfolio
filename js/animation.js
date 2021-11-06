window.addEventListener("load", start);

let menu = document.querySelector("#mytopnav");

let img = document.querySelector(".slideImage");
let pics = ["images/game1.jpg", "images/game2.jpg", "images/game3.jpg", "images/game4.jpg", "images/game5.jpg"];

let story = document.querySelector("#story");

let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");

function start() {
  document.querySelector("#ham").addEventListener("click", topMenu);

  document.querySelector("#left").addEventListener("click", prevImg);
  document.querySelector("#right").addEventListener("click", nextImg);

  playBtn.style.backgroundImage = "url(images/playBtn.svg)";
  stopBtn.style.backgroundImage = "url(images/stopBtn.svg)";

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);

  story.addEventListener("ended", showPlayButton);
}

function topMenu() {
  console.log("function topMenu()");

  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
}

function prevImg() {
  console.log("prevImg");

  let imgName = img.id.split("_");

  let index = imgName[1];

  if (index == 0) {
    index = pics.length - 1;
  } else {
    index--;
  }

  img.src = pics[index];

  img.id = "image_" + index;
}

function nextImg() {
  console.log("nextImg");

  let imgName = img.id.split("_");

  let index = imgName[1];

  if (index == pics.length - 1) {
    index = 0;
  } else {
    index++;
  }

  img.src = pics[index];

  img.id = "image_" + index;
}

function playVideo() {
  if (story.paused == true) {
    story.play();

    playBtn.style.backgroundImage = "url(images/pauseBtn.svg)";
  } else {
    story.pause();

    playBtn.style.backgroundImage = "url(images/playBtn.svg)";
  }
}

function stopVideo() {
  story.pause();

  story.currentTime = 0;

  playBtn.style.backgroundImage = "url(images/playBtn.svg)";
}

function showPlayButton() {
  console.log("showPlayButton");

  playBtn.style.backgroundImage = "url(images/playBtn.svg)";
}
