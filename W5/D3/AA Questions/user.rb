require_relative 'questions_database'
require_relative 'question'

#create an instance of user with user_data
class User

  # def self.all
  #   data = QuestionsDatabase.execute(<<-SQL)
  #   SELECT 
  #   FROM
  #     users
  #   SQL
  #   data.each{|ele| User.new(ele)}
  # end
  
  def self.find_by_id(id)
    user_data = QuestionsDatabase.get_first_row(<<-SQL, id: id)
    SELECT 
      users.*
    FROM
      users
    WHERE
      users.id = :id
    SQL

    user_data.nil? ? nil : User.new(user_data)
  end


  def self.find_by_name(fname, lname)
    user_data = QuestionsDatabase.get_first_row(<<-SQL, fname: fname, lname: lname)
    SELECT 
      users.*
    FROM
      users
    WHERE
      users.fname = :fname AND users.lname = :lname
    SQL

    user_data.nil? ? nil : User.new(user_data)
  end



  attr_accessor :id, :fname, :lname

  def initialize(options = {})
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions
    Question.find_by_author_id(id)
  end

end


a = User.find_by_id(1) #lebron
p a.authored_questions