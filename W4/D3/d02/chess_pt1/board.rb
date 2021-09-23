require "byebug"
# require 'pieces/piece.rb'
class Board

  # SETUP = {
  #   [0, 0] => [:rook, :B], 
  #   [0, 1] => [:knight, :B],
  #   [0, 2] => [:bishop, :B],
  #   [0, 3] => [:queen, :B],
  #   [0, 4] => [:king, :B],
  #   [0, 5] => [:bishop, :B],
  #   [0, 6] => [:knight, :B],
  #   [0, 7] => [:rook, :B],
  #   [7, 0] => [:rook, :W], 
  #   [7, 1] => [:knight, :W],
  #   [7, 2] => [:bishop, :W],
  #   [7, 3] => [:queen, :W],
  #   [7, 4] => [:king, :W],
  #   [7, 5] => [:bishop, :W],
  #   [7, 6] => [:knight, :W],
  #   [7, 7] => [:rook, :W]
  # }

  TOP_ROW = [[:rook, :B], [:knight, :B], [:bishop, :B], [:queen, :B], [:king, :B], [:bishop, :B], [:knight, :B], [:rook, :B]]
  BOT_ROW = [[:rook, :W], [:knight, :W], [:bishop, :W], [:queen, :W], [:king, :W], [:bishop, :W], [:knight, :W], [:rook, :W]]

  def initialize
    @grid = Array.new(8){Array.new(8, nil)}
    self.populate
  end
  
  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, piece) #grid.[]=(row, col) grid[row,col]
    row, col = pos
    @grid[row][col] = piece
  end
# iterate through setup and then palce those pieces, then add pawns, then add the nulls. :)
  def populate
    #debugger
    @grid.each_with_index do |subarr, row|  
      subarr.each_with_index do |el, col| 
        if row == 0 
          @grid[row][col] = TOP_ROW[col] 
        elsif row == 1 
          @grid[row][col] = [:pawn, :B]
        elsif row == 6
          @grid[row][col] = [:pawn, :W]
        elsif row == 7
          @grid[row][col] = BOT_ROW[col]
        elsif row >= 2 && row <= 5
          @grid[row][col] = [:null]
        end
      end
    end
  end

  def move_piece(start_pos, end_pos) # need piece color later board.move_piece([0,2],[4,5])
    # debugger
    if start_pos == end_pos
      raise 'invalid move'
    end

    if self[start_pos] == [:null]
      raise 'No piece here :('
    end
    
    if start_pos.any?{|ele| ele > 7} || end_pos.any?{|ele| ele > 7}
      raise 'Cannot move out of bounds'
    end
 
    if self[end_pos][1] == self[start_pos][1] # not the same color as our current piece
      raise 'please dont eat your team'
    end

    self[end_pos] = self[start_pos]
    self[start_pos] = [:null]
  end

  # not same team / color (:B or :W) DONE

  # not oob DONE
  # not same as start pos DONE
  # start pos not nil DONE
  #--------
  # move the object to the new pos (remove from old pos)
  # remove piece if opposite team(kill piece)


end

b = Board.new
b.populate
p b
puts "_____________________"
puts "_____________________"
puts "_____________________"

b.move_piece([4,0], [4,1])
p b

