// script.js
function loadAlert() {
  alert("Test!");
}

// fullpage
$(document).ready(function () {
  $("#fullpage").fullpage({
    navigation: true,
    navigationPosition: "right",
  });
});

// 꽃 날림
$(function () {});
const canvas = document.getElementById("leafCanvas");
const ctx = canvas.getContext("2d");
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const leafImage = new Image();
leafImage.src = "./images/꽃2.png"; // (원하는 PNG로 바꾸세요)
const leafCount = 20;
const leaves = [];
class Leaf {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = canvas.width + Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 40 + Math.random() * 60;
    this.speedX = 1 + Math.random() * 3;
    this.angle = Math.random() * Math.PI * 2;
    this.angleSpeed = (Math.random() - 0.5) * 0.05;
    this.amplitude = 10 + Math.random() * 20;
  }
  update() {
    this.x -= this.speedX;
    this.y += Math.sin(this.angle) * 0.5;
    this.angle += this.angleSpeed;
    if (this.x < -this.size) {
      this.reset();
      this.x = canvas.width + this.size;
    }
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(
      leafImage,
      -this.size / 2,
      -this.size / 2,
      this.size,
      this.size
    );
    ctx.restore();
  }
}
function init() {
  for (let i = 0; i < leafCount; i++) {
    leaves.push(new Leaf());
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let leaf of leaves) {
    leaf.update();
    leaf.draw();
  }
  requestAnimationFrame(animate);
}
leafImage.onload = () => {
  init();
  animate();
};

// section0
{
  /* <script>AOS.init( duration: 1000, delay: 500,);</script>; */
}
