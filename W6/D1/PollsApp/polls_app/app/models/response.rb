class Response < ApplicationRecord

  belongs_to :answer_choice,
    primary_key: :id,
    foreign_key: :answer_choice_id,
    class_name: 'AnswerChoice',
      optional: true

  belongs_to :respondent,
    primary_key: :id,
    foreign_key: :respondant_id,
    class_name: 'User',
      optional: true

end