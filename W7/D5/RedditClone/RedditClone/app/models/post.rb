class Post < ApplicationRecord
  belongs_to :author,
  foreign_key: :author_id,
  class_name: "User"

  belongs_to :subreddit,
  foreign_key: :subreddit_id,
  class_name: "Sub"
end
