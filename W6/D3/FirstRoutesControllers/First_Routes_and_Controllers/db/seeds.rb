# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

#users

bob = User.create!(username: 'bob45')
jim = User.create!(username: 'jim25')


Artwork.destroy_all

#artworks
monalisa = Artwork.create!(title: 'Mona Lisa', image_url: 'https://lh3.ggpht.com/4NKfnxX9Oab09olawX4CYbOAwdV9KU60T-jsGj0Se3jDYjUJransLX-RJYab=s1200', artist_id: bob.id)
scream = Artwork.create!(title: 'The Scream', image_url: 'https://media.npr.org/assets/img/2012/05/03/scream_vert-0af6ef30e3859e9b8c92ca5070ba9f8f991a5ce9.jpg', artist_id: jim.id)

ArtworkShare.destroy_all

# share1 = ArtworkShare.create!(artwork_id: monalisa.id, viewer_id: jim.id)




