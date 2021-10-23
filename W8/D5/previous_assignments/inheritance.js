


Function.prototype.inherits = function (child) {
  let parent = this;
  var Surrogate = function(){}
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}



function MovingObject(rotation=0, x=0, y=0) {
  this.rotation = rotation; // degrees
  this.x = x;
  this.y = y;
}

function Ship() {
  MovingObject.call(this);
  this.lives = 3;
 }
Ship.inherits(MovingObject);


Ship.prototype.shoot = function(){
  console.log("Fire!");
}


function Asteroid(rotation, x, y) { 
  MovingObject.call(this, rotation, x, y);
}
Asteroid.inherits(MovingObject);





var ship = new Ship();
console.log("Ship Started At:", ship.rotation, ship.x, ship.y);

var asteroid = new Asteroid(270, 0, 100);
console.log("Asteroid Spawned At:", asteroid.rotation, asteroid.x, asteroid.y);
