require_relative 'piece' 
require_relative 'slideable'

class Rook < Piece
  include Slideable

  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def move_dir
    horizontal_dirs
  end

  def symbol

  end

end



# n = Rook.new

# puts n