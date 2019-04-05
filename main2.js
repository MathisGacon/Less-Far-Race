// import data from "./homepage.js";
var numberOfPlayer = prompt("How many player?");
var grade = [];
var zero = 0;
var player1Id = document.querySelector("#player1");
var player2Id = document.querySelector("#player2");
var player3Id = document.querySelector("#player3");
var player4Id = document.querySelector("#player4");

if (numberOfPlayer === "1") {
  var username1 = prompt("Player1 choose a username");
  alert(`${username1} you are the red arrow`);
  player1Id.textContent = `${username1} TOUCH A to stop!`;
} else if (numberOfPlayer === "2") {
  var username1 = prompt("Player1 choose a username");
  alert(`${username1} you are the red arrow`);
  var username2 = prompt("Player2 choose a username");
  alert(`${username2} you are the blue arrow`);
  player1Id.textContent = `${username1} TOUCH A to stop!`;
  player2Id.textContent = `${username2} TOUCH W to stop!`;
} else if (numberOfPlayer === "3") {
  var username1 = prompt("Player1 choose a username");
  alert(`${username1} you are the red arrow`);
  var username2 = prompt("Player2 choose a username");
  alert(`${username2} you are the blue arrow`);
  var username3 = prompt("Player3 choose a username");
  alert(`${username3} you are the yellow arrow`);
  player1Id.textContent = `${username1} TOUCH A to stop!`;
  player2Id.textContent = `${username2} TOUCH W to stop!`;
  player3Id.textContent = `${username3} TOUCH $ to stop!`;
} else {
  var username1 = prompt("Player1 choose a username");
  alert(`${username1} you are the red arrow`);
  var username2 = prompt("Player2 choose a username");
  alert(`${username2} you are the blue arrow`);
  var username3 = prompt("Player3 choose a username");
  alert(`${username3} you are the yellow arrow`);
  var username4 = prompt("Player4 choose a username");
  alert(`${username4} you are the green arrow`);
  player1Id.textContent = `${username1} TOUCH A to stop!`;
  player2Id.textContent = `${username2} TOUCH W to stop!`;
  player3Id.textContent = `${username3} TOUCH $ to stop!`;
  player4Id.textContent = `${username4} TOUCH ! to stop!`;
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
  constructor(username, color, touche, arrow, rectContains, vitesse) {
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
    this.vitesse = vitesse;
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
        // console.log(zero);
        if (numberOfPlayer === "1" && zero === 1) {
          const res = grade.reduce((acc, current, i) => {
            const tmp =
              current.score < acc.score && acc.score < 756 ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you have ${res.score} points out of 755!!`
          );
        } else if (numberOfPlayer === "2" && zero === 2) {
          const res = grade.reduce((acc, current, i) => {
            const tmp =
              current.score < acc.score && acc.score < 756 ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you're the winner with ${
              res.score
            } points out of 755!!`
          );
        } else if (numberOfPlayer === "3" && zero === 3) {
          const res = grade.reduce((acc, current, i) => {
            const tmp =
              current.score < acc.score && acc.score < 756 ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you're the winner with ${
              res.score
            } points out of 755!!`
          );
        } else if (numberOfPlayer === "4" && zero === 4) {
          const res = grade.reduce((acc, current, i) => {
            const tmp =
              current.score < acc.score && acc.score < 756 ? acc : current;
            return tmp;
          }, grade[0]);
          alert(
            `Good job ${res.username} you're the winner with ${
              res.score
            } points out of 755!!`
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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    5
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
