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

@second_post = Post.create!(title:'Do you need this hat? the answer is yes.', content:'Yes, you need this hat, it\'s dope. Spike Lee wears this hat??? I don\'t know what else to say... You don\'t bike? Okay, I don\'t think Spike Lee does either. The hat is good. Spike Lee is good. Be good??? wear this hat.', author: 'Michael Diandro', main_img_url:'http://48x17.com/wp-content/media/2012/11/IMG_8331-712x475.jpg', thumbnail_url:'https://www.bicycleroots.com/media/catalog/product/cache/1/image/713x600/9df78eab33525d08d6e5fb8d27136e95/g/i/giordana_brooklyn_cycling_cap_roger_de_vlaeminck.jpg', post_type:'article')

@third_post = Post.create!(title:'What to do when your favorite director is a creep.',content:'It\'s happened, you refresh your twitter and you see the name of your favorite filmmaker in a string of tweets, but unlike the glorious praise you are used to seeing them receive you are bombarded with negative headlines and attacks of their character. People calling them sick and disgusting, vowing to never watch one of their films again. As a brooklyn boy it is hard to balance the love of an auteur and the possible misgivings that power and praise has on a human being. So what is a brooklyn boy to do? Should we throw away the collection of their films we have nicely displayed for all to see? Take down the foriegn marketing posters we have of their more obscure works? Should we too vow to never consume their work. It\'s hard isn\'t it? You would think that in the cases when we have found out that our heroes used their power to oppress and manipulate others that our concern should lie with the victims, but for a brooklyn boy we too are the victims, and maybe we as a society should start to worry about our feelings. 

It doesn\'t matter what the act is??? it could be an anti-smetic rant, thinking only white people need to be cast in their movies, exposing themselves to female comedians who look up to them, by passing labour laws and destroying the New Zealand film community, putting female actors in dangerous situations to get a more real take, having parties with underage children who are then forced into sexaul relationships, molesting your adopted child, escaping the US to France to dodge sentencing for statutory rape, pushing your female actres to have amental breakdown, being aware of and doing nothing about the rampant sexaul assault being done at the hands of one of the Executive producers you have worked with for a long time??? holy fuck this is exausting??? can\'t we just like their movies and get over it? What if we all just say they are bad and acknowledge that they are bad but continue to support their work...I mean you have to separate the art from the artist right? Watching Annie Hall doesn\'t glorify molestation right? What if we just say we won\'t watch Manhattan cause he dates a teenager in that one? That sounds like a good compromise. Right? Where else in history has it shown to be bad to ignore some facts that are unsettling??? look at America, we know Slavery was bad...so we say that! Great! Well, I guess you could argue that by saying that slavery was bad but not addressing all the laws and systems that were put in place that benefited from slavery has made us into a country with high incarceration and problems with systemic racsim??? When we brooklyn boys say that Woody or Polanski and even Kubrick were bad in their actions but still try to praise their directorial prowess we are just the same as people who scream at PTA meetings about CRT and say that anyone who tries to even examine the role of racism in America hates America. I don\'t really know what to do here either. I know I\'m taking down some posters but I am afraid that might not be enough...So, what do you do when your favorite director is a creep? I don\'t know, maybe look at the vast world of directors who aren\'t assholes??? maybe one that is a lady? 
',author:'Steven Franks',main_img_url:'https://i.imgur.com/D7rrOg3.png', thumbnail_url:'https://imgur.com/1y7VFcP.png', post_type:'article')

@fourth_post = Post.create!(title:'Are We the Baddies? One brooklyn boy\'s take on Promising young woman',author:'Matt LaDouche', content:'', main_img_url:'https://static.onecms.io/wp-content/uploads/sites/6/2020/12/15/Promising-Young-Woman_2.jpg', thumbnail_url:'https://wehco.media.clients.ellingtoncms.com/img/photos/2020/12/24/resized_150246-promising-young-woman-1225-rgb_rgb_79-31792.jpg', post_type:'review')

@fifth_post = Post.create!(title:'Reviewing the Criterion movies I own but haven\'t watched.',author:'Mark Jason', content:'Review comming soon...', main_img_url:'https://d3n8a8pro7vhmx.cloudfront.net/nalip/pages/14931/attachments/original/1535568485/criterion.jpg?1535568485', thumbnail_url:'https://www.indiewire.com/wp-content/uploads/2015/11/criterion-covers.jpg?resize=800,758', post_type:'review')

@sixth_post = Post.create!(title:'Listening to Sour when you are the Joshua Basset in the relationship',author:'Tyler Garrison' ,content:'', main_img_url:'https://cdn.justjaredjr.com/wp-content/uploads/headlines/2021/01/joshua-bassett-debuts-new-song-lie-lie-lie-watch-music-video.jpg', thumbnail_url:'https://assets.teenvogue.com/photos/6076dcb99774944e1309a4d1/4:3/w_1500,h_1125,c_limit/olivia.jpeg', post_type:'review')

puts "created #{Post.count} post(s)"

@tommyboy = User.create!(username:'TommyBoy', email:'tommyboy@gmail.com', password:'123456')

@tommybahama = User.create!(username:'TommyBahama', email:'tommy@gmail.com', password:'654321')

@badTake = User.create!(username:'BadTake', email:'badtake@gmail.com', password:'1234567')

puts "created #{User.count} user(s)"

@first_comment = Comment.create!(content:'This guy stuff is way to expensive! a real brooklyn boy would thrift', user: @tommyboy, post: @first_post)

@second_comment = Comment.create!(content: 'dude you live in queens', user: @tommybahama, comment: @first_comment)

@thir_comment = Comment.create!(content:'Here comes cancel culture to take over brooklyn, they made great are and you are just jealous', user:@badTake, post: @third_post)

puts "created #{Comment.count} comment(s)"