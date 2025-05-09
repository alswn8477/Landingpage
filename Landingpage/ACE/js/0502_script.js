// script.js
function loadAlert() {
  alert("Test!");
}

// header
let nav = document.querySelector(".nav");
let gnbL = document.querySelector(".left");
let sub = document.querySelector(".left").querySelectorAll(".two_dep");
let gnbR = document.querySelector(".right");
let sub2 = document.querySelector(".right").querySelectorAll(".two_dep");

gnbL.onmouseenter = function () {
  document.querySelector(".logo").style.opacity = "0";
  gnbL.querySelectorAll(".one_dep").forEach(function (item) {
    let spans = item.querySelectorAll("div > a > span");
    spans[0].style.display = "none"; // 첫 번째 span 숨기고
    spans[1].style.display = "block"; // 두 번째 span 보이기
  });
  document.querySelector(".nav").style.height = "280px";

  sub.forEach(function (v, k) {
    v.classList.add("on");
  });
  nav.classList.add("on");
  document.querySelector(".left").classList.add("on");
  this.querySelector(".down").style.color = "#0890c0";
  this.classList.add("on");
};
gnbL.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";
  gnbL.querySelectorAll(".one_dep").forEach(function (item) {
    let spans = item.querySelectorAll("div > a > span");
    spans[0].style.display = "block"; // 첫 번째 span 숨기고
    spans[1].style.display = "none"; // 두 번째 span 보이기
  });
  document.querySelector(".nav").style.height = "0";
  sub.forEach(function (v, k) {
    v.classList.remove("on");
  });
  nav.classList.add("on");
  document.querySelector(".left").classList.remove("on");
  this.querySelector(".down").style.color = "#333";
  this.classList.remove("on");
};
gnbR.onmouseenter = function () {
  document.querySelector(".logo").style.opacity = "0";
  document.querySelector(".nav").style.height = "280px";
  sub2.forEach(function (v, k) {
    v.classList.add("on");
  });
  nav.classList.add("on");
  document.querySelector(".right").classList.add("on");
  v.querySelector("span").style.color = "#0890c0";
};
gnbR.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";
  document.querySelector(".nav").style.height = "0";
  sub2.forEach(function (v, k) {
    v.classList.remove("on");
  });
  document.querySelector(".right").classList.remove("on");
  v.querySelector("span").style.color = "#333";
};

let prevScroll = window.pageYOffset;
window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;
  const header = this.document.querySelector("header");
  if (prevScroll < currentScroll) {
    header.style.top = "-500px";
  } else {
    header.style.top = "0";
  }
  prevScroll = currentScroll;
});

// con
//나머지는 모두 같은데 updateBtn1,updateBtn2....으로 하시면 됩니다.

function updateBtn(swiper) {
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  prevBtn.classList.toggle("disabled", swiper.isBeginning);
  nextBtn.classList.toggle("disabled", swiper.isEnd);
}
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  // loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
  on: {
    init(swiper) {
      updateBtn(swiper);
    },
    slideChange(swiper) {
      updateBtn(swiper);
    },
  },
});
const btnPrev = document.querySelectorAll(".prev");
const btnNext = document.querySelectorAll(".next");
btnPrev.forEach(function (v, k) {
  v.addEventListener("mouseenter", () => {
    v.querySelector(".btn_prev").setAttribute("d", "M 30 10 Q -10 65 30 140");
  });
  v.addEventListener("mouseleave", () => {
    v.querySelector(".btn_prev").setAttribute("d", "M 30 10 Q 30 65 30 140");
  });
});
btnNext.forEach(function (v, k) {
  v.addEventListener("mouseenter", () => {
    v.querySelector(".btn_next").setAttribute("d", "M 20 10 Q 60 65 20 140");
  });
  v.addEventListener("mouseleave", () => {
    v.querySelector(".btn_next").setAttribute("d", "M 20 10 Q 20 65 20 140");
  });
});

// con2
window.addEventListener("scroll", function () {
  const target = this.document.querySelector(".con2 h1");
  const target2 = this.document.querySelector(".con2 .inner");
  const rect = target.getBoundingClientRect();
  const rect2 = target2.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;

  if (rect.top < triggerPoint) {
    target.classList.add("on");
    target2.classList.add("on");
  }
});

function updateBtn1(swiper) {
  const prevBtn = document.querySelector("#prev1");
  const nextBtn = document.querySelector("#next1");
  prevBtn.classList.toggle("disabled", swiper.isBeginning);
  nextBtn.classList.toggle("disabled", swiper.isEnd);
}
const listItems = document.querySelectorAll(".con2 .right li");

