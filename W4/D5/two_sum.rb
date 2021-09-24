def bad_two_sum?(arr, target_sum)
    sums = []
    arr.each.with_index do |el1, i1| # O(n)
      arr.each.with_index do |el2, i2| # O(n^2)
        if i1 < i2 && el1 + el2 == target_sum # O(1)
          true# O(1)
        end
      end
    end
    false
    #sums.include?(target_sum) # O(n^2)
end

# O(n^2)

arr = [0, 1, 5, 7]
p bad_two_sum?(arr, 6) # => should be true
p bad_two_sum?(arr, 10) # => should be false