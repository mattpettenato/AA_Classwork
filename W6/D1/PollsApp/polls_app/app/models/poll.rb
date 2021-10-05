class Poll < ApplicationRecord

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

    belongs_to :question,
      primary_key: :id,
      foreign_key: :poll_id,
      class_name: 'Question',
      optional: true
end