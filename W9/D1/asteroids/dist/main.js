/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nvar Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nconst defaultAsteroid = {\n  COLOR: '#4f2ac9',\n  RADIUS: 50\n};\n\n// constructor function\nfunction Asteroid(pos) {\n  \n  const options = {\n    pos: [Math.floor(Math.random() * 800), Math.floor(Math.random() * 800)],\n    vel: Util.randomVec(200),  \n    radius: 100, //defaultAsteroid.RADIUS,\n    color: defaultAsteroid.COLOR,\n  }\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working!\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // document.getElementById('game-canvas');\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  window.ctx = ctx;\n  const rock1 = new Asteroid({});\n\n  // preloads mo\n  // const mo = new MovingObject({\n  //   pos: [110, 130],\n  //   vel: [10, 10],\n  //   radius: 5,\n  //   color: \"#00FF00\"\n  // });\n  // mo.draw(ctx);\n  rock1.draw(ctx);\n  // const rock1 = new Asteroid({ pos: [30, 30] });\n  // rock1.draw(ctx);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos; // [0,0]\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.strokeStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.lineWidth = 5;\n  ctx.stroke();\n  // ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  // increment position by velocity\n  // subtract object vel from obj position...\n  x_pos = this.pos[0];\n  y_pos = this.pos[1];\n  x_vel = this.vel[0];\n  y_vel = this.vel[1];\n\n  // formula\n  // const speed = Math.sqrt(Math.pow((x_pos - x_vel), 2) + Math.pow((y_pos - y_vel), 2));\n  this.pos = [(x_pos + x_vel), (y_pos + y_vel)];\n\n  \n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n  inherits: function (childClass, parentClass) {\n    // Utility code, especially vector math stuff.\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec: function(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale: function(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;