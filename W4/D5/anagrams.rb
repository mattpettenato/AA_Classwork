def anagram?(str1, str2)
    arr = str1.split("").permutation.to_a # O(n) * n! 
    new_arr = []
    arr.each do |word| #O(n)
        new_arr << word.join("") #O(n)
    end
    new_arr.include?(str2) # n!
end



p anagram?("gizmo", "sally")    #=> false
p anagram?("elvis", "lives")    #=> true

# 5! = 120
# 10! = 3628800