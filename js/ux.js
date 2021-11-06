window.addEventListener("load", start);

let menu = document.querySelector("#mytopnav");

let img;
let pics;
let slides = document.querySelector(".slideImage");

let dataCollection = [
  "images/data1.jpg",
  "images/data2.png",
  "images/data3.jpg",
  "images/data4.png",
  "images/data5.jpg",
  "images/data6.png",
  "images/data7.jpg",
  "images/data8.jpg",
];

function start() {
  document.querySelector("#ham").addEventListener("click", topMenu);

  document.querySelector("#left").addEventListener("click", beforePrevImg);
  document.querySelector("#right").addEventListener("click", beforeNextImg);
}

function topMenu() {
  console.log("function topMenu()");

  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
}

function beforePrevImg() {
  console.log("beforePrevImg");

  pics = dataCollection;

  img = slides;

  prevImg();
}

function beforeNextImg() {
  console.log("beforeNextImg");

  pics = dataCollection;

  img = slides;

  nextImg();
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
