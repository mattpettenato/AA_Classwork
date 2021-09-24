def my_min(arr)
  arr.each do |el|
    return el if arr.all?{|x| el <= x }
  end
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5