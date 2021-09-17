class PolyTreeNode
  attr_reader  :children, :parent
  attr_accessor :value
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end


  def parent=(value)
    @parent = value
  end

 
end