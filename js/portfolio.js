window.addEventListener("load", start);

let menu = document.querySelector("#mytopnav");

function start() {
  document.querySelector("#ham").addEventListener("click", topMenu);
}

function topMenu() {
  console.log("function topMenu()");

  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
}
