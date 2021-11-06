window.addEventListener("load", start);

let menu = document.querySelector("#mytopnav");

let img = document.querySelector(".slideImage");
let pics = ["images/history1.jpg", "images/history2.jpg", "images/history3.jpg"];

function start() {
  document.querySelector("#ham").addEventListener("click", topMenu);

  document.querySelector("#left").addEventListener("click", prevImg);
  document.querySelector("#right").addEventListener("click", nextImg);
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
