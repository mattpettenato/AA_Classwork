import Level from "./level";

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.level = new Level(this.dimensions.width, this.dimensions.canvas);

    this.ctx.fillStyle = "red";
    this.ctx.fillRect(100, 100, 400, 300);
  }
}