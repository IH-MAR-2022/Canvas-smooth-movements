const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 300;
canvas.width = 500;

const h = canvas.height;
const w = canvas.width;

let player = new Player();

document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY = -5;
      break;
    case 40: // down arrow
      player.speedY = 5;
      break;
    case 37: // left arrow
      player.speedX = -5;
      break;
    case 39: // right arrow
      player.speedX = 5;
      break;
  }
});

document.addEventListener("keyup", function (e) {
  player.speedX = 0;
  player.speedY = 0;
});

function startGame() {
  console.log(player);
  animate();
}

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, w, h);
  player.move();
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

startGame();
