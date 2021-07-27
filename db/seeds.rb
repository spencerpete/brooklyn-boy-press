# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
User.destroy_all
Comment.destroy_all

@first_post = Post.create!(title:'Dan Snyder\'s Corridor, and fashion for the brooklyn boy', content:'Dan Snyder worked at the top of his six story walk up in the East Village making simple, high quality shirts that he would be proud to buy. In a city that seems to have a Uniqlo or H&M on every corner it became increasingly apparent to Snyder that things in the city needed to change. New York CIty was onced the beacon of fashion, art, hell it was the cultural center of the world. As New York City cleaned up the streets and raised prices,  artists who once gave this City life were finding their place in it shrinking. In came Disney, and Starbucks, out went the local coffee shops, The corner bodega was made into a Duane Reade. Instead of the dollar coffee with milk and two sugars we bought into lates made especially for us, the way we want it. Corridor is an answer to the facist mainstream stores of corporate America. With ethically sourced materials, and handmade quality,  Corridor has upped the game of fashion for the brooklyn boy. Anything you want they have! Want a shirt? They have it. Bucket hat? They have it. A shirt that says New York? They have it! It is not that Corridor is just a good product, but it is in fact a Brooklyn native product. Made in the newly gentrified Brooklyn Navy Yard, Corridor signifies what Brooklyn is all about. Corridor calls to shame the affordable clothing that is made by H&M, in Corridor you are different from rest. I am glad to be a brooklyn boy who wears Corridor.
', author:'Tyler Garrison', main_img_url:'https://now.tufts.edu/sites/default/files/190201_dan_snyder_clothing_lg.jpg', thumbnail_url:'https://cdn.shopify.com/s/files/1/0732/9117/files/Scan0035.jpg?v=1627058858', post_type:'article')

puts "created #{Post.count} post(s)"

@tommyboy = User.create!(username:'TommyBoy', email:'tommyboy@gmail.com', password:'123456')

@tommybahama = User.create!(username:'TommyBahama', email:'tommy@gmail.com', password:'654321')

puts "created #{User.count} user(s)"

@first_comment = Comment.create!(content:'Hey this is a parent comment', user: @tommyboy, post: @first_post)

@second_comment = Comment.create!(content: 'Hey this is a child comment', user: @tommybahama, comment: @first_comment)

puts "created #{Comment.count} comment(s)"