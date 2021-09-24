# def anagram?(str1, str2)
#     arr = str1.split("").permutation.to_a # O(n) * n! 
#     new_arr = []
#     arr.each do |word| #O(n)
#         new_arr << word.join("") #O(n)
#     end
#     new_arr.include?(str2) # n!
# end



# p anagram?("gizmo", "sally")    #=> false
# p anagram?("elvis", "lives")    #=> true

# 5! = 120
# 10! = 3628800

def second_anagram?(str1, str2)
    check = str2.split("") #O(n)
    str1.each_char do |char| # O(n)
        idx = check.find_index(char) # O(n^2)
        return false if idx.nil? 
        check.delete_at(idx) # O(1)
    end
    check.empty? ? true : false 
end

# O(n^2)

p second_anagram?("gizmo", "sally")    #=> false
p second_anagram?("elvis", "lives")    #=> true