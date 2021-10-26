var MovingObject = require('./moving_object');
var Util = require('./utils');

const defaultAsteroid = {
  COLOR: '#4f2ac9',
  RADIUS: 50
};

// constructor function
function Asteroid(pos) {
  
  const options = {
    pos: [Math.floor(Math.random() * 800), Math.floor(Math.random() * 800)],
    vel: Util.randomVec(200),  
    radius: 100, //defaultAsteroid.RADIUS,
    color: defaultAsteroid.COLOR,
  }
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;