function myremove() {
  listItems.forEach(function (v, k) {
    v.classList.remove("on");
  });
}
listItems[0].classList.add("on");

var swiper1 = new Swiper(".mySwiper1", {
  speed: 1500,
  navigation: {
    nextEl: "#next1",
    prevEl: "#prev1",
  },
  on: {
    init(swiper) {
      updateBtn1(swiper);
    },
    slideChange(swiper) {
      updateBtn1(swiper);
    },
  },
});
const btns = document.querySelectorAll(".inner .left a");
btns[0].classList.add("on");

function myremove2() {
  btns.forEach(function (v, k) {
    v.classList.remove("on");
  });
}
swiper1.on("slideChange", function () {
  myremove();
  listItems[this.realIndex].classList.add("on");
  myremove2();
  btns[this.realIndex].classList.add("on");
});

btns.forEach((v, k) => {
  v.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(k);
    swiper1.slideTo(k);
    myremove2();
    v.classList.add("on");
  });
});

// con3
window.addEventListener("scroll", function () {
  const target = this.document.querySelector(".con3 h1");
  const target2 = this.document.querySelector(".con3 .swiper");
  const rect = target.getBoundingClientRect();
  const rect2 = target2.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;

  if (rect.top < triggerPoint) {
    target.classList.add("on");
    target2.classList.add("on");
  }
});

function updateBtn2(swiper) {
  const prevBtn = document.querySelector("#prev2");
  const nextBtn = document.querySelector("#next2");
  prevBtn.classList.toggle("disabled", swiper.isBeginning);
  nextBtn.classList.toggle("disabled", swiper.isEnd);
}

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

var swiper2 = new Swiper(".mySwiper2", {
  speed: 1000,
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#next2",
    prevEl: "#prev2",
  },
  on: {
    init(swiper) {
      updateBtn2(swiper);
    },
    slideChange(swiper) {
      updateBtn2(swiper);
    },
  },
  scrollbar: {
    el: ".con3 .swiper-scrollbar",
    dragSize: "auto",
  },
});

// con4
window.addEventListener("scroll", function () {
  const target = this.document.querySelector(".con4 h1");
  const rect = target.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;

  if (rect.top < triggerPoint) {
    target.classList.add("on");
  }
});

let tab = document.querySelectorAll(".con4 .inner .swiperTab ul li");

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
});

document.getElementById("page1").addEventListener("click", function (e) {
  e.preventDefault();
  swiper3.slideTo(0);
});
document.getElementById("page2").addEventListener("click", function (e) {
  e.preventDefault();
  swiper3.slideTo(1);
});
document.getElementById("page3").addEventListener("click", function (e) {
  e.preventDefault();
  swiper3.slideTo(2);
});

function con4remove() {
  tab.forEach(function (v, k) {
    v.classList.remove("on");
  });
}

tab[0].classList.add("on");

swiper3.on("slideChange", function () {
  con4remove();
  tab[this.realIndex].classList.add("on");
});

// con5
window.addEventListener("scroll", function () {
  const target = this.document.querySelector(".con5 h1");
  const target2 = this.document.querySelector(".con5 ul");
  const rect = target.getBoundingClientRect();
  const rect2 = target2.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;

  if (rect.top < triggerPoint) {
    target.classList.add("on");
    target2.classList.add("on");
  }
});

// con6
window.addEventListener("scroll", function () {
  const target = this.document.querySelector(".con6 img");
  const target2 = this.document.querySelector(".con6 .inner .txt p");
  const rect = target.getBoundingClientRect();
  const rect2 = target2.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;
  const triggerPoint2 = window.innerHeight * 0.5;

  if (rect.top < triggerPoint) {
    target.classList.add("on");
  }
  if (rect.top < triggerPoint2) {
    target2.classList.add("on");
  }
});

// footer
let leftli = document.querySelectorAll("footer .left ul li");
leftli[2].classList.add("on");

// sideBtn
window.addEventListener("scroll", function () {
  const sideBtna = this.document.querySelector(".sideBtn a");
  const sideBtn = this.document.querySelector(".sideBtn");
  const triggerHeight = 5740;
  if (this.window.scrollY > 200) {
    sideBtna.style.opacity = "1";
  } else {
    sideBtna.style.opacity = "0";
  }
  if (this.window.pageYOffset > triggerHeight) {
    sideBtn.classList.add("on");
  } else {
    sideBtn.classList.remove("on");
  }
});
