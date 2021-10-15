class Sub < ApplicationRecord
  validates :subreddit, :description, :mod_id, presence: true
  validates :subreddit, uniqueness: true
  validates :mod_id, uniqueness:{ scope: :subreddit} 

  belong_to :mod,
  foreign_id: :mod_id,
  class_name: "User"
end
