const canvas = document.getElementById("canvas");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

const ctx = canvas.getContext("2d");

class Player {
  constructor(username) {
    this.username = username;
    this.score = 0;
    this.arrow = {
      x: 0,
      y: 0,
      d: 0,
      s: 0,
      c: 0, 
      boleanCircle: true,

    };
  }

  getScore() {
    return this.score;
  }

  setScore() {
    this.score++;
  }

  drawArrow() {
    var arrow = setInterval(() => {
      x += 1;
      y += 0.465;
      if (x < 1500) {
        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.arc(x, y, d, s, c, boleanCircle);
        ctx.stroke();
      }
    }, 10);
  }
}

const p1 = new Player();
const p2 = new Player("foo");
