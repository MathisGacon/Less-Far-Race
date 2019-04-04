// import data from "./homepage.js";
var numberOfPlayer = prompt("How many player?");
var grade = [];
var zero = 0;

if (numberOfPlayer === "1") {
  var username1 = prompt("Player1 choose a username");
} else if (numberOfPlayer === "2") {
  var username1 = prompt("Player1 choose a username");
  var username2 = prompt("Player2 choose a username");
} else if (numberOfPlayer === "3") {
  var username1 = prompt("Player1 choose a username");
  var username2 = prompt("Player2 choose a username");
  var username3 = prompt("Player3 choose a username");
} else {
  var username1 = prompt("Player1 choose a username");
  var username2 = prompt("Player2 choose a username");
  var username3 = prompt("Player3 choose a username");
  var username4 = prompt("Player4 choose a username");
}
var winner1 = false;
var winner2 = false;
var winner3 = false;
var winner4 = false;

const canvas = document.getElementById("canvas");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#001f3f";
ctx.strokeStyle.zIndex = 2000;
ctx.beginPath();
ctx.arc(750, 350, 20, 0, Math.PI * 2);
ctx.stroke();

class Player {
  constructor(username, color, touche, arrow, rectContains) {
    this.username = username;
    this.score = 0;
    this.color = color;
    (this.touche = touche),
      (this.arrow = {
        i: arrow.i,
        b: arrow.b,
        x: arrow.x,
        y: arrow.y,
        d: arrow.d,
        s: arrow.s,
        c: arrow.c,
        boleanCircle: arrow.boleanCircle
      });
    this.rectContains = {
      x: rectContains.x,
      y: rectContains.y,
      dx: rectContains.dx,
      dy: rectContains.dy
    };
  }
  drawArrow() {
    var arrow = setInterval(() => {
      this.score++;
      if (this.score > 755) {
        clearInterval(arrow);
        ctx.clearRect(
          this.rectContains.x,
          this.rectContains.y,
          this.rectContains.dx,
          this.rectContains.dy
        );
      } else {
        this.arrow.x += this.arrow.i;
        this.arrow.y += this.arrow.b;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(
          this.arrow.x,
          this.arrow.y,
          this.arrow.d,
          this.arrow.s,
          this.arrow.c,
          this.arrow.boleanCircle
        );
        ctx.stroke();
      }
    }, 10);
    document.addEventListener("keydown", event => {
      const nomTouche = event.key;
      if (nomTouche === this.touche) {
        zero++;
        clearInterval(arrow);
        localStorage.setItem(this.username, this.score);
        // if (this.score > 754)
        // if (localStorage.getItem(this.username) === this.username) {
        //   console.log("yo");

        grade.push({ username: this.username, score: this.score });
        grade.filter(function(obj) {
          if (!(obj.username == obj.unsername)) return obj.username;
        });
        // console.log(grade);

        console.log(grade);
        console.log(zero);
        if (zero === 1 && numberOfPlayer === 1) {
          const res = grade.reduce((acc, current, i) => {
            const tmp = current.score < acc.score ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you're the winner with ${
              res.score
            } points!!`
          );
        } else if (zero === 2 && numberOfPlayer === 2) {
          const res = grade.reduce((acc, current, i) => {
            const tmp = current.score < acc.score ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you're the winner with ${
              res.score
            } points!!`
          );
        } else if (zero === 3 && numberOfPlayer === 3) {
          const res = grade.reduce((acc, current, i) => {
            const tmp = current.score < acc.score ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you're the winner with ${
              res.score
            } points!!`
          );
        } else if (zero === 4 && numberOfPlayer === 4) {
          const res = grade.reduce((acc, current, i) => {
            const tmp = current.score < acc.score ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you're the winner with ${
              res.score
            } points!!`
          );
        }
      }
      // if (grade.score[0] > grade.score)
      // const res = grade.reduce((acc, currentVal) => {
      //   let tmp = acc.grade ? acc : currentVal;
      //   if (currentVal.grade > acc.grade) {
      //     tmp = currentVal;
      //     return tmp;
      //   }
      //   // tmp.username = acc.user
      //   return tmp;
      // }, {});
    });
  }
}

