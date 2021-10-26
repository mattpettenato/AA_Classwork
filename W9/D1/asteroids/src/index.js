console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;
const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

document.addEventListener('DOMContentLoaded', () => {
  // document.getElementById('game-canvas');
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  window.ctx = ctx;
  const rock1 = new Asteroid({});

  // preloads mo
  // const mo = new MovingObject({
  //   pos: [110, 130],
  //   vel: [10, 10],
  //   radius: 5,
  //   color: "#00FF00"
  // });
  // mo.draw(ctx);
  rock1.draw(ctx);
  // const rock1 = new Asteroid({ pos: [30, 30] });
  // rock1.draw(ctx);
});