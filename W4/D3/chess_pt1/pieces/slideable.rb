module Slideable
  
  HORIZONTAL_DIR = [ 
    [0, 1],  # right
    [1, 0],  # down
    [0, -1], # left
    [-1, 0]  # up
  ]
  
  DIAGONAL_DIR = [
    [1, 1],   # down_right
    [1, -1],  # down_left
    [-1, -1], # up_left
    [-1, 1]   # up_right
  ]

  def move_dirs
    # just gives an error 
    raise "these are not the moves you're looking for"
    # shouldnt be used if done correctly
  end

  def horizontal_dirs
    HORIZONTAL_DIR
  end

  def diagonal_dirs
    DIAGONAL_DIR
  end

  def moves
    moves_arr = []

    move_dir.each do |dirs| 
      moves_arr.concat(grow_unblocked_moves_in_dir(dirs))
    end

    moves_arr
  end

  def grow_unblocked_moves_in_dir(dirs)
    moves = []
    dir_x, dir_y = dirs 
    test_x, test_y = self.pos
    while switch == true
      test_x += dir_x
      text_y += dir_y
      if !valid_move(test_x, test_y)
        switch = false
      else
        moves << [test_x, test_y]
      end
    end
    return moves
  end

  moves = []
  dir_x, dir_y = dirs 
  test_x, test_y = self.pos
  test_x += dir_x
  text_y += dir_y
  until !valid_move(test_x, test_y)
    if self. == #piece at test location has opponent color
      moves << [test_x, test_y]
      return moves
    end
    if grid[test_x, text_y].color == self.color
      return moves
    end 
    moves << [test_x, test_y]
    test_x += dir_x
    text_y += dir_y
  end
  

  def valid_move(x, y)
    pos = [x, y]

    if pos == self.pos
      false
    end

    if x > 7 || x < 0 || y > 7 || y < 0
      false
    end

    true

  end

end




# Grab rook object
# rook_object.moves --- provide array of valid moves
# how?
# utilize the -pointer to board
              #-current pos
              #-HORIZONTAL_DIRS
              #-grow_unblocked_moves_in_dir(pos)