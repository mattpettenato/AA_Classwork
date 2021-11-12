# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.create([
  {title: "one thing", body: "something to do", done: false},
  {title: "bake", body: "cake", done: false},
  {title: "change tire", body: "to the shop", done: true}
])