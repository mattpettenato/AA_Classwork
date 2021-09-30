require_relative 'questions_database'
require_relative 'reply'
require_relative 'question_follow'
require_relative 'question'
require_relative 'user'

class QuestionLike

  def self.find_by_id(id)
    question_like_data = QuestionsDatabase.get_first_row(<<-SQL, id: id)
    SELECT 
      question_likes.*
    FROM
      question_likes
    WHERE
      question_likes.id = :id
    SQL

    question_like_data.nil? ? nil : QuestionLike.new(question_like_data)
  end

  attr_accessor :id, :question_id, :user_id

  def initialize(options = {})
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

end

#p QuestionLike.find_by_id(1)
