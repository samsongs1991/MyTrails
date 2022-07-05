# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Demo user
User.create(email: "demo@gmail.com", password: 123456, fname: "Sam", lname: "Song", about_me: "I am the creator of this AllTrails clone site. I actually do love hiking and being outside with nature. My favorite hike is Bandera Mountain near Seattle, WA.", city: "Dallas", state: "TX")

# 20 trails near Seattle, WA
trails = [
    # easy difficulty
    { name: "Discovery Park and Lighthouse Loop Trail", lat: 47.6579, lng: -122.4061, location: "Discovery Park", city: "Seattle", state: "WA", country: "USA", difficulty: "easy", length: 4.4, gain: 472, category: "Loop" }, 
    { name: "Green Lake Trail", lat: 47.6690, lng: -122.3401, location: "Green Lake Park", city: "Seattle", state: "WA", country: "USA", difficulty: "easy", length: 2.9, gain: 29, category: "Loop" }, 
    { name: "Cougar Mountain Indian Trail", lat: 47.5155, lng: -122.1205, location: "Cougar Mountain Regional Wildland Park", city: "Newcastle", state: "WA", country: "USA", difficulty: "easy", length: 3, gain: 236, category: "Out & Back" }, 
    { name: "Big Gulch Trail", lat: 47.9150, lng:-122.2976, location: "North Gulch Open Space", city: "Mukilteo", state: "WA", country: "USA", difficulty: "easy", length: 2.6, gain: 311, category: "Out & Back" }, 
    { name: "The Washington Park Arboretum", lat: 47.6416, lng: -122.2905, location: "Washington Park", city: "Seattle", state: "WA", country: "USA", difficulty: "easy", length: 3.8, gain: 216, category: "Loop" }, 
    { name: "Seward Park Perimeter Loop", lat: 47.5499, lng: -122.2577, location: "Seward Park", city: "Seattle", state: "WA", country: "USA", difficulty: "easy", length: 2.4, gain: 39, category: "Loop" }, 
    { name: "Red Top Lookout Trail", lat: 47.2970, lng: -120.7596, location: "Okanogan-Wenatchee National Forest", city: "Cle Elum", state: "WA", country: "USA", difficulty: "easy", length: 1, gain: 308, category: "Loop" }, 
    
    # moderate difficulty
    { name: "Twin Falls Trail", lat: 47.4423, lng: -121.6853, location: "Olallie State Park", city: "Ragnar", state: "WA", country: "USA", difficulty: "moderate", length: 2.5, gain: 636, category: "Out & Back" }, 
    { name: "Wallace Falls", lat: 47.8669, lng: -121.6780, location: "Wallace Falls State Park", city: "Gold Bar", state: "WA", country: "USA", difficulty: "moderate", length: 5, gain: 1482, category: "Out & Back" }, 
    { name: "Little Si", lat: 47.4867, lng: -121.7535, location: "Mount Si Natural Resources Conservation Area", city: "North Bend", state: "WA", country: "USA", difficulty: "moderate", length: 4.4, gain: 1187, category: "Out & Back" }, 
    { name: "Mirror Lake Trail", lat: 47.3460, lng: -121.4244, location: "Mount Baker Snoqualmie National Forest", city: "Wickersham", state: "WA", country: "USA", difficulty: "moderate", length: 3.5, gain: 688, category: "Out & Back" }, 
    { name: "Rattlesnake Ledge Trail", lat:  47.4347, lng: -121.7687, location: "Rattlesnake Mountain Scenic Area", city: "Cedar Falls", state: "WA", country: "USA", difficulty: "moderate", length: 5.3, gain: 1459, category: "Out & Back" }, 
    { name: "Lake 22 Trail", lat: 48.0770, lng: -121.7457, location: "Mount Baker Snoqualmie National Forest", city: "Verlot", state: "WA", country: "USA", difficulty: "moderate", length: 6.8, gain: 1473, category: "Loop" }, 
    { name: "Heather Lake Trail", lat: 48.0829, lng: -121.7740, location: "Mount Baker Snoqualmie National Forest", city: "Verlot", state: "WA", country: "USA", difficulty: "moderate", length: 5.4, gain: 1210, category: "Out & Back" }, 
    { name: "Bridal Veil Falls Trail", lat: 47.8092, lng: -121.5740, location: "Mount Baker Snoqualmie National Forest", city: "Index", state: "WA", country: "USA", difficulty: "moderate", length: 5.1, gain: 1079, category: "Out & Back" }, 

    # hard difficulty
    { name: "Index Town Wall Trail", lat: 47.8174, lng: -121.5714, location: "Mount Baker Snoqualmie National Forest", city: "Index", state: "WA", country: "USA", difficulty: "hard", length: 2.2, gain: 1250, category: "Out & Back" }, 
    { name: "Mount Pilchuck Trail", lat: 48.0702, lng: -121.8147 , location: "Mount Pilchuck State Park", city: "Verlot", state: "WA", country: "USA", difficulty: "hard", length: 5.2, gain: 2122, category: "Out & Back" }, 
    { name: "Poo Poo Point Trail", lat: 47.5246, lng: -122.0261, location: "Tiger Mountain State Forest", city: "Issaquah", state: "WA", country: "USA", difficulty: "hard", length: 6.6, gain: 1794, category: "Out & Back" }, 
    { name: "Bandera Mountain Summit", lat: 47.4247, lng: -121.5836, location: "Mount Baker Snoqualmie National Forest", city: "North Bend", state: "WA", country: "USA", difficulty: "hard", length: 7.6, gain: 3218, category: "Out & Back" }, 
    { name: "Mailbox Peak Trail", lat: 47.4674, lng: -121.6749, location: "Middle Fork Snoqualmie National Resources Conservation Area", city: "River Bend", state: "WA", country: "USA", difficulty: "hard", length: 4.8, gain: 3959, category: "Out & Back" }, 

]
trails.each do |trail|
    Trail.create(trail)
