class User < ApplicationRecord
  validates :username, presence: true

  has_many :artworks,
    foreign_key: :artist_id,
    class_name: 'Artwork'

  has_many :shared_artworks,
      through: :artwork_share,
      source: :artwork
end