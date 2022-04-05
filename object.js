class Object {
  constructor(width, height, color, x, y) {
    this.width = width || 25;
    this.height = height || 25;
    this.color = color || "black";
    this.x = x || 0;
    this.y = y || 0;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
