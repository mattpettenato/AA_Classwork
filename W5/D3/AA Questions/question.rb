require_relative 'questions_database'
#require_relative 'user'

class Question

  def self.find_by_id(id)
    question_data = QuestionsDatabase.get_first_row(<<-SQL, id: id)
    SELECT 
      questions.*
    FROM
      questions
    WHERE
      questions.id = :id
    SQL

    question_data.nil? ? nil : Question.new(question_data)
  end

  def self.find_by_author_id(author_id)
    question_data = QuestionsDatabase.get_first_row(<<-SQL, author_id: author_id)
    SELECT 
      *
    FROM
      questions
    WHERE
      questions.author_id = :author_id
    SQL

    question_data.nil? ? nil : Question.new(question_data)
  end



  attr_accessor :id, :title, :body, :author_id 

  def initialize(options = {})
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end


  

end

# Question.find_by_author_id(1)
