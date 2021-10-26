var Util = require('./utils');

function MovingObject(options) {
  this.pos = options.pos; // [0,0]
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;

}

MovingObject.prototype.draw = function(ctx) {
  ctx.strokeStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.lineWidth = 5;
  ctx.stroke();
  // ctx.fill();
}

MovingObject.prototype.move = function() {
  // increment position by velocity
  // subtract object vel from obj position...
  x_pos = this.pos[0];
  y_pos = this.pos[1];
  x_vel = this.vel[0];
  y_vel = this.vel[1];

  // formula
  // const speed = Math.sqrt(Math.pow((x_pos - x_vel), 2) + Math.pow((y_pos - y_vel), 2));
  this.pos = [(x_pos + x_vel), (y_pos + y_vel)];

  
}

module.exports = MovingObject;