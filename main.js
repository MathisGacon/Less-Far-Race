const canvas = document.getElementById("canvas");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

const ctx = canvas.getContext("2d");

var score = 0;
let x = 0;
let y = 0;

var player1 = setInterval(() => {
  x += 1;
  y += 0.465;

  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.arc(x, y, 22.5, -Math.PI / 2, Math.PI, true);
  ctx.stroke();
}, 10);
console.log(player1);

let t = 0;
let u = 700;
var player2 = setInterval(() => {
  t += 1;
  u -= 0.465;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.arc(t, u, 22.5, Math.PI / 2, Math.PI, false);
  ctx.stroke();
}, 10);

let r = 1500;
let p = 0;
var player3 = setInterval(() => {
  r -= 1;
  p += 0.465;

  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(r, p, 22.5, Math.PI * 1.5, 2 * Math.PI, false);
  ctx.stroke();
}, 10);

let m = 1500;
let n = 700;
var player4 = setInterval(() => {
  m -= 1;
  n -= 0.465;

  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.arc(m, n, 22.5, Math.PI / 2, Math.PI * 2, true);
  ctx.stroke();
}, 10);

ctx.strokeStyle = "#001f3f";
ctx.beginPath();
ctx.arc(750, 350, 20, 0, Math.PI * 2);
ctx.stroke();

document.addEventListener("keydown", event => {
  const nomTouche = event.key;
  if (nomTouche === "a") clearInterval(player1);
});
document.addEventListener("keydown", event => {
  const nomTouche = event.key;
  if (nomTouche === "w") clearInterval(player2);
});
document.addEventListener("keydown", event => {
  const nomTouche = event.key;
  if (nomTouche === "$") clearInterval(player3);
});
document.addEventListener("keydown", event => {
  const nomTouche = event.key;
  if (nomTouche === "!") clearInterval(player4);
});

class Player {
  constructor(username) {
    this.username = username;
    this.score = 0;
    this.arrow = {
      w: 0,
      h: 0
    };
  }

  getScore() {
    return this.score;
  }

  setScore() {
    this.score++;
  }

  drawArrow() {}
}

const p1 = new Player("toto");
const p2 = new Player("foo");

// p1.start()
