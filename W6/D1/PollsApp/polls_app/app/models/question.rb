class Question < ApplicationRecord
  validates :text, presence: true

  has_many :answer_choices,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: 'AnswerChoice'

  belongs_to :poll, 
    primary_key: :id,
    foreign_key: :poll_id,
    class_name: 'Poll',
    optional: true

  has_many :responses, 
    through: :answer_choices,
    source: :responses

end