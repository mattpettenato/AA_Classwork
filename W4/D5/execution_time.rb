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

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

def largest_contiguous_subsum(arr)
  max = 0
  max2 = 0
  i = 0
  while i < arr.length
    if arr[i] <= max
      max2 = max
      max = arr[i]
    end
    i += 1
  end
  max2 + max
end

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list)
