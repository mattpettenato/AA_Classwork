require_relative 'questions_database'
require_relative 'question'
require_relative 'user'

class QuestionFollow

  def self.find_by_id(id)
    question_follows_data = QuestionsDatabase.get_first_row(<<-SQL, id: id)
    SELECT 
      question_follows.*
    FROM
      question_follows
    WHERE
      question_follows.id = :id
    SQL

    question_follows_data.nil? ? nil : QuestionFollow.new(question_follows_data)
  end

  attr_accessor :id, :user_id, :question_id 

  def initialize(options = {})
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end

end

#p QuestionFollow.find_by_id(2)
