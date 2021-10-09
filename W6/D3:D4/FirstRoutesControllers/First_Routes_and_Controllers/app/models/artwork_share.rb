class ArtworkShare < ApplicationRecord
  # validates :artwork_id, uniqueness: true
  # validates :viewer_id, uniqueness: true

  belongs_to :artwork

  belongs_to :viewers,
    foreign_key: :viewer_id,
    class_name: 'User'

end
