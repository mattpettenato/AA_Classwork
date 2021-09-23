class Piece

  def initialize(color, board, pos)
    @color, @board, @pos = color, board, pos
  end

  def moves

  end

  def empty?
    false
  end

  def valid_moves
    # is this positon between 0-7
    
  end

  def to_s
    # make a emoji to represent the string of piece
  end

  def symbol
    #
  end

  def pos=(val)
    # when we move a piece on board, the pieces pos needs to also change
  end

end

rook.empty?