# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'
puts "Seeding records..."

# create the first user
User.create(
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123"
  )
  
  # create the second user
  User.create(
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "password456"
  )


puts "Seeding completed successfully!"