# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create([
  {username: "matt", email: "m@aa.com", password: "password" }
  # {username: , email: , password: }
])

Sub.create([
  { subreddit: "subreddit 1", description: "asdfaf", mod_id: 1 }
])

Post.create([
  { title: "Post 1", url: "asd", content: "asdf", author_id: "1", subreddit_id: "1"}
  # { title: , url: , content: , author_id: , subreddit_id: }
])
