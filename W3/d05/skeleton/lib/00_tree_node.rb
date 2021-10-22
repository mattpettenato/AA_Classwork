require "byebug"
class PolyTreeNode
  attr_accessor :children, :value, :parent
  
  def initialize(value)
    @parent = nil
    @children = []
    @value = value
  end
  
  def inspect
    { 'val' => @value}.inspect
  end

  def parent=(other_node)
    if @parent.nil?
      @parent = other_node
      other_node.children << self
    elsif other_node == nil
      @parent = nil
    else
      @parent.children.delete(self)
      @parent = other_node
      other_node.children << self
    end
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    child.parent = nil
  end

  def dfs(target_value)

  end

  def bfs(target_value)
    queue = [self]
    # debugger
    until queue.empty?
      queue_head = queue[0]
      return queue_head if queue_head.value == target_value
      queue.shift
      if queue_head.children.empty? == false
        queue_head.children.each do |child|
        queue << child
        end
      end
    end
    nil
  end
    
 

end
