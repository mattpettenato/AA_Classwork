require_relative 'PolyTreeNode'

class KnightPathFinder
  # next moves??? add children ele + children ele?? example [0 + 2, 0 + 1] => [2, 1] => [3, 3]
    MOVE = [ 
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2]
  ]

  
  
  def self.valid_moves(pos)
    valid_move_arr = []
    [cur_x], [cur_y] = pos
    MOVE.each do |arr|
      new_pos = [cur_x + arr[0], cur_y + arr[1]]
      if new_pos[0] < 
    end
    future_moves = MOVE.dup
    (0...future_moves.length).each do |sub_array|
      #[row1], [col1] = sub_array
      (0...MOVE.length).each do |sub_array2|

      end
    end
    if !KnightPathFinder.considered_pos.include?(pos)
      true
    else
      false
    end
    valid_move_arr 
  end
  attr_reader :start_pos, :considered_pos, :root_node
  def build_move_tree
    #self.root_node = PolyTreeNode(knight, children)
    # BFS build tree(val)
    queue = [root_node] 
    
    until queue.empty?
      current = queue.shift
      #current = queue.pop
      # return current if current.children == target_pos
      #   current.children.each do |child|
          
      #     queue.unshift(child)
      #   end
      new_move_positions(current.value).each do |position|
        next_node = PolyTreeNode.new(position)
        current.add_child(next_node)
        queue << next_node
      end
      p queue.count
    end
    #nil
  end

  

  def initialize(start_pos)
    
    @start_pos = start_pos # root node
    @considered_pos = [start_pos] # children
    @root_node = PolyTreeNode.new(start_pos)
    #build_move_tree
    # @end_position = 

  end

  # def find_path

  # end

# kpf.find_path([2, 1]) # => [[0, 0], [2, 1]]
# kpf.find_path([3, 3]) # => [[0, 0], [2, 1], [3, 3]]
# pos = [0, 0]
# children > [2,1] > [2+1, 1+2]

  def new_move_positions(pos)
    if KnightPathFinder.valid_moves(pos) #&& children.include?(pos) 
      @considered_pos << pos
    end
    return @considered_pos
  end
end


# king = PolyTreeNode.new(root, children) # start_pos = root node
#   children = [
#     [1, 2],
#     [2, 1],
#     [2, -1],
#     [1, -2],
#     [-1, -2],
#     [-2, -1],
#     [-2, 1],
#     [-1, 2]

  two = PolyTreeNode.new(2)
  three= PolyTreeNode.new(3)
  four= PolyTreeNode.new(4)
  five= PolyTreeNode.new(5)
  six= PolyTreeNode.new(6)
  seven= PolyTreeNode.new(7)
  eight= PolyTreeNode.new(8)
  king = PolyTreeNode.new(1, [two, three, four, five, six, seven, eight])

  p king.bfs(1)
  