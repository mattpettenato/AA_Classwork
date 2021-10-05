class User < ApplicationRecord

  has_many :authored_polls,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Poll'

  has_many :responses,
    primary_key: :id,
    foreign_key: :respondant_id,
    class_name: 'Response'
end