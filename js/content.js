window.addEventListener("load", start);

let menu = document.querySelector("#mytopnav");

let story = document.querySelector("#story");
let cherry = document.querySelector("#cherry");

let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");
let playBtn1 = document.querySelector("#playBtn1");
let stopBtn1 = document.querySelector("#stopBtn1");

function start() {
  document.querySelector("#ham").addEventListener("click", topMenu);

  playBtn.style.backgroundImage = "url(images/playBtn.svg)";
  stopBtn.style.backgroundImage = "url(images/stopBtn.svg)";
  playBtn1.style.backgroundImage = "url(images/playBtn.svg)";
  stopBtn1.style.backgroundImage = "url(images/stopBtn.svg)";

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);
  playBtn1.addEventListener("click", playVideo1);
  stopBtn1.addEventListener("click", stopVideo1);

  story.addEventListener("ended", showPlayButton);
  cherry.addEventListener("ended", showPlayButton1);
}

function topMenu() {
  console.log("function topMenu()");

  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
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

function playVideo1() {
  if (cherry.paused == true) {
    cherry.play();

    playBtn1.style.backgroundImage = "url(images/pauseBtn.svg)";
  } else {
    cherry.pause();

    playBtn1.style.backgroundImage = "url(images/playBtn.svg)";
  }
}

function stopVideo1() {
  cherry.pause();

  cherry.currentTime = 0;

  playBtn1.style.backgroundImage = "url(images/playBtn.svg)";
}

function showPlayButton1() {
  console.log("showPlayButton1");

  playBtn1.style.backgroundImage = "url(images/playBtn.svg)";
}
