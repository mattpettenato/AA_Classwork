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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const View = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\nwindow.View = View\nconst Game = __webpack_require__(/*! ./../ttt_node/game.js */ \"./ttt_node/game.js\");\nwindow.Game = Game\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const figure = document.getElementById('ttt');\n  const game = new Game();\n  const root = document.getElementsByClassName('ttt')[0];\n  new View(game, root); \n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ../ttt_node/game */ \"./ttt_node/game.js\");\n\nclass View {\n  constructor(game, el) {\n    this.game = new Game();\n    this.el = el;\n    this.setupBoard();\n    \n    this.handleClick = this.handleClick.bind(this);\n    this.bindEvents();\n  }\n\n  setupBoard() {\n    //build a 3 x 3 grid using unordered list, with li elements \n    //need to store li positions? \n    \n    let ele = document.createElement(\"ul\");\n    let li = document.createElement('li')\n\n    for (let i = 0; i < 9; i++) {\n      //creates element and sets its parent \n      li = document.createElement('li')\n      ele.appendChild(li); \n\n      //adding text to each li element \n      // li.appendChild(document.createTextNode(\"X\")); \n\n      //sets row index\n      li.setAttribute('data-row', (i % 3));\n      //sets col index\n      li.setAttribute('data-column', Math.floor((i)/3));\n    }\n    this.el.appendChild(ele);\n  };\n  \n  bindEvents() {\n    console.log(this)\n    this.el.addEventListener('click', this.handleClick);\n\n  }\n\n\n  //our callback that gets called when our eventListener get triggered.\n  handleClick(e) {\n    console.log(e.target);\n    let click = e.target; \n    // this.makeMove(click);\n    if (click.nodeName === 'LI') this.makeMove(click);\n  }\n\n  makeMove(square, isNotPlayer) {\n    //put current players mark on square \n    //Game.currentPlayer gives us the current player \n    console.log(isNotPlayer)\n    if (isNotPlayer) {\n      var currentPlayer = 'z'\n    } else {\n      var currentPlayer = this.game.currentPlayer;\n    }\n\n  //  let currentPlayer = this.game.currentPlayer; //gives back a mark \n   //if the move is invalid, do nothing, have another turn \n    console.log(currentPlayer === this.game.currentPlayer);\n    try {\n      console.log(currentPlayer === this.game.currentPlayer);\n      this.game.playMove([square.getAttribute('data-row'), square.getAttribute('data-column')]);\n\n      if (currentPlayer === 'x') {\n        square.classList.add('xstyle');\n        square.appendChild(document.createTextNode(currentPlayer));\n      } else if (currentPlayer === 'o'){\n        square.classList.add('ostyle')\n        square.appendChild(document.createTextNode(currentPlayer));\n      } else {\n        square.classList.add('zstyle')\n      }\n      // square.appendChild(document.createTextNode(currentPlayer));\n    }\n    catch(square){\n      throw new Error(\"Invalid Move\"); \n    } \n\n    if (!(isNotPlayer)) {let winner = this.isWinner();\n      if (winner) {\n        let that = this\n        setTimeout(function () { that.showWinner(that) }, 0.25 * 1000)\n      }\n    }\n  }\n\n  isWinner() {\n    if (this.game.isOver()) {\n      if (this.game.board.winner()) {\n        return this.game.board.winner();\n      } else {\n        return 'draw'\n      }\n    } else {\n      return 0\n    }\n  }\n\n  showWinner(that){\n\n    // return process.exit(1)\n  // throw new Error(\"WINNER\")\n    window.alert(\"WINNER\");\n    that.fillBoard(that);\n  }\n\n  fillBoard(that) {\n    const posBoard = [\n      // horizontals\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]]\n    ];\n    // for (let i = 0; i < 3; i++){\n    //   for (let j = 0; j < 3; j++){\n        console.log(that.el)\n        var q = that.el.querySelectorAll(\"li\")\n        for (let k = 0; k < 9; k++){\n          if (!(q[k].classList.length > 0)) {\n            that.makeMove(q[k], true)\n          }\n        }\n    //   }\n    // }\n  }\n\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ }),

/***/ "./ttt_node/board.js":
/*!***************************!*\
  !*** ./ttt_node/board.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    const posSeqs = [\n      // horizontals\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]],\n      // verticals\n      [[0, 0], [1, 0], [2, 0]],\n      [[0, 1], [1, 1], [2, 1]],\n      [[0, 2], [1, 2], [2, 2]],\n      // diagonals\n      [[0, 0], [1, 1], [2, 2]],\n      [[2, 0], [1, 1], [0, 2]]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const mark = this.grid[pos[0]][pos[1]];\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 3) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 3);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 3; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./ttt_node/board.js?");

/***/ }),

/***/ "./ttt_node/game.js":
/*!**************************!*\
  !*** ./ttt_node/game.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./ttt_node/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./ttt_node/game.js?");

/***/ }),

/***/ "./ttt_node/moveError.js":
/*!*******************************!*\
  !*** ./ttt_node/moveError.js ***!
  \*******************************/
/***/ ((module) => {

eval("\nconst MoveError = function (msg) { this.msg = msg; };\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack:///./ttt_node/moveError.js?");

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