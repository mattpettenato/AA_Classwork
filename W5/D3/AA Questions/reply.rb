require_relative 'questions_database'
require_relative 'question_follow'
require_relative 'question'
require_relative 'user'

class Reply

  def self.find_by_id(id)
    reply_data = QuestionsDatabase.get_first_row(<<-SQL, id: id)
    SELECT 
      replies.*
    FROM
      replies
    WHERE
      replies.id = :id
    SQL

    reply_data.nil? ? nil : Reply.new(reply_data)
  end

  def self.find_by_user_id(author_id)
    reply_data = QuestionsDatabase.get_first_row(<<-SQL, author_id: author_id)
    SELECT 
      replies.*
    FROM
      replies
    WHERE
      replies.author_id = :author_id
    SQL
  end

  def self.find_by_question_id(question_id)
    reply_data = QuestionsDatabase.get_first_row(<<-SQL, question_id: question_id)
    SELECT 
      replies.*
    FROM
      replies
    WHERE
      replies.question_id = :question_id
    SQL
  end

  def self.find_by_parent_id(parent_reply_id)
    reply_data = QuestionsDatabase.get_first_row(<<-SQL, parent_reply_id: parent_reply_id)
    SELECT 
      replies.*
    FROM
      replies
    WHERE
      replies.parent_reply_id = :parent_reply_id
    SQL
  end

  

  attr_accessor :id, :question_id, :parent_reply_id, :author_id, :body

  def initialize(options = {})
    @id = options['id']
    @parent_reply_id= options['parent_reply_id']
    @question_id = options['question_id']
    @author_id = options['author_id']
    @body = options['body']
  end

end

#p Reply.find_by_parent_id(1)
