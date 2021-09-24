# def my_min(arr)
#   arr.each do |el| #n
#   arr.all?{|x| el <= x } #n
#   end 2n => n
# end



def my_min(arr)
  min = 0
  i = 0
  while i < arr.length
    if arr[i] <= min
      min = arr[i]
    end
    i += 1
  end
  min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5

def largest_contiguous_subsum(arr)
  subs = []
  arr.each.with_index do |i|
    (i...arr.length).each.with_index do |j|
      subs << arr[i..j]
    end
  end
  max = 0
  subs.each do |ele|
    if ele.sum >= max
      max = ele.sum
    end
  end
  max
end


# O(2n^3)

def largest_contiguous_subsum(arr)
  max_sum = arr.first #
  current_sum = 0  # 0
  arr.each do |el| # 
    current_sum += el
    #max_sum = current_sum if max_sum.nil?
    if current_sum < el
      current_sum = el
    end
    if current_sum > max_sum
      max_sum = current_sum
    end
  end
  max_sum
end

# O(n)

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])

list = [1, 2]
p largest_contiguous_subsum(list)