require "set"

class MaxIntSet

  attr_reader :max, :store

  def initialize(max)
    # @set = Set.new(0..max)
    @store = Array.new(max, false)
    @max = max
  end

  def insert(num)
    if num > max || num < 0
      raise "Out of bounds" 
    else
      # @set.add(num)
      @store[num] = true
    end

  end

  def remove(num)
    # @set.delete(num)
    @store[num] = false
  end

  def include?(num)
    if @store[num] == true
      return true
    else
      return false
    end
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet

  attr_reader :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !self.include?(num)
      self[num] << num
      @count += 1
    end
    if @count >= num_buckets
      resize!
    end
  end

  def remove(num)
    if self.include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    
    values = []
    dupped = @store.dup
    dupped.each do |bucket|
      values.concat(bucket)
    end
    @store = Array.new(num_buckets * 2){Array.new}
    values.each do |ele|
      new_bucket = ele % (num_buckets * 2)
      @store[new_bucket] << ele
    end
    @store
    


  end
end
