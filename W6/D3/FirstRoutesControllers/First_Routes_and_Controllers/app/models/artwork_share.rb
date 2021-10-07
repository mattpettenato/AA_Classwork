class ArtworkShare < ApplicationRecord
  validates :artwork_id, uniqueness: true
  validates :viewer_id, uniqueness: true

  has_one :artwork

  has_many :viewers,
    foreign_key: :viewer_id,
    class_name: 'User'

end
