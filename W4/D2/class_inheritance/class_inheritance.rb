require "byebug"

class Employee
  attr_reader :salary, :title

  def initialize(name, salary, title, boss=nil)
    @name = name
    @salary = salary
    @title = title
    @boss = boss
  end

  def bonus(multiplier)
    salary * multiplier
  end

end

class Manager < Employee
  attr_accessor :employees

  def initialize(name, salary, title, boss=nil)
    @employees = []
    super(name, salary, title, boss) #name or nil
  end

  def add_employee(employees)
    employees.each do |employee|
      self.employees << employee
    end
  end

  def bonus(multiplier)
    # total_salary = self.employees.sum
    total_salary = self.total_employees_sum
    total_salary * multiplier
  end
  
  def total_employees_sum
    # debugger
    sum = 0
    self.employees.each do |employee|
      if employee.is_a?(Manager)
        sum += employee.salary + employee.total_employees_sum
      else
        sum += employee.salary
      end      
    end
    sum
  end

end

#bonus = (total salary of all sub-employees) * multiplier
ned = Manager.new("Ned", 1000000, "Founder")
darren = Manager.new("Darren", 78000, "TA Manager", "Ned")
david = Employee.new("David", 10000, "TA", "Darren")
shawna = Employee.new("Shawna", 12000, "TA", "Darren")
ned.add_employee([darren])
darren.add_employee([david, shawna])

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000



