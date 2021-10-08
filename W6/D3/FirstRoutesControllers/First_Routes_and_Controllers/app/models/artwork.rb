class Artwork < ApplicationRecord
  #validates :artist_id, uniqueness: { scope: :title }, presence: true

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'User'

  has_many :artwork_shares

  has_many :shared_viewers,
      through: :artwork_shares,
      source: :viewers
end