if (numberOfPlayer === "1") {
  const p1 = new Player(
    username1,
    "red",
    "a",
    {
      i: 1,
      b: 0.465,
      x: 0,
      y: 0,
      d: 22.5,
      rectContains: {
        x: 0,
        y: 0,
        dx: 750,
        dy: 350
      },
      s: -Math.PI / 2,
      c: Math.PI,
      boleanCircle: true
    },
    {
      x: 0,
      y: 0,
      dx: 750,
      dy: 350
    }
  );
  p1.drawArrow();
} else if (numberOfPlayer === "2") {
  const p1 = new Player(
    username1,
    "red",
    "a",
    {
      i: 1,
      b: 0.465,
      x: 0,
      y: 0,
      d: 22.5,
      s: -Math.PI / 2,
      c: Math.PI,
      boleanCircle: true
    },
    {
      x: 0,
      y: 0,
      dx: 750,
      dy: 350
    }
  );
  p1.drawArrow();

  const p2 = new Player(
    username2,
    "blue",
    "w",
    {
      i: 1,
      b: -0.465,
      x: 0,
      y: 700,
      d: 22.5,
      s: Math.PI / 2,
      c: Math.PI,
      boleanCircle: false
    },
    {
      x: 0,
      y: 350,
      dx: 750,
      dy: 350
    }
  );
  p2.drawArrow();
} else if (numberOfPlayer === "3") {
  const p1 = new Player(
    username1,
    "red",
    "a",
    {
      i: 1,
      b: 0.465,
      x: 0,
      y: 0,
      d: 22.5,
      s: -Math.PI / 2,
      c: Math.PI,
      boleanCircle: true
    },
    {
      x: 0,
      y: 0,
      dx: 750,
      dy: 350
    }
  );
  p1.drawArrow();
  const p2 = new Player(
    username2,
    "blue",
    "w",
    {
      i: 1,
      b: -0.465,
      x: 0,
      y: 700,
      d: 22.5,
      s: Math.PI / 2,
      c: Math.PI,
      boleanCircle: false
    },
    {
      x: 0,
      y: 350,
      dx: 750,
      dy: 350
    }
  );
  console.log(p2);
  p2.drawArrow();

  const p3 = new Player(
    username3,
    "yellow",
    "$",
    {
      i: -1,
      b: 0.465,
      x: 1500,
      y: 0,
      d: 22.5,
      s: Math.PI * 1.5,
      c: 2 * Math.PI,
      boleanCircle: false
    },
    {
      x: 750,
      y: 0,
      dx: 750,
      dy: 350
    }
  );
  p3.drawArrow();
} else {
  const p1 = new Player(
    username1,
    "red",
    "a",
    {
      i: 1,
      b: 0.465,
      x: 0,
      y: 0,
      d: 22.5,
      s: -Math.PI / 2,
      c: Math.PI,
      boleanCircle: true
    },
    {
      x: 0,
      y: 0,
      dx: 750,
      dy: 350
    }
  );
  p1.drawArrow();
  const p2 = new Player(
    username2,
    "blue",
    "w",
    {
      i: 1,
      b: -0.465,
      x: 0,
      y: 700,
      d: 22.5,
      s: Math.PI / 2,
      c: Math.PI,
      boleanCircle: false
    },
    {
      x: 0,
      y: 350,
      dx: 750,
      dy: 350
    }
  );
  p2.drawArrow();
  const p3 = new Player(
    username3,
    "yellow",
    "$",
    {
      i: -1,
      b: 0.465,
      x: 1500,
      y: 0,
      d: 22.5,
      s: Math.PI * 1.5,
      c: 2 * Math.PI,
      boleanCircle: false
    },
    {
      x: 750,
      y: 0,
      dx: 750,
      dy: 350
    }
  );
  p3.drawArrow();
  const p4 = new Player(
    username4,
    "green",
    "!",
    {
      i: -1,
      b: -0.465,
      x: 1500,
      y: 700,
      d: 22.5,
      s: Math.PI / 2,
      c: Math.PI * 2,
      boleanCircle: true
    },
    {
      x: 750,
      y: 350,
      dx: 750,
      dy: 350
    }
  );
  p4.drawArrow();
}
// setTimeout(function() {
//   var arrayScore = [];

//   arrayScore.push(localStorage.getItem(this.score));
//   console.log(arrayScore);
// }, 6000);
ctx.strokeStyle = "#001f3f";
ctx.strokeStyle.zIndex = 2000;
ctx.beginPath();
ctx.arc(750, 350, 20, 0, Math.PI * 2);
ctx.stroke();
