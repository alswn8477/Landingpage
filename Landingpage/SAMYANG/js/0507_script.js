// script.js
function loadAlert() {
  alert("Test!");
}

// header
let header = document.querySelector("header");
let logo = document.querySelector("header .logo");
let ul = document.querySelector("header .gnb ul");
let a = document.querySelectorAll("header .gnb .one_dep > a");

header.onmouseenter = function () {
  this.style.backgroundColor = "#fff";
  ul.classList.add("on");
  logo.querySelector("img:nth-child(1)").style.display = "none";
  logo.querySelector("img:nth-child(2)").style.display = "block";
  document.querySelector(".con").style.filter = "blur(10px)";
};
header.onmouseleave = function () {
  this.style.backgroundColor = "transparent";
  ul.classList.remove("on");
  logo.querySelector("img:nth-child(1)").style.display = "block";
  logo.querySelector("img:nth-child(2)").style.display = "none";
  document.querySelector(".con").style.filter = "none";
};

const con1 = document.querySelector(".con");
const height = con1.offsetHeight;
console.log(height);
