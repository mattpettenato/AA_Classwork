
class PolyTreeNode

  attr_reader  :children, :parent
  attr_accessor :value
  def initialize(value, children = [])
    @value = value
    @parent = nil
    @children = children
  end

  def inspect
    "#<Node: @value=#{value}, @children=#{children}, @parent=#{parent}>"
  end

  def parent=(node)
    self.parent.children.delete(self) if self.parent
    @parent = node
    if @parent != nil
      if !@parent.children.include?(self)
        @parent.children << self
      end
    end
    
  end

  def add_child(node)
    if !@children.include?(node)
      node.parent = self
    else

    end
  end

  def remove_child(child)
    if self.children.include?(child)
      child.parent = nil
    else
      raise 'error'
    end
    # child.parent = nil
    # raise 'ree' unless children.include?(child)
  end


#class Searchable
  
  def dfs(val) # val is the target we are looking for
    #found = false the specs only give us 1 parameter
    return nil if self.nil?
    return self if value == val
    self.children.each do |child|
      result = child.dfs(val)
      return result unless result.nil?
    end
    nil
  end

  def bfs(val) # first in, first out
    queue = [] 
    queue.unshift(self)
    until queue.empty?
      current = queue.pop
      return current if current.value == val
        current.children.each do |child|
          queue.unshift(child)
        end
    end
    nil
  end
end

