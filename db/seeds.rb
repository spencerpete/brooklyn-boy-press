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

@first_post = Post.create!(title:'Title', content: 'John James is a great man we all like him he is cool', author:'John James', main_img_url:'hshshshshshhs', thumbnail_url:'hdhdhdhd', post_type:'article')

puts "created #{Post.count} post(s)"

@tommyboy = User.create!(username:'TommyBoy', email:'tommyboy@gmail.com', password:'123456')

@tommybahama = User.create!(username:'TommyBahama', email:'tommy@gmail.com', password:'654321')

puts "created #{User.count} user(s)"

@first_comment = Comment.create!(content:'Hey this is a parent comment', user: @tommyboy, post: @first_post)

@second_comment = Comment.create!(content: 'Hey this is a child comment', user: @tommybahama, comment: @first_comment)

puts "created #{Comment.count} comment(s)"