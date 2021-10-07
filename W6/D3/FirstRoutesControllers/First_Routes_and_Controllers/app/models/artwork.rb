class Artwork < ApplicationRecord
  validates :artist_id, uniqueness: { scope: :title }, presence: true

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'User'

  # belongs_to :artwork_share

  # has_many :shared_viewers,
  #     through: :artwork_share,
  #     source: :viewers
end
