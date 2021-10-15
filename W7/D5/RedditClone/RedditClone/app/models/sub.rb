class Sub < ApplicationRecord
  validates :subreddit, :description, :mod_id, presence: true
  validates :subreddit, uniqueness: true
  validates :mod_id, uniqueness:{ scope: :subreddit} 

  belongs_to :mod,
  foreign_key: :mod_id,
  class_name: "User"

  has_many :posts,
  foreign_key: :subreddit_id,
  class_name: "Post"
end
