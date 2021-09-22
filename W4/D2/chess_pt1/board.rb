require 'pieces/piece.rb'
class Board

  SETUP = {
    [0, 0] => [:rook, :B], 
    [0, 1] => [:knight, :B],
    [0, 2] => [:bishop, :B],
    [0, 3] => [:queen, :B],
    [0, 4] => [:king, :B],
    [0, 5] => [:bishop, :B],
    [0, 6] => [:knight, :B],
    [0, 7] => [:rook, :B],
    [7, 0] => [:rook, :W], 
    [7, 1] => [:knight, :W],
    [7, 2] => [:bishop, :W],
    [7, 3] => [:queen, :W],
    [7, 4] => [:king, :W],
    [7, 5] => [:bishop, :W],
    [7, 6] => [:knight, :W],
    [7, 7] => [:rook, :W]
  }

  def initialize
    @board = Array.new(8){Array.new(8, nil)}
    
  end

  def [](pos)
    row, col = pos
    @board[row][col]
  end

  def []=(pos, piece)
    row, col = pos
    @board[row][col] = piece
  end
# iterate through setup and then palce those pieces, then add pawns, then add the nulls. :)
  def populate
    @board.each_index do |row|
      row.each_index do |col|
        if 
      end
    end
  end




end