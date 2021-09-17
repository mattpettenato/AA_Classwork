class PolyTreeNode

  attr_accessor :value
  attr_reader :parent, :children

  def initialize(value = nil)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(parent)

  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    if child && !self.children_include?(child)
      raise 'node is not a child'
    end

    child.parent = nil
  end

  private
  a

end

def bfs(val)
  # create a queue with node inside
  queue MyQueue.new
  queue.enqueue(self)

  until queue.empty?
    cyr_node = queue.dequeue # take front of queue out of line
    return cur_node if cur_node.value == val # return node if its value is what we are looking for
    cur_node.children.each do |node| # adds children to the queue if we did not match
      queue.enqueue(node)
    end
  end

  nil
end