end

# Dummy reviews
reviews = [
    { user_id: 1, trail_id: 1, rating: 5, text: "Such a great trail!" }, 
    { user_id: 1, trail_id: 2, rating: 4, text: "This is a must see for any family outing." }, 
    { user_id: 1, trail_id: 3, rating: 5, text: "I highly recommend this for you and your dogs!" }, 
    { user_id: 1, trail_id: 4, rating: 4, text: "I loved the scenery here." }, 
    { user_id: 1, trail_id: 5, rating: 5, text: "What a great hike for a cool summer day." }, 
    { user_id: 1, trail_id: 6, rating: 4, text: "The weather was perfect." }, 
    { user_id: 1, trail_id: 7, rating: 5, text: "It is a well maintained trail." }, 
    { user_id: 1, trail_id: 8, rating: 4, text: "Very clean pathway free of any trash or overgrown brush." }, 
    { user_id: 1, trail_id: 9, rating: 5, text: "This is an amazing trail!" }, 
    { user_id: 1, trail_id: 10, rating: 4, text: "A great hike by yourself or with friends." }, 
    { user_id: 1, trail_id: 11, rating: 5, text: "Mother nature will really bring out the best!" }, 
    { user_id: 1, trail_id: 12, rating: 4, text: "I met some friendly hikers along the way!" }, 
    { user_id: 1, trail_id: 13, rating: 5, text: "I had so much fun!" }, 
    { user_id: 1, trail_id: 14, rating: 4, text: "The constant sweat in my eyes made for a great challenge." }, 
    { user_id: 1, trail_id: 15, rating: 5, text: "It was the perfect day!" }, 
    { user_id: 1, trail_id: 16, rating: 4, text: "I had a blast going trekking on this trail." }, 
    { user_id: 1, trail_id: 17, rating: 5, text: "Nothing beats looking out over the horizon on top of a mountain." }, 
    { user_id: 1, trail_id: 18, rating: 4, text: "Simply the most beautiful views you can imagine." }, 
    { user_id: 1, trail_id: 19, rating: 5, text: "The trail can be sketchy and dangerous but it is worth it." }, 
    { user_id: 1, trail_id: 20, rating: 4, text: "I got a great workout in today!" }, 
]
reviews.each do |review|
    Review.create(review)
end