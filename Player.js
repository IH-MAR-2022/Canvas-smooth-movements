class Player extends Object {
  constructor(width, height, color, x, y) {
    super(width, height, color, x, y);
    this.speedX = 0;
    this.speedY = 0;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
