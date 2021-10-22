// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const grid = new Array(8); // [[][][][][][][][]]
  for (let i = 0; i < 8; i++){
    grid[i] = new Array(8);
  }
  //grid.prototype.forEach(ele => );
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if ((pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8)) {
    return true;
  }
  return false;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    throw new Error('Not valid pos!');
  }
  return this.grid[pos[0]][pos[1]];
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  return piece && piece.color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !!this.getPiece(pos);
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  if (!piecesToFlip) {
    piecesToFlip = new Array;
  }
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
  if (!this.isValidPos(nextPos)) {
    return [];
  } else if (!this.isOccupied(nextPos)) {
    return [];
  } else if (this.isMine(nextPos, color)) {
    return piecesToFlip;
  } else {
    piecesToFlip.push(nextPos);
    return this._positionsToFlip(nextPos, color, dir, piecesToFlip);
  }
  // if (this.isOccupied(pos) || )
  // (this.isValidPos(pos))
  // this.isMine(pos)
  // piecesToFlip = [] of pieces we want to flip
  // checks to see if position is populated
  // will keep going until it hits the same color
  // 
  
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
/**
should return false for an occupied position
should return false for a move that does not capture
should return true for a valid move
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)){
    return false;
  } 

  for (let i = 0; i < Board.DIRS.length; i++) {
    if (this._positionsToFlip(pos, color, Board.DIRS[i]).length !== 0) {
      return true;
    }
  }
  // iterate through all of Board.DIRS
  // if _positionsToFlip always gets an empty array, return false
  // if it does get a populated array. hit true.
  return false;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
// should allow a player to make a valid move
if (!this.validMove(pos, color) || this.isOccupied(pos)){
  throw new Error('Invalid move!');
}

let positions = [];
for (let i = 0; i < Board.DIRS.length; i++) {
  flipit = this._positionsToFlip(pos, color, Board.DIRS[i]);
  positions = positions.concat(this._positionsToFlip(pos, color, Board.DIRS[i]));
}
// positions.forEach(function(coord){
//   this.grid[coord[0]][coord[1]].color = color;
// })

for (let i = 0; i < positions.length; i++) {
  this.grid[positions[i][0]][positions[i][1]].color = color;
}

// grid[3][3] = grid[coord[0]][coord[1]]
this.grid[pos[0]][pos[1]] = new Piece(color)
// should flip captured pieces
// should not allow a piece on top of another piece
// should not allow a move that doesn't capture
// should not allow moves that isolate pieces
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
// should return an empty array when there are no valid moves
// should return an array of valid moves when some are left
Board.prototype.validMoves = function (color) {
  let validPos = new Array;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (this.validMove([i, j], color)) {
        validPos.push([i, j]);
      }
    }
  }

  return validPos;
};

/**
 * Checks if there are any valid moves for the given color.
 */
// should return true when a color has one or more moves
// should return false when a color has no more moves
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length !== 0;
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
// should return false at the start
// should return true when there are no more moves
Board.prototype.isOver = function () {
  return !this.hasMove('black') && !this.hasMove('white');
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